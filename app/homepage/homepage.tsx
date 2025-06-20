import Image from "next/image";
import Menu from "../menu";
import React from "react";
import Banner from "./components/banner";

export default function Homepage() {
  return (
    <div>
      <div className="">
        <Banner />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] justify-center items-center justify-items-center min-h-screen pt-86 sm:pt-42 font-[family-name:var(--font-inter)] w-full sm:w-300 px-10 sm:px-20">

        <main className="flex flex-col gap-[36px] row-start-1 items-center sm:items-start">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10">
      
        <div className="text-left sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">Join the Syndicate.</h1>
          <p className="text-lg sm:text-xl">
            This site is under development, but we are excited to have you here!
          </p>
          <p>Contact us at Hello@gamedevsyndicate.com</p>
        </div>
        {/* <Image
          src="/discordikon2.png"
          alt="GameDev Syndicate logo"
          width={180}
          height={38}
          priority
        /> */}
          </div>
          {/* <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-inter)]">
        <li className="mb-2 tracking-[-.01em]">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-inter)] font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
          </ol> */}

          <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            // className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Contact us
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
          >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
          </a>
          <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
          >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
          </a>
          <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
          >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}
