import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { classNames } from "@/functions/classnames";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Third Andrew Creative Agency",
  description: "A creative agency located in the greater Salt Lake Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          "flex flex-col min-h-screen"
        )}
      >
        <NavBar />
        <div className="flex flex-col flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
