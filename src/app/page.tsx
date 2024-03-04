import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-48">
      <div className="w-[100vw] h-full items-center lg:flex border-black border-b-[1px]">
        <div className="w-screen lg:min-w-[50vw] h-64 lg:h-screen bg-design-two bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] fadeIn"></div>
        <div className="lg:-translate-x-32 px-10 py-10 lg:px-0 lg:py-0 bg-white flex justify-between items-center">
          <div className="">
            <Image
              src="/images/me.jpg"
              alt="andrew tirpok"
              width={300}
              height={300}
              className="p-4 border-black border-[1px] fadeIn"
            ></Image>
          </div>
          <div className="pl-10 w-2/3 ">
            <h2 className="text-2xl lg:text-4xl">
              Who is Third Andrew Creative?
            </h2>
            <p className=" pt-10 leading-8 lg:text-lg">
              Your vision, crafted with care. We&apos;re a design agency that
              listens intently, collaborates closely, and focuses on bringing
              your ideas to life with precision and creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="border-black border-b-[1px] py-10 flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold">
          Specializing in boosting your small business&apos;s online impact
        </h3>
        <p></p>
      </div>
    </main>
  );
}
