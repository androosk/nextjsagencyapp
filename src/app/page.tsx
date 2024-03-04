import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-48">
      <div className="w-[100vw] h-full items-center flex">
        <div className="min-w-[50vw] h-screen bg-design-team bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] border-b-[1px] fadeIn"></div>
        <div className="-translate-x-32 bg-white flex justify-between items-center">
          <Image
            src="/images/me.jpg"
            alt="andrew tirpok"
            width={300}
            height={300}
            className="p-4 border-black border-[1px] fadeIn"
          ></Image>
          <div className="pl-10 w-2/3">
            <h2 className="text-4xl">Who is Third Andrew Creative?</h2>
            <p className=" pt-10 leading-8 text-lg">
              Your vision, crafted with care. We&apos;re a design agency that
              listens intently, collaborates closely, and focuses on bringing
              your ideas to life with precision and creativity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
