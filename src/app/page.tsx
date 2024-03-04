import Image from "next/image";

export default function Home() {
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
          <div className="sm:pl-10 sm:w-2/3">
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

      <div className="flex w-full justify-center items-center px-10 py-10 border-black border-b-[1px] bg-blue-200">
        <div className=" text-center">Content Here</div>
      </div>

      <div className="border-black border-b-[1px] py-10 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold mb-4">
          Let's boost your business&apos;s online impact together
        </h3>
        <div className="text-lg mx-14">
          <ul>
            <li className="mb-2 tracking-wide leading-8 list-disc">
              Standing out online is more challenging than ever. Your website is
              the heart of your business&apos;s online presence.
            </li>
            <li className="leading-8 tracking-wide list-disc">
              Are you truly reaching your target audience?
            </li>
            <li className="mb-2 list-disc">
              Is your website optimized for search engines to enhance
              visibility?
            </li>
            <li>
              At Third Andrew Creative, we specialize in crafting custom
              websites and implementing cutting-edge SEO strategies that ensure
              your business doesn&apos;t just compete but excels online.
              Let'&apos;s transform your online presence into your most powerful
              marketing tool and pave the way for your business&apos;s success.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
