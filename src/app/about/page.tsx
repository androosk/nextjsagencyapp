"use client";
import { useState } from "react";
import Image from "next/image";
import { useFadeIn } from "@/functions/useFadeIn";
import { classNames } from "@/functions/classnames";
import { useIsMobile } from "@/functions/useIsMobile";

export default function About() {
  useFadeIn();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("story");

  const sections = [
    {
      id: "story",
      title: "Our Story",
      content: `Third Andrew Creative was born from a simple belief: every business has a unique story worth telling. Founded by Andrew, a passionate designer and developer with years of experience in the Salt Lake Valley, we've grown from a one-person operation to a trusted partner for businesses looking to make their mark online.

      What started as freelance web design projects has evolved into a full-service creative agency. We've learned that the best websites aren't just beautiful—they're strategic, functional, and authentically represent the people behind the business.`,
    },
    {
      id: "mission",
      title: "Our Mission",
      content: `We exist to bridge the gap between your vision and your digital presence. Too many businesses settle for cookie-cutter websites that don't capture their essence. We believe your online presence should be as unique and compelling as your business itself.

      Our mission is to create digital experiences that not only look stunning but drive real results—whether that's more leads, better engagement, or simply a website you're proud to share.`,
    },
    {
      id: "approach",
      title: "Our Approach",
      content: `We're not just another web agency. We're collaborators, listeners, and problem-solvers. Every project starts with understanding your goals, your audience, and your unique challenges.

      From there, we craft custom solutions that reflect your brand's personality while delivering measurable results. We believe in transparency, clear communication, and building long-term partnerships with our clients.`,
    },
  ];

  return (
    <main className="mt-48">
      {/* Hero Section */}
      <div className="w-[100vw] h-full items-center lg:flex border-black border-b-[1px]">
        <div className="w-screen lg:min-w-[50vw] h-64 lg:h-screen bg-gradient-to-br from-blue-200 to-slate-400 bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] fadeIn flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 element-to-fadeIn">
              About Us
            </h1>
            <p className="text-xl lg:text-2xl italic element-to-fadeIn">
              Crafting digital experiences with purpose
            </p>
          </div>
        </div>
        <div className="lg:-translate-x-32 px-10 py-10 lg:px-0 lg:py-0 bg-white flex flex-col justify-center">
          <div className="fadeIn max-w-2xl">
            <h2 className="text-2xl lg:text-4xl mb-6">
              Meet Third Andrew Creative
            </h2>
            <p className="leading-8 lg:text-lg mb-6">
              We&apos;re a creative agency that believes every business has a
              story worth telling beautifully online.
            </p>
            <p className="leading-8 lg:text-lg">
              Based in the Salt Lake Valley, we&apos;ve been helping businesses
              connect with their audiences through thoughtful design and
              strategic development since our founding.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-black border-b-[1px] bg-white">
        <div className="flex justify-center">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={classNames(
                "px-8 py-6 text-lg tracking-wider transition-all duration-300 border-black",
                activeSection === section.id
                  ? "bg-blue-200 border-b-[3px]"
                  : "hover:bg-gray-50 border-r-[1px] last:border-r-0"
              )}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white border-black border-b-[1px]">
        <div className="max-w-6xl mx-auto px-10 py-16">
          {sections.map(section => (
            <div
              key={section.id}
              className={classNames(
                "transition-all duration-500",
                activeSection === section.id ? "block fadeIn" : "hidden"
              )}
            >
              <h3 className="text-3xl lg:text-4xl mb-8 element-to-fadeIn">
                {section.title}
              </h3>
              <div className="prose prose-lg max-w-none element-to-fadeIn">
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-8 text-lg">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-400 border-black border-b-[1px]">
        <div className="max-w-6xl mx-auto px-10 py-16">
          <h3 className="text-3xl lg:text-4xl text-white mb-12 text-center element-to-fadeIn">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* You can add team member cards here */}
            <div className="bg-white p-8 border-black border-[1px] element-to-fadeIn">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Andrew Tirpok</h4>
                <p className="text-gray-600 mb-4">
                  Founder & Creative Director
                </p>
                <p className="text-sm leading-6">
                  Passionate about creating digital experiences that make a
                  difference. Specializes in web design, development, and
                  digital strategy.
                </p>
              </div>
            </div>

            {/* Add more team members as needed */}
            <div className="bg-white p-8 border-black border-[1px] element-to-fadeIn">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Team Member</h4>
                <p className="text-gray-600 mb-4">Designer</p>
                <p className="text-sm leading-6">
                  Add team member information here when you expand your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white border-black border-b-[1px]">
        <div className="max-w-6xl mx-auto px-10 py-16">
          <h3 className="text-3xl lg:text-4xl mb-12 text-center element-to-fadeIn">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center element-to-fadeIn">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Creativity</h4>
              <p className="leading-6">
                Every project is an opportunity to create something unique and
                meaningful.
              </p>
            </div>
            <div className="text-center element-to-fadeIn">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Collaboration</h4>
              <p className="leading-6">
                The best results come from working closely with our clients as
                partners.
              </p>
            </div>
            <div className="text-center element-to-fadeIn">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">Results</h4>
              <p className="leading-6">
                Beautiful design means nothing without measurable business
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
