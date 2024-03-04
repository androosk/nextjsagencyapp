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
      {/* <header
        className={classNames(
          "bg-white text-black md:py-6 px-4 md:px-12 md:flex gap-8 items-center md:justify-around outline-1 outline-gray-900",
          navBar ? "bg-blue-400 text-white" : ""
        )}
      >
        <div className="border-black border-[1px] px-20 py-4 flex justify-between items-center w-full"> */}
      <header
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out bg-white backdrop-blur ${
          visible ? "opacity-90" : "opacity-0 pointer-events-none"
        } ${
          isClient && window.scrollY >= 80
            ? "bg-white/80 backdrop-blur"
            : "bg-transparent"
        } text-black md:py-6 px-4 md:px-12 md:flex gap-8 items-center md:justify-around outline-1 outline-gray-900`}
      >
        <div className="border-black border-[1px] px-20 py-4 w-full">
          <div className="fadeIn flex justify-between items-center">
            <div className="flex items-center justify-around w-1/3">
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
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Link href="/">
                <Image
                  src="/thirdandrew.svg"
                  width={100}
                  height={100}
                  alt="third andrew creative logo"
                ></Image>
              </Link>
              <h1 className="text-xl">Third Andrew Creative Agency</h1>
            </div>
            <div className="w-1/3 flex items-center justify-around">
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
            </div>
          </div>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer text-blue-400"
          >
            {!navBar ? (
              <AiOutlineMenu size={25} />
            ) : (
              <div className="text-white">
                <AiOutlineClose size={25} />
              </div>
            )}
          </div>
          {/* </div> */}
          {/* Nav Links */}
          {/* <nav
            className={`${
              navBar ? "flex" : "hidden"
            } flex-col items-center justify-center md:flex md:flex-row md:gap-8 lg:gap-12`}
          >
            <Link
              href="/dashboard"
              className={`${isActive(
                "/dashboard"
              )} py-2 md:py-0 transition-colors hover:text-blue-400`}
            >
              Dashboard
            </Link>
            <Link
              href="/account "
              className={`${isActive(
                "/account"
              )} py-2 md:py-0 transition-colors hover:text-blue-400`}
            >
              Account
            </Link>
            <Link
              href="/logout"
              className={`${isActive(
                "/logout"
              )} py-2 md:py-0 transition-colors hover:text-blue-400`}
            >
              Logout
            </Link>
          </nav> */}
        </div>
      </header>
    </div>
  );
}
