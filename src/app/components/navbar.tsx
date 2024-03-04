"use client";
import { use, useEffect, useState } from "react";
import { classNames } from "@/functions/classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function NavBar() {
  const [navBar, setNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "underline underline-offset-4" : "";
  };

  const handleNav = () => {
    setNavBar(!navBar);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(prev => {
      if (currentScrollY > lastScrollY) {
        if (currentScrollY < 80) {
          return true;
        } else if (currentScrollY > window.innerHeight * 1.5) {
          return false;
        }
        return prev;
      } else {
        return true;
      }
    });
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setNavBar(false);
  }, [pathname]);

  return (
    <div>
      <header
        className={classNames(
          `fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
            visible ? "" : "opacity-0 pointer-events-none"
          } 
        ${isClient && window.scrollY >= 80 ? "" : "bg-transparent"}
         text-black md:py-6 py-6 px-4 md:px-12 md:flex gap-8 items-center md:justify-around outline-1 outline-gray-900`,
          navBar ? "py-0 px-0" : ""
        )}
      >
        <div
          className={classNames(
            "border-black border-[1px] px-8 sm:px-20 py-4 w-full",
            visible ? "" : " transition-opacity pointer-events-none",
            navBar ? "bg-blue-200 py-8 border-none" : "bg-white"
          )}
        >
          <div className="fadeIn flex flex-col sm:flex-row justify-between items-center">
            <nav className="sm:flex items-center justify-around w-1/3 hidden">
              <Link
                href="/"
                className={`${isActive(
                  "/"
                )} py-2 font-semibold tracking-wider text-lg`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive(
                  "/about"
                )} py-2 font-semibold tracking-wider text-lg`}
              >
                About
              </Link>
            </nav>
            <div className="sm:w-1/2 flex flex-col sm:items-center sm:justify-center">
              <Link href="/">
                <Image
                  src="/thirdandrew.svg"
                  width={100}
                  height={100}
                  alt="third andrew creative logo"
                ></Image>
              </Link>
              <h1 className="text-2xl sm:text-xl mb-4 sm:mb-0">
                Third Andrew Creative Agency
              </h1>
            </div>
            <nav className="w-1/3 hidden sm:flex items-center justify-around">
              <Link
                href="/work"
                className={`${isActive(
                  "/work"
                )} py-2 font-semibold tracking-wider text-lg`}
              >
                Work
              </Link>
              <Link
                href="/contact"
                className={`${isActive(
                  "/contact"
                )} py-2 font-semibold tracking-wider text-lg`}
              >
                Contact
              </Link>
            </nav>
            <div
              onClick={handleNav}
              className="sm:hidden cursor-pointer text-slate-600 mb-4"
            >
              {!navBar ? (
                <AiOutlineMenu size={30} />
              ) : (
                <div>
                  <AiOutlineClose size={30} />
                </div>
              )}
            </div>
            {/* Hamburger Menu */}
            <nav
              className={classNames(
                "transition-opacity duration-300",
                `${
                  navBar
                    ? "flex flex-col items-center w-screen h-screen text-2xl bg-blue-200"
                    : "opacity-0 hidden"
                }`
              )}
            >
              <Link href="/" className={`${isActive("/")} py-4`}>
                Home
              </Link>
              <Link href="/account " className={`${isActive("/about")} py-4`}>
                About
              </Link>
              <Link href="/logout" className={`${isActive("/work")} py-4`}>
                Work
              </Link>
              <Link href="/logout" className={`${isActive("/contact")} py-4`}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
