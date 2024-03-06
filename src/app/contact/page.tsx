import { ObfuscatedEmail } from "../components/obfuscated-email";
import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact Us - Third Andrew Creative",
  description:
    "Get in touch with us at Third Andrew Creative and find out how to exponentially increase your online performance today!",
};

export default function Page() {
  return (
    <div>
      <div className="px-4 fadeIn">
        <section className="text-black mt-36  w-full py-10 md:py-16  flex flex-col justify-center">
          <h1 className="text-center mb-8 text-4xl xl:text-5xl tracking-wide">
            Contact us
          </h1>
          <p
            className={`uppercase text-xl text-center font-extralight w-full mx-auto mb-8`}
          >
            we&apos;ll get back to you as soon as we can
          </p>
          <ObfuscatedEmail />
          {/* <div className="border-b-4 border-orange-500 w-full md:max-w-xl mt-8 mx-auto"></div> */}
        </section>
        <ContactPage />
      </div>
    </div>
  );
}
