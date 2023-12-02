import React, { useEffect, useState } from "react";
import Icon from "../Icons/icons";
import { useRouter } from "next/router";

function index({ text, h, w, mainHome, link }) {
  const router = useRouter();
  const [home, setHome] = useState(false);
  useEffect(() => {
    if (mainHome == true) {
      setHome(true);
    } else {
      setHome(false);
    }
  });
  return (
    <>
      <button onClick={() => router.push(link)} className={`flex hover:bg-opacity-90 items-center justify-center text-base font-semibold tracking-1 leading-4 ${home ? `bg-gray-50 border border-gray-50 ` : `product-gradient-button`} rounded focus:outline-none ${h ? " " + h : " h-[56px] "} ${w ? " " + w : "  md:w-[231px] w-full"}`}>
        {home && (
          <>
            <Icon icon="figma" customClasses="mr-3" />
          </>
        )}
        {home ? <span className="bg-clip-text product-gradient t-f-c py-2">{text}</span> : <span className="text-sm font-bold leading-none text-white">{text}</span>}
      </button>
    </>
  );
}

export default index;
