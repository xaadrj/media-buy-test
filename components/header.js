import React, { useState } from "react";
import Link from "next/link";
import Icon from "./reusableUI/Icons/icons";
import ButtonWithBorder from "./reusableUI/buttonWithBorder";
import { useRouter } from "next/router";
import ButtonBg from "./reusableUI/buttonBg/index";
function header() {
  const [nav, setshowNav] = useState(false);
  const router = useRouter();
  return (
    <>
      {router.asPath === "/componentExplorer" && (
        <>
          <Link href="https://feedback.getfigit.com/b/6m5l3r0z/feature-ideas" className="cursor-pointer relative z-10">
            <div className="h-12 font-bold underline bg-white flex items-center justify-center z-10 px-4">
              <p className="text-base ">Feel free to give your feedback and suggestion here.</p>
            </div>
          </Link>
        </>
      )}
      <nav className="flex items-center justify-between mx-auto container pt-8 relative z-20 2xl:px-4 xl:px-10 px-4 ">
        {/* Logo */}
        <Link href="/">
          <Icon icon="logo" customClasses={"cursor-pointer"} />
        </Link>
        {/* Logo */}
        {/* List */}
        <div className=" lg:flex hidden ">
          <ul className="flex items-center gap-x-7 mr-10">
            <Link href="/pricing">
              <li className={`text-xl cursor-pointer tracking-1 leading-5 text-center hover:text-white  ${router.asPath === "/pricing" ? "text-white" : "text-gray-500"}  `}>Feature</li>
            </Link>
            <Link href="/pricing#faq">
              <li className={`text-xl cursor-pointer tracking-1 leading-5 text-center hover:text-white  ${router.asPath === "/pricing#faq" ? "text-white" : "text-gray-500"}  `}>Blog</li>
            </Link>
            <Link href="/documentation">
              <li className={`text-xl cursor-pointer tracking-1 leading-5 text-center hover:text-white  ${router.asPath === "/documentation" ? "text-white" : "text-gray-500"}  `}>Contact</li>
            </Link>
          </ul>
          {/* List */}
          {/* Login */}
          <div onClick={() => router.push("/login")}>
            <ButtonWithBorder text={"Get Started"} h="h-[46px]" w="w-[120px]" />
          </div>
        </div>
        <div onClick={() => setshowNav(true)} className="lg:hidden block">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </div>
        {/* Login */}
      </nav>
      {/*  Mobile Nav */}
      <div onClick={() => setshowNav(false)} className={`bg-black z-20 lg:hidden block opacity-60  fixed top-0 w-full h-full ${nav ? `block` : `hidden`}`}></div>
      <nav className={`w-64 lg:hidden block bg-white top-0 z-[10000] fixed left-0 duration-300 ease-in-out h-screen p-3 transform ${nav ? `translate-x-0` : `-translate-x-full`}`}>
        <div className="flex items-center justify-between">
          <Link href="/">
           <img width={200} src="https://i.imgur.com/zIBlpDY.png"/>
          </Link>
          <svg onClick={() => setshowNav(false)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x mt-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>{" "}
        <ul className="text-base cursor-pointer tracking-1 leading-5 focus:outline-none">
          <li className="mt-6">
            <Link href="/pricing">Feature</Link>
          </li>
          <li className="mt-6">
            <Link href="/pricing#faq">Blog</Link>
          </li>
          <li className="mt-6">
            <Link href="/documentation">Contact</Link>
          </li>
        </ul>
        <div className="mt-6" onClick={() => router.push("/login")}>
          <ButtonBg text={"Get Started"} h="h-[36px]" mainHome={false} />
        </div>
      </nav>
    </>
  );
}

export default header;
