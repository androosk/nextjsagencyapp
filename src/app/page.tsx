"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Design from "./components/design";
import Develop from "./components/develop";
import Optimize from "./components/optimize";
import { classNames } from "@/functions/classnames";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

export default function Home() {
  const [designOpen, setDesignOpen] = useState(false);
  const [developOpen, setDevelopOpen] = useState(false);
  const [optimizeOpen, setOptimizeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        }
      });
    });

    const elements = document.querySelectorAll(".element-to-fadeIn");
    elements.forEach(el => observer.observe(el));

    // Cleanup function to unobserve when component unmounts
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main className="mt-48">
      <div className="w-[100vw] h-full items-center lg:flex border-black border-b-[1px]">
        <div className="w-screen lg:min-w-[50vw] h-64 lg:h-screen bg-design-two bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] fadeIn"></div>
        <div className="lg:-translate-x-32 px-10 py-10 lg:px-0 lg:py-0 bg-white flex flex-col sm:flex-row justify-between items-center">
          <div className="hidden sm:block">
            <Image
              src="/images/me.jpg"
              alt="andrew tirpok"
              width={300}
              height={300}
              className="p-4 border-black border-[1px] fadeIn"
            ></Image>
          </div>
          <div className="sm:pl-10 sm:w-2/3 fadeIn">
            <h2 className="text-2xl lg:text-4xl">Why Third Andrew Creative?</h2>
            <p className="sm:pt-10 pt-4 leading-8 lg:text-lg mb-4">
              Your vision, crafted with care
            </p>
            <p>
              We&apos;re a design agency that listens intently, collaborates
              closely, and focuses on bringing your ideas to life with precision
              and creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 border-black border-b-[1px] bg-blue-200">
        <Link
          href="/services"
          className="cursor-pointer flex w-full justify-center items-center element-to-fadeIn"
        >
          <p className="text-lg italic uppercase text-center tracking-widest">
            how can we help you?
          </p>
          <Image
            src="/images/rightarrow.png"
            alt="arrow"
            height={50}
            width={100}
            className="pl-4"
          ></Image>
        </Link>
      </div>

      <div className="border-black border-b-[1px] grid grid-cols-1 sm:grid-cols-3 justify-center items-center element-to-fadeIn">
        {/* Design Section */}
        <div
          className={classNames(
            "bg-idea-img relative bg-faded bg-cover bg-center sm:min-h-[600px] transition-all duration-300",
            designOpen ? "min-h-[300px]" : "min-h-[120px]"
          )}
        >
          <div
            className={classNames(
              "relative z-20 flex flex-col justify-center items-center text-white sm:min-h-[600px] transition-all duration-300",
              designOpen ? "min-h-[300px]" : "min-h-[120px]"
            )}
          >
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-6xl mb-2 sm:mb-8 element-to-fadeIn">
                Design
              </h4>
            </div>
            <div
              className={classNames(
                designOpen ? "flex" : "hidden",
                "sm:flex flex-col justify-center items-center text-xl px-10 text-center sm:element-to-fadeIn"
              )}
            >
              <p>Custom websites that capture your brand essence</p>
            </div>
            {!designOpen ? (
              <IoIosArrowDropdown
                size={30}
                className="sm:hidden"
                onClick={() => {
                  setDesignOpen(!designOpen);
                  setDevelopOpen(false);
                  setOptimizeOpen(false);
                }}
              />
            ) : (
              <IoIosArrowDropup
                size={30}
                className="sm:hidden absolute bottom-6"
                onClick={() => setDesignOpen(!designOpen)}
              />
            )}
          </div>
        </div>
        {designOpen && <Design />}

        {/* Develop Section */}
        <div
          className={classNames(
            "bg-frame-img relative bg-faded bg-cover bg-center sm:min-h-[600px] transition-all duration-300",
            developOpen ? "min-h-[300px]" : "min-h-[120px]"
          )}
        >
          <div
            className={classNames(
              "relative z-20 flex flex-col justify-center items-center text-white sm:min-h-[600px] transition-all duration-300",
              developOpen ? "min-h-[300px]" : "min-h-[120px]"
            )}
          >
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-6xl mb-2 sm:mb-8 element-to-fadeIn">
                Develop
              </h4>
            </div>
            <div
              className={classNames(
                developOpen ? "flex" : "hidden",
                "sm:flex flex-col justify-center items-center text-xl px-10 text-center sm:element-to-fadeIn"
              )}
            >
              <p>We help you connect with those who matter most</p>
            </div>
            {!developOpen ? (
              <IoIosArrowDropdown
                size={30}
                className="sm:hidden"
                onClick={() => {
                  setDesignOpen(false);
                  setDevelopOpen(!developOpen);
                  setOptimizeOpen(false);
                }}
              />
            ) : (
              <IoIosArrowDropup
                size={30}
                className="sm:hidden absolute bottom-6"
                onClick={() => setDevelopOpen(!developOpen)}
              />
            )}
          </div>
        </div>
        {developOpen && <Develop />}

        {/* Optimize Section */}
        <div
          className={classNames(
            "bg-notebook-img relative bg-faded bg-cover bg-center sm:min-h-[600px] transition-all duration-300",
            optimizeOpen ? "min-h-[300px]" : "min-h-[120px]"
          )}
        >
          <div
            className={classNames(
              "relative z-20 flex flex-col justify-center items-center text-white sm:min-h-[600px] transition-all duration-300",
              optimizeOpen ? "min-h-[300px]" : "min-h-[120px]"
            )}
          >
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-4xl sm:text-6xl mb-2 sm:mb-8 element-to-fadeIn">
                Optimize
              </h4>
            </div>
            <div
              className={classNames(
                optimizeOpen ? "flex" : "hidden",
                "sm:flex flex-col justify-center items-center text-xl px-10 text-center sm:element-to-fadeIn"
              )}
            >
              <p>Is your site a needle in a haystack?</p>
              <p>Let&apos;s make it a beacon</p>
            </div>
            {!optimizeOpen ? (
              <IoIosArrowDropdown
                size={30}
                className="sm:hidden"
                onClick={() => {
                  setDesignOpen(false);
                  setDevelopOpen(false);
                  setOptimizeOpen(!optimizeOpen);
                }}
              />
            ) : (
              <IoIosArrowDropup
                size={30}
                className="sm:hidden absolute bottom-6"
                onClick={() => setOptimizeOpen(!optimizeOpen)}
              />
            )}
          </div>
        </div>
        {optimizeOpen && <Optimize />}
      </div>

      <div></div>
    </main>
  );
}
