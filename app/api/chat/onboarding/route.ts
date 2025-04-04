import { streamText, tool } from "ai";
import { openai } from "@ai-sdk/openai";
import { currentUser, User } from "@clerk/nextjs/server";
import { addUserIfNotExists, getOnboardingChatOrNullIfNonExistent, getUser, getUserOrThrow, saveMessage, updateUser } from "@/lib/database/supabase";
import { z } from "zod";
import { COMPLETE_ONBOARDING_TOOL_NAME } from "@/models/constants";
import { extractAndStoreInsights } from "@/lib/ai/RAG";
import { therapistPrompt } from "@/lib/ai/prompts";
import { generateUUID } from "@/lib/utils";
import { onboardingTaskPromopt } from "@/lib/ai/prompts";

const onboardingPrompt = `
  ${onboardingTaskPromopt}

  Regarding your role in the process:
  ${therapistPrompt}
`;

const testPrompt = `
  ask about an recent user's experience
  then repeat it back to the user for confirmation
  at last, call the completeOnboarding tool to finish the process.
`;

const handleOnboardingFinished = (user: User) => {
  updateUser(user.id, { onboarding_completed: true });
};

// TODO: how to get text as we are streaming and detect if it starts with "[completed]"
export async function POST(req: Request) {
  const { messages } = await req.json();

  const clerkUser = await currentUser();
  console.log("onboarding chat for user", clerkUser?.id);

  if (!clerkUser) {
    return new Response("Unauthorized", { status: 401 });
  }

  

  const user = await getUserOrThrow(clerkUser.id);

  // get onboarding chatId
  const chat = await getOnboardingChatOrNullIfNonExistent(user.id!);
  if (!chat) {
    return new Response("Onboarding chat not found", { status: 404 });
  }

  // save the user's messages to the chat
  const lastMessage = messages[messages.length - 1];
  if (lastMessage.role === "user") {
    await saveMessage(chat.id, lastMessage);
  }

  const result = streamText({
    model: openai("gpt-4o"),
    system: onboardingPrompt,
    messages,
    onFinish: async (completion) => {
      await saveMessage(
        chat.id,
        {
          id: generateUUID(),
          role: "assistant",
          content: completion.text,
          created_at: new Date(),
          promptTokens: completion.usage.promptTokens,
        completionTokens: completion.usage.completionTokens,
        totalTokens: completion.usage.totalTokens,
      });
    }, 
    tools: {
      [COMPLETE_ONBOARDING_TOOL_NAME]: tool({
        description: "Complete the onboarding process",
        // @ts-ignore: seem like there is a bug in the types
        parameters: z.object({}),
        execute: async () => {
          handleOnboardingFinished(clerkUser);
          await extractAndStoreInsights(messages, user.id!);
          return { completed: true };
        },
      }),

      saveName: tool({
        description: "Save the user's name",
        parameters: z.object({
          preferredName: z.string().describe("The user's preferred name"),
        }),
        execute: async ({ preferredName }) => {
          await updateUser(clerkUser.id, {
            preferred_name: preferredName,
          });
          return { completed: true };
        },
      }),
    },
  });

  console.log("onboarding completed");

  return result.toDataStreamResponse();
}

// TODO: this is a test endpoint to check if the onboarding is completed
export async function GET(req: Request) {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return new Response("Unauthorized", { status: 401 });
  }

  let onboardingCompleted = false; 
  const user = await getUser(clerkUser.id);
  if (user) {
    onboardingCompleted = user.onboarding_completed;
  }

  return new Response(JSON.stringify({
    onboardingCompleted,
  }));
}

