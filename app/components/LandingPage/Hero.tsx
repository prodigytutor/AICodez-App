"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Hero() {
  return (
    <>
        <section>
        <section className="text-zinc-400 pt-36 relative overflow-hidden bg-slate-950 md:pt-40  xl:pt-44">
  <div className="max-w-7xl m-auto">
    <div className="bottom-0 left-0 absolute top-0 z-[-10] overflow-hidden -m-28">
      <div className="left-1/2 absolute top-0 w-full max-w-[75.25rem]">
        <img className="bottom-0 left-0 absolute top-0 w-[75.25rem] h-auto max-w-none" src="https://ai-tool.nextjstemplates.com/images/blur/blur-02.svg" />
      </div>
      <div
        className='bg-[url("https://ai-tool.nextjstemplates.com/images/blur/blur-01.svg")] bg-no-repeat bg-cover left-1/2 absolute top-0 w-full h-full'
        style={{
          backgroundPosition: "50% 0%",
        }}
      />
    </div>
  </div>
  <div className="px-4 max-w-[56.25rem] m-auto sm:pl-8  sm:pr-8 xl:pl-0 xl:pr-0">
    <div className="text-center">
      <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0))] text-sm font-medium py-2 px-5 inline-flex mb-5 rounded-full gap-2">
        <img className="w-4 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/hero/icon-title.svg" />
        <span className="bg-clip-text bg-[-webkit-linear-gradient(90deg,_rgb(229,_156,_255)_0.01%,_rgb(186,_156,_255)_50.01%,_rgb(156,_178,_255)),_-webkit-linear-gradient(0deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4))] text-transparent">Launch Your AI Startup with</span>
      </span>
      <h1 className="text-white text-6xl font-extrabold mb-6">AICodez: Your AI-Powered UI Code Generator</h1>
      <p className="text-lg font-medium max-w-[31.25rem] mx-auto mb-9">AI-Generated UI Code and implementation tutorials – Just From Your Prompt.</p>
      <a className="text-white bg-[linear-gradient(rgb(160,_115,_238)_-11.11%,_rgb(110,_37,_237))] font-medium py-3 px-7 inline-flex rounded-lg" href="">
        Try AI Examples
      </a>
    </div>
  </div>
  <div className="relative w-full max-w-[73.13rem] mt-16 mx-auto">
    <img className="bottom-0 left-0 absolute top-0 w-[73.13rem] h-auto max-w-full m-auto" src="https://ai-tool.nextjstemplates.com/./images/hero/hero.svg" />
  </div>
</section>


        </section>
    </>
  );
}
