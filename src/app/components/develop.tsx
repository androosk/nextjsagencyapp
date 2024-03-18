import Image from "next/image";

export default function Develop() {
  return (
    <div className="flex min-h-96 w-screen py-16 sm:py-0 justify-center items-center border-b-[1px] border-black bg-slate-500 bg-gradient-to-r from-slate-600 to-slate-400 sm:to-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center px-10 py-16 element-to-fadeIn">
          <h1 className="text-white italic text-2xl sm:text-4xl fadeIn flex element-to-fadeIn tracking-wide pb-6">
            Let us help you turn every interaction into a lasting connection.
          </h1>
        </div>
        <div className="hidden sm:flex bg-slate-500 px-10 min-h-96 element-to-fadeIn bg-develop-img bg-bottom bg-cover"></div>
      </div>
    </div>
  );
}
