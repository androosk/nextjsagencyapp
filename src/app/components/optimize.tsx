import React from "react";

interface IoptimizeProps {}

export default function Optimize() {
  return (
    <div className="flex min-h-96 w-screen px-10 py-16 sm:py-0 justify-center items-center border-b-[1px] border-black bg-slate-500 bg-gradient-to-r from-slate-600 to-slate-400 sm:to-white">
      <div className="grid grid-cols-2">
        <h1 className="text-white italic text-2xl px-4 py-10 sm:text-4xl fadeIn element-to-fadeIn">
          Wherever you are in your digital marketing journey, we&apos;ll work
          with you to bring your vision to reality
        </h1>
      </div>
    </div>
  );
}
