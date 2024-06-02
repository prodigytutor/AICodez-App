"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Features() {
  return (
    <>
        <section>
        <section className="text-zinc-400 pt-16 overflow-hidden bg-slate-950 lg:pt-24  xl:pt-28">
  <div className="px-4 max-w-[76.38rem] m-auto sm:pl-8  sm:pr-8 xl:pl-0 xl:pr-0">
    <div className="text-center mb-16">
      <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0))] text-sm font-medium py-2 px-5 inline-flex mb-4 rounded-full gap-2">
        <img className="w-4 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/hero/icon-title.svg" />
        <span className="bg-clip-text bg-[-webkit-linear-gradient(90deg,_rgb(229,_156,_255)_0.01%,_rgb(186,_156,_255)_50.01%,_rgb(156,_178,_255)),_-webkit-linear-gradient(0deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4))] text-transparent"> Main Features </span>
      </span>
      <h2 className="text-white text-5xl font-extrabold mb-5">Key Features of AI Tool</h2>
      <p className="font-medium max-w-[44.63rem] m-auto">A Complete Solution for AI SaaS Startups</p>
    </div>
    <div className="relative">
      <div className="bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12)_49.48%,_rgba(255,_255,_255,_0))] left-1/2 absolute top-1/2 hidden w-2/4 h-0 lg:left-[25%]  lg:block" />
      <div className="bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12)_49.48%,_rgba(255,_255,_255,_0))] absolute right-1/2 top-1/2 hidden w-2/4 h-0 lg:right-[8.3%]  lg:block" />
      <div className="flex-wrap justify-center flex">
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-01.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Intelligent UI Code Generation</h3>
            <p className="font-medium">Enter your design prompt and let our AI handle the rest. Get production-ready UI code in seconds.</p>
          </div>
        </div>
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-02.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Next.js 13, React 18, TS</h3>
            <p className="font-medium">Say goodbye to embarrassing typos and grammar mistakes</p>
          </div>
        </div>
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-03.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Personalized Tutorials</h3>
            <p className="font-medium">Each component comes with an implementation tutorial tailored to your project's needs.</p>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12)_49.48%,_rgba(255,_255,_255,_0))] w-full h-0" />
      <div className="flex-wrap justify-center flex">
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-04.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Cutting-edge Technologies</h3>
            <p className="font-medium">Transform your spoken words into written text easily & effortlessly</p>
          </div>
        </div>
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-05.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Collaboration Friendly</h3>
            <p className="font-medium"> Share components and tutorials with your team to keep everyone aligned and productive.</p>
          </div>
        </div>
        <div className="w-full sm:w-2/4  lg:w-1/3">
          <div className="py-8 px-4 text-center overflow-hidden sm:pt-10  sm:pb-10 lg:pl-8 lg:pr-8 xl:pl-12 xl:pr-12 xl:pt-16 xl:pb-16">
            <span className="items-center bg-[linear-gradient(rgba(255,_255,_255,_0.027),_rgba(255,_255,_255,_0.06)_50%,_rgba(255,_255,_255,_0))] justify-center inline-flex w-full h-20 max-w-[5.00rem] mx-auto mb-8 rounded-full">
              <img className="w-8 h-auto max-w-full" src="https://ai-tool.nextjstemplates.com/images/features/icon-06.svg" />
            </span>
            <h3 className="text-white text-lg font-semibold mb-4">Rich Documentation</h3>
            <p className="font-medium">Need inspiration or assistance with generating content?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </section>
    </>
  );
}
