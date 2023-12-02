import React from "react";
import { useRouter } from "next/router";
function index({ text, w, h, radius, fs, link }) {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push( link )} className={`${fs ? " " + fs : " text-base  "} group bg-transparent hover:bg-gray-50 font-semibold tracking-1 leading-4   ${h ? " " + h : " h-[56px] "} ${w ? " " + w : "  md:w-[231px] w-full"} border border-gray-50 ${radius ? " " + radius : "rounded"} focus:outline-none `}>
        <span className="group-hover:text-[#131B2A] text-gray-50">{text}</span>
      </button>
    </>
  );
}

export default index;
