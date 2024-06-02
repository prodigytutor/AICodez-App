"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <>
        <section>
<div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@media (max-width: 768px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding-left: 0px !important; padding-right: 0px !important; margin: 0px !important;\n}\n#div-2 {\ndisplay: flex !important;\n}\n#div-3 {\nmargin-left: auto !important; margin-right: auto !important; width: 40% !important; max-width: none !important;\n}\n#div-4 {\npadding-left: 0px !important; padding-right: 0px !important; margin: 0px !important;\n}\n#div-5 {\nwidth: 100% !important;\n}\n#div-6 {\nmargin-left: auto !important; margin-right: auto !important; width: 60% !important; max-width: none !important;\n}\n#div-7 {\npadding-left: 0px !important; padding-right: 0px !important; margin: 0px !important;\n}\n#div-8 {\nmargin-left: auto !important; margin-right: auto !important; width: 20% !important; max-width: none !important;\n}\n#div-9 {\npadding-left: 0px !important; padding-right: 0px !important; margin: 0px !important;\n}\n#ul-1 {\ndisplay: none !important;\n}\n#div-10 {\nmargin-left: auto !important; margin-right: auto !important; width: 80% !important; max-width: none !important;\n}\n#div-11 {\npadding-left: 0px !important; padding-right: 0px !important; margin: 0px !important;\n}\n#div-12 {\nmargin: 0px !important;\n}\n}\n@media (max-width: 992px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-3 {\nmax-width: none !important; width: 40% !important;\n}\n#div-8 {\nmax-width: none !important; width: 60% !important;\n}\n#div-10 {\nmax-width: none !important; width: 50% !important;\n}\n}\n@media (max-width: 1200px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-10 {\nmax-width: none !important; width: 70% !important;\n}\n}\n",
    }}
  />

  <div className="text-slate-950 text-base py-4 px-10 relative bg-black" id="div-1">
    <div className="m-auto">
      <div className="flex-wrap flex w-full" id="div-2">
        <div className="flex-grow float-left flex w-[52%] min-h-[0.06rem] text-blue-700" id="div-3">
          <div className="items-center flex-col flex-grow justify-center flex w-full min-w-[0.06rem] max-w-full" id="div-4">
            <div className="w-full">
              <div>
                <div>
                  <div className="inline-block w-36 max-w-full" id="div-5">
                    <a href="#">
                      AICodez
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow float-left flex w-[48%] min-h-[0.06rem]" id="div-6">
          <div className="items-center flex-col flex-grow justify-center flex w-full min-w-[0.06rem] max-w-full" id="div-7">
            <div className="items-center flex w-full min-h-[0.06rem]">
              <div className="flex-grow float-left flex w-[66%] min-h-[0.06rem] text-white font-semibold" id="div-8">
                <div className="items-center flex-col flex-grow justify-center flex w-full min-w-[0.06rem] max-w-full" id="div-9">
                  <div className="w-full">
                    <div className="mr-4">
                      <div className="text-right">
                        <ul className="items-center flex-wrap justify-right inline-flex list-none" id="ul-1">
                          <li className="min-[769px]:inline-block">
                            <a className="p-3.5" href="/sign-in">
                              Sign In
                            </a>
                          </li>
                          <li className="min-[769px]:inline-block">
                            <a className="p-3.5" href="#">
                              About
                            </a>
                          </li>
                          <li className="min-[769px]:inline-block">
                            <a className="p-3.5" href="#">
                              Resources
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-grow float-left flex w-[33%] min-h-[0.06rem] text-blue-600 font-bold" id="div-10">
                <div className="items-center flex-col flex-grow justify-center flex w-full min-w-[0.06rem] max-w-full" id="div-11">
                  <div className="w-full">
                    <div id="div-12">
                      <div className="text-right">
                        <a className="bg-zinc-50 py-3 px-6 text-center border-2 border-stone-300 border-solid rounded-full" href="/sign-up">
                          <span className="cursor-pointer">Start Free Trial</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
    </>
  );
}
