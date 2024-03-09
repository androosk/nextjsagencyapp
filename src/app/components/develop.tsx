import React from "react";

interface IdevelopProps {}

export default function Develop() {
  return (
    <div className="flex w-screen py-16 px-10 justify-center items-center border-b-[1px] border-black bg-slate-500 bg-gradient-to-r from-slate-500 to-slate-300 sm:to-white fadeIn">
      <div className="flex flex-col px-10 element-to-fadeIn">
        <h1 className="text-white italic text-2xl sm:text-4xl fadeIn flex element-to-fadeIn">
          Wherever you are in your digital journey, we&apos;ll work with you to
          bring your vision to reality
        </h1>
      </div>
      {/* <div className="hidden sm:flex container mx-auto bg-slate-500 px-10 sm:max-h-48 md:max-h-80 sm:min-w-2xl overflow-hidden rounded-3xl element-to-fadeIn">
        <div className="grid grid-cols-3 gap-4">
          <div className="overflow-y-hidden scroll-animation-1">
            <div className="scroll-content">
              <Image
                src="/images/hanks.png"
                alt="hanks garage"
                width={400}
                height={600}
              />
              <Image
                src="/images/hanks.png"
                alt="hanks garage"
                width={400}
                height={600}
              />
              <Image
                src="/images/hanks.png"
                alt="hanks garage"
                width={400}
                height={600}
              />
            </div>
          </div>
          <div className="overflow-y-hidden scroll-animation-2">
            <div className="scroll-content">
              <Image
                src="/images/accelerated.png"
                alt="Screenshot 2"
                width={400}
                height={600}
              />
              <Image
                src="/images/accelerated.png"
                alt="Screenshot 2"
                width={400}
                height={600}
              />
            </div>
          </div>
          <div className="overflow-y-hidden scroll-animation-3">
            <div className="scroll-content">
              <Image
                src="/images/nutrition.png"
                alt="Screenshot 3"
                width={400}
                height={600}
              />
              <Image
                src="/images/nutrition.png"
                alt="Screenshot 3"
                width={400}
                height={600}
              />
              <Image
                src="/images/nutrition.png"
                alt="Screenshot 3"
                width={400}
                height={600}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
