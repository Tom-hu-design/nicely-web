"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  HeartIcon,
  SparklesIcon as SparklesIconMarketing,
  NotebookIcon,
  QuoteIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function LandingPageContent() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="min-h-screen bg-[#F5F5F5] overflow-x-hidden">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={"/images/logo.png"}
                  alt="Nicely Logo"
                  width={140}
                  height={60}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </Link>

              {/* Sign Up Button */}
              <SignInButton mode="modal">
                <Button
                  className="rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base text-white"
                  style={{
                    backgroundColor: "#1A1CD7",
                    ["--hover-color" as string]: "#4F46E5",
                  }}
                >
                  Sign Up Today
                </Button>
              </SignInButton>
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed navbar */}
        <div className="pt-1 sm:pt-2">
          <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-8 overflow-x-hidden">
            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center relative mt-16 sm:mt-20 lg:mt-0">
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Yellow star */}
                <motion.div
                  className="absolute top-10 right-20 text-amber-400 text-2xl hidden sm:block"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  ✦
                </motion.div>
                {/* Circle */}
                <motion.div
                  className="absolute bottom-20 left-10 w-16 h-16 bg-amber-400/20 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />
              </div>

              {/* Text Content */}
              <motion.div
                className="text-left space-y-4 sm:space-y-5 flex flex-col items-start justify-center lg:pl-13 pt-8 sm:pt-12 lg:pt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-[45px] sm:text-[51px] lg:text-[62px] font-bold leading-tight tracking-tight text-gray-900">
                  You didn&apos;t go to therapy just to stay
                  <span className="text-[#6559D4]"> the same.</span><br />
                </h1>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed max-w-xl">
                <b className="text-[17px] sm:text-[19px] lg:text-[20px]">Therapy gives you direction, we help you walk it.</b><br /> Nicely turns your therapy goals into clear actions by automatically organizing your therapy notes.
                </p>

                <motion.div
                  className="pt-2 sm:pt-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <SignInButton
                    mode="modal"
                    signUpForceRedirectUrl="/sign-in-success"
                  >
                    <Button
                      className="px-8 sm:px-7 py-4 sm:py-5 text-[15px] sm:text-base rounded-lg w-full sm:w-auto 
                        text-white bg-[#FFC13B] hover:bg-[#E6A82F] transition-colors"
                    >
                      Get started today
                    </Button>
                  </SignInButton>

                  {/* Privacy Link Section - Replacing Security Badges */}
                  <div className="mt-3 flex items-center space-x-2 group cursor-pointer"
                    onClick={() => {
                      const privacySection = document.getElementById('privacy-section');
                      if (privacySection) {
                        const offset = window.innerHeight / 2 - privacySection.offsetHeight / 2;
                        const elementPosition = privacySection.getBoundingClientRect().top + window.pageYOffset;
                        
                        // Adjust offset based on screen size
                        let adjustedOffset = offset;
                        if (window.innerWidth < 640) { // mobile
                          adjustedOffset = offset * 0.3; // slightly higher on mobile
                        } else if (window.innerWidth < 1024) { // tablet
                          adjustedOffset = offset * 0.35; // slightly higher on tablet
                        }
                        
                        window.scrollTo({
                          top: elementPosition - adjustedOffset,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <span className="underline text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm sm:text-base">
                      Learn more about how we protect your data
                    </span>
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:transform group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone Image with Decorative Elements */}
              <motion.div
                className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-none mx-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {/* Decorative chat bubble */}
                <motion.div
                  className="absolute -left-16 bottom-20 w-12 h-12 bg-blue-500/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />

                <div className="relative w-full aspect-[9/19] max-w-[300px] mx-auto transform -rotate-[5deg] hover:-rotate-[7deg] transition-transform duration-300">
                  {/* iPhone Frame */}
                  <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_0_60px_rgba(0,0,0,0.1)] border-[12px] border-white">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-white rounded-b-3xl"></div>
                  </div>
                  {/* Screen Content */}
                  <div className="absolute inset-[12px] rounded-[1.8rem] overflow-hidden bg-white border border-gray-200">
                    <div className="relative w-full h-full transform origin-top">
                      <Image
                        src="/images/chat-preview.png"
                        alt="Therapy chat interface preview"
                        fill
                        className="object-cover"
                        sizes="(max-width: 300px) 100vw, 300px"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Orange smiley */}
                <motion.div
                  className="absolute -right-10 top-20 w-16 h-16 bg-amber-500/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                />
              </motion.div>
            </div>

            {/* Video Demo Section */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 mt-6 sm:mt-8">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  {/* Decorative elements */}
                  <div className="absolute -left-8 top-1/2 w-16 h-16 bg-purple-100/30 rounded-full blur-xl transform -translate-y-1/2" />
                  <div className="absolute right-0 top-0 w-12 h-12 bg-amber-100/40 rounded-full blur-lg" />
                  
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative">
                    See Nicely in
                    <span className="text-[#6559D4] relative inline-block ml-3">
                      Action
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#6559D4]/20 rounded-full" />
                    </span>
                    {/* Decorative star */}
                    <span className="absolute -right-6 -top-6 text-amber-400 text-2xl hidden sm:block">✦</span>
                  </h2>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative max-w-4xl mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#6559D4]/10 rounded-full blur-xl" />
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-amber-100/30 rounded-full blur-xl" />
                
                {/* YouTube Video Wrapper with aspect ratio */}
                <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/65POjL1ZvyY"
                    title="Nicely Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

            {/* Collaborators Section */}
            <motion.div
              className="w-full max-w-lg lg:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <h2 className="text-lg sm:text-xl font-medium text-center mb-6 sm:mb-7 text-gray-600 pt-7">
                Built with therapists and collaborators at
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center">
                <UniversityLogo 
                  name="UPenn" 
                  image={"/images/upenn.png"}
                  width={400}
                  height={150}
                />
                <UniversityLogo 
                  name="Columbia" 
                  image={"/images/columbia.png"}
                  width={400}
                  height={150}
                />
                <UniversityLogo 
                  name="Vanderbilt" 
                  image={"/images/vanderbilt.png"}
                  width={400}
                  height={150}
                />
                <UniversityLogo 
                  name="Northwestern" 
                  image={"/images/northwestern.png"}
                  width={400}
                  height={150}
                />
              </div>
            </motion.div>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
              {/* Title Section */}
              <div className="text-center mb-4 sm:mb-8 mt-4 sm:mt-5">
                <div className="relative inline-block px-4 sm:px-0">
                  {/* Different decorative elements */}
                  <div className="absolute -left-12 top-1/2 w-24 h-24 bg-amber-100/30 rounded-full blur-2xl transform -translate-y-1/2" />
                  <div className="absolute right-0 top-0 w-20 h-20 bg-[#6559D4]/10 rounded-full blur-xl" />
                  
                  <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 relative">
                    How{" "}
                    <span className="text-[#6559D4] relative inline-block px-1">
                      Nicely
                      {/* Purple underline */}
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#6559D4]/20 rounded-full" />
                      {/* Decorative dots */}
                    </span>
                    {" "}Works
                    {/* Different star decoration */}
                    <span className="absolute -right-5 top-1/2 transform -translate-y-1/2 text-amber-400 text-[50px] rotate-12">
                      ⋆
                    </span>
                  </h2>
                  <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 mx-auto leading-relaxed">
                    Your journey to better mental health, made simple and effective
                    <span className="absolute -right-4 bottom-0 text-amber-400 text-sm">✧</span>
                  </p>
                </div>
              </div>

              {/* Features Stack */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 ">
                {/* Session Notes */}
                <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        Automated Transcription
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Effortlessly summarize key points and action items from last session.
                      </p>
                      <ul className="space-y-2 sm:space-y-3">
                        <FeatureListItem>No notes, no distractions—just healing</FeatureListItem>
                        <FeatureListItem>Recording deleted right after transcribing</FeatureListItem>
                        <FeatureListItem>Upload, and we handle the rest</FeatureListItem>
                      </ul>
                    </div>
                    <div className="relative w-full aspect-video bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={"/videos/transcription.mp4"} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                {/* Daily Self-Care */}
                <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:flex-row-reverse">
                    <div className="space-y-3 sm:space-y-4 lg:order-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        Session Takeaways
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Next steps in healing are always clear, simple, and ready for you.
                      </p>
                      <ul className="space-y-2 sm:space-y-3">
                        <FeatureListItem>Never lose a breakthrough</FeatureListItem>
                        <FeatureListItem>Simplify complex conversations into actionable insights</FeatureListItem>
                        <FeatureListItem>Reflect and engage with past insights anytime</FeatureListItem>
                      </ul>
                    </div>
                    <div className="relative w-full aspect-video bg-gray-50 rounded-lg shadow-sm overflow-hidden lg:order-1">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={"/videos/session-notes.mp4"} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                {/* Between Session Thoughts */}
                <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        Between Session Thoughts
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Speak freely to Nicely and easily revisit your progress before your next session
                      </p>
                      <ul className="space-y-2 sm:space-y-3">
                        <FeatureListItem>24/7 guidance when emotions feel unclear</FeatureListItem>
                        <FeatureListItem>Capture and structure your thoughts made simple</FeatureListItem>
                        <FeatureListItem>Guide your next session with facts, not just memory</FeatureListItem>
                      </ul>
                    </div>
                    <div className="relative w-full aspect-video bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={"/videos/thoughts.mp4"} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Commitment Section */}
            <div id="privacy-section" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  {/* Decorative elements */}
                  <div className="absolute -left-8 top-1/2 w-16 h-16 bg-purple-100/30 rounded-full blur-xl transform -translate-y-1/2" />
                  <div className="absolute right-0 top-0 w-12 h-12 bg-amber-100/40 rounded-full blur-lg" />
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 relative">
                    Your Privacy, Our
                    <span className="text-[#6559D4] relative inline-block ml-3">
                      Priority
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#6559D4]/20 rounded-full" />
                    </span>
                  </h2>
                </div>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  We treat your data with the same confidentiality as your therapy sessions.
                </p>
              </div>

              {/* Privacy Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Data Ownership Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#6559D4]/10 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldIcon className="w-8 h-8 text-[#6559D4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Data Ownership & Control
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    You remain in full control of your data and can choose to delete them anytime.
                  </p>
                </div>

                {/* Privacy-Powered AI Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#6559D4]/10 rounded-2xl flex items-center justify-center mb-4">
                    <LockIcon className="w-8 h-8 text-[#6559D4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Private by Design
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We utilize a SOC 2 and HIPAA-compliant database (Supabase) that encrypts at rest with AES-256. 
                  </p>
                </div>

                {/* No AI Training Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#6559D4]/10 rounded-2xl flex items-center justify-center mb-4">
                    <AiModelIcon className="w-8 h-8 text-[#6559D4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Not Used for AI Training
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Your conversations are never used to train our AI models. Your privacy comes first.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Nicely & Commitment Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-16">
              {/* Why Nicely? Section */}
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <div className="relative inline-block">
                    {/* Decorative elements */}
                    <div className="absolute -left-12 -top-8 w-24 h-24 bg-blue-100/50 rounded-full blur-xl" />
                    <div className="absolute right-0 bottom-0 w-20 h-20 bg-purple-100/50 rounded-full blur-lg" />
                    <div className="absolute -right-8 top-1/2 w-16 h-16 bg-amber-100/40 rounded-full blur-lg transform -translate-y-1/2" />
                    
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative">
                      Why{" "}
                      <span className="text-[#6559D4] relative inline-block">
                        Nicely
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6559D4]/20 rounded-full" />
                        {/* Decorative sparkles */}
                        <span className="absolute -right-6 -top-6 text-amber-400 text-2xl">✦</span>
                        <span className="absolute -left-4 -bottom-4 text-[#6559D4]/30 text-xl">⋆</span>
                      </span>
                      ?
                      {/* Additional decorative elements */}
                      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
                        <div className="relative">
                          <div className="w-4 h-4 bg-[#6559D4]/20 rounded-full absolute -top-6 right-0" />
                          <div className="w-3 h-3 bg-amber-300/30 rounded-full absolute -bottom-4 -right-2" />
                        </div>
                      </div>
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ExpandableHighlight
                    icon={<SparklesIconMarketing size={16} />}
                    title="Capture key moments with ease"
                    description="Therapy insights are processed automatically, so nothing is missed."
                  />
                  <ExpandableHighlight
                    icon={<BellIcon className="w-4 h-4" />}
                    title="Reminders That Fit Your Journey"
                    description="Receive gentle reminders aligned with your goals to keep you supported each day."
                  />
                  <ExpandableHighlight
                    icon={<ChartIcon className="w-4 h-4" />}
                    title="Track Your Growth, Easily"
                    description="Track your progress over time with a clear view to appreciate each step forward."
                  />
                  <ExpandableHighlight
                    icon={<HeartIcon size={16} />}
                    title="Built for You, Here for You"
                    description="You deserve a solution that truly works. We are here building it with you to make it happen."
                  />
                </div>
              </div>
            </div>

            {/* Testimonials Section - Temporarily Disabled
            <motion.div
              className="w-full max-w-7xl mx-auto px-4 py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="absolute -left-8 -top-8 w-16 h-16 bg-blue-100/50 rounded-full blur-xl" />
                  <div className="absolute -right-6 -bottom-6 w-12 h-12 bg-purple-100/50 rounded-full blur-lg" />
                  
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 relative">
                    Join Our{" "}
                    <span className="text-[#6559D4] relative inline-block mb-2">
                      Community
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#6559D4]/20 rounded-full" />
                    </span>
                    {" "}Today
                    <div className="absolute -right-4 top-0 text-amber-400 text-2xl">✦</div>
                  </h2>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className="flex space-x-6 mb-6"
                  style={{
                    animation: "scroll-left 30s linear infinite",
                  }}
                >
                  <TestimonialCard
                    name="warm.toffee"
                    review="Honestly, I didn't expect to use this much, but now it's part of my weekly routine. Super helpful."
                  />
                  <TestimonialCard
                    name="tinycactus05"
                    review="This makes it so easy to keep track of what's actually important. No more scrambling before sessions!"
                  />
                  <TestimonialCard
                    name="moonlit.02"
                    review="I never realized how much I forget between sessions until I started using this. Total game changer."
                  />
                  <TestimonialCard
                    name="cozy-teacup-65"
                    review="loved it."
                  />
                  <TestimonialCard
                    name="nightowl-7"
                    review="Now I can easily find my notes when I need them."
                  />
                  <TestimonialCard
                    name="cloudberrypuff"
                    review="Love that I don't have to stress about forgetting things between sessions anymore."
                  />
                  <TestimonialCard
                    name="sleepyotter"
                    review="My therapist said I am more engaged, and I feel that I am making much more progress!"
                  />
                </div>

                <div
                  className="flex space-x-6"
                  style={{
                    animation: "scroll-right 30s linear infinite",
                  }}
                >
                  <TestimonialCard
                    name="brianna_w5"
                    review="Before this I never knew what to talk about in therapy. Now I show up with actual insights."
                  />
                  <TestimonialCard
                    name="shy.penguin"
                    review="It's wild how much I used to forget. Now I can pick up right where we left off, and it makes my sessions way better."
                  />
                  <TestimonialCard
                    name="buttercup_26"
                    review="This has made my work after therapy feel effortless."
                  />
                  <TestimonialCard
                    name="sleepymoth"
                    review="Didn't expect to like the structured reminders, but they actually help me remember key things without feeling like homework."
                  />
                  <TestimonialCard
                    name="hannah.r21"
                    review="Before this, I let my therapist guide every session. Now, I come in with things I want to dive into."
                  />
                  <TestimonialCard
                    name="autumn.lantern"
                    review="My notes used to be all over the place, but now I can actually use them in therapy."
                  />
                  <TestimonialCard
                    name="honey_dreams"
                    review="Started to figure patterns in my emotions I'd never noticed before."
                  />
                </div>
              </div>
            </motion.div>
*/}
          </div>
        </div>
      </div>

      {/* Footer Section - Moved outside the main container */}
      <div className="w-full bg-[#00008B] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-4">
            {/* Contact Section */}
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Us.</h2>

            {/* Contact Details */}
            <div className="space-y-1 text-sm">
              <p>New York, US</p>
              <p>tom_hu@nicely.tech</p>
              <p>(615) 931-7093</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/nicely-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/nicely_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="https://x.com/tech_nicely"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
              >
                <TwitterIcon className="size-5" />
              </a>
            </div>

            {/* Copyright */}
            {/* <div className="pt-2 text-white/70 text-sm">
              <p>© 2024 Nicely.</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-8 lg:p-10 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="size-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#6559D4] to-[#4F46E5]">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function TestimonialCard({ name, review }: { name: string; review: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-shrink-0 w-5 h-5 text-gray-400">
          <QuoteIcon size={16} />
        </div>
        <span className="font-medium text-gray-900">{name}</span>
      </div>
      <p className="text-gray-700 text-sm">{review}</p>
    </div>
  );
}

function UniversityLogo({
  name,
  image,
  width,
  height,
}: {
  name: string;
  image: string;
  width: number;
  height: number;
}) {
  return (
    <div className="w-full h-full px-4">
      <div className="relative w-full h-[60px] flex items-center justify-center">
        <Image
          src={image}
          alt={`${name} logo`}
          width={width}
          height={height}
          className="object-contain max-h-[60px] w-auto filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          style={{
            maxWidth: "150px",
          }}
        />
      </div>
    </div>
  );
}

function ExpandableHighlight({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group">
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full">
        <div className="flex items-start gap-4 group-hover:opacity-80 transition-opacity duration-200">
          <div className="mt-[3px]">
            <div className="w-7 h-7 rounded-full bg-[#6559D4] flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900 text-left">{title}</h3>
            <ChevronIcon
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3 ml-10">
          {description}
        </p>
      </div>
    </div>
  );
}

function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function LinkedInIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
  );
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function FeatureSparklesIcon(
  props: React.ComponentProps<"svg"> & { size?: number }
) {
  return (
    <svg
      width={props.size || 22}
      height={props.size || 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.813 1.912a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.813-1.912a2 2 0 001.272-1.272L12 3z" />
    </svg>
  );
}

function BellIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function ChartIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function ShieldIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function LockIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function FeatureListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center space-x-3 text-sm sm:text-base text-gray-700">
      <CheckIcon className="w-4 h-4 text-[#6559D4]" />
      <span>{children}</span>
    </li>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldLockIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11h8v5a4 4 0 01-8 0v-5z" />
      <path d="M12 11v-1a2 2 0 10-2-2" />
    </svg>
  );
}

function ServerIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function KeyIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function LockShieldIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11h8v5a4 4 0 01-8 0v-5z" />
    </svg>
  );
}

function SealIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8" />
      <path d="M8 12l8 0" />
    </svg>
  );
}

function AiModelIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  );
}
