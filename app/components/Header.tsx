"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import image from "next/image"


export default function Header() {
  return (
    <>
      <div className="relative bg-indigo-600 dark:bg-gray-900">
            <nav className="py-3.5 px-6 bg-indigo-600 dark:bg-gray-900 border-b border-solid border-indigo-400 dark:border-gray-700 fixed w-full top-0 z-20">
      <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">

        </div>
      </nav> 
  
        <div className="py-3.5 px-8 lg:mt-[72px] mt-[68px] ">
          <div className="block max-lg:pl-6">
              <h6 className="text-sm sm:text-lg font-semibold text-white whitespace-nowrap mb-1.5">
                Welcome back,
                <span className="text-white text-base sm:text-lg font-semibold">
                  Ronald!</span>
              </h6>
              <p className="text-xs font-medium text-white">Home</p>
            </div>
        </div>
        
        <div className=" p-4 ">
          <div className="rounded-2xl bg-white overflow-hidden p-8">
             <div className="border border-gray-200 rounded-2xl">
               <img src="https://pagedone.io/asset/uploads/1712309277.png" alt="image" className="object-cover w-full h-full"/>
              </div> 
          </div>
        </div>
 </div>
{/* <script>
   document.addEventListener("DOMContentLoaded", function () {
        const navbarToggle = document.getElementById('navbar-toggle');
        const mobileNavbar = document.getElementById('mobile-navbar');

        navbarToggle.addEventListener('click', function () {
            mobileNavbar.classList.toggle('hidden')
        });
    })
</script> */}
                                            
    </>
  );
}
