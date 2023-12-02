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
          <div onClick={() => router.push(process.env.NEXT_PUBLIC_DASHBOARD + "/login")}>
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
      <nav className={`w-64 lg:hidden block bg-white top-0 z-20 fixed left-0 duration-300 ease-in-out h-screen p-3 transform ${nav ? `translate-x-0` : `-translate-x-full`}`}>
        <div className="flex items-center justify-between">
          <Link href="/">
            {" "}
            <svg width={100} height={63} viewBox="0 0 129 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M67.7895 26.6901H77.0587L73.9922 39.9667H77.3201L76.205 44.7407H66.9358L70.0023 31.4641H66.6744L67.7895 26.6901ZM71.7446 20.8707C71.7446 20.441 71.8201 20.0402 71.9711 19.6685C72.1337 19.2852 72.3544 18.9542 72.6332 18.6754C72.912 18.3966 73.2372 18.1759 73.6089 18.0133C73.9922 17.8507 74.4046 17.7694 74.846 17.7694C75.2641 17.7694 75.659 17.8507 76.0307 18.0133C76.4024 18.1759 76.7277 18.3966 77.0064 18.6754C77.2852 18.9542 77.5059 19.2852 77.6685 19.6685C77.8312 20.0402 77.9125 20.441 77.9125 20.8707C77.9125 21.3005 77.8312 21.7071 77.6685 22.0904C77.5059 22.4621 77.2852 22.7873 77.0064 23.0661C76.7277 23.3448 76.4024 23.5655 76.0307 23.7282C75.659 23.8908 75.2641 23.9721 74.846 23.9721C74.4046 23.9721 73.9922 23.8908 73.6089 23.7282C73.2372 23.5655 72.912 23.3448 72.6332 23.0661C72.3544 22.7873 72.1337 22.4621 71.9711 22.0904C71.8201 21.7071 71.7446 21.3005 71.7446 20.8707ZM90.9193 43.3643C90.4896 43.736 89.903 44.0554 89.1596 44.3226C88.3813 44.6013 87.5102 44.7407 86.5461 44.7407C85.6285 44.7407 84.7166 44.5781 83.8106 44.2529C82.9162 43.9276 82.1147 43.4456 81.4062 42.8067C80.6976 42.1679 80.1227 41.3722 79.6813 40.4197C79.2399 39.4673 79.0192 38.3638 79.0192 37.1093C79.0192 35.5528 79.3038 34.1125 79.8729 32.7883C80.4537 31.4641 81.2436 30.32 82.2425 29.3559C83.2531 28.3802 84.4379 27.6194 85.7969 27.0734C87.1675 26.5275 88.6427 26.2545 90.2224 26.2545C90.6754 26.2545 91.1226 26.2952 91.564 26.3765C92.017 26.4462 92.441 26.5449 92.8359 26.6727C93.2308 26.7889 93.8116 27.0676 94.5782 27.509L94.8744 26.2545H100.781L96.6865 43.9915C96.2799 45.7687 95.7108 47.2323 94.979 48.3822C94.2588 49.5438 93.4051 50.4614 92.4178 51.1351C91.442 51.8088 90.3444 52.2792 89.1247 52.5464C87.9051 52.8135 86.5984 52.9471 85.2045 52.9471C83.3576 52.9471 81.7547 52.7322 80.3956 52.3025C79.0482 51.8843 77.9273 51.3267 77.0329 50.6298L80.0994 46.0301C80.7964 46.5295 81.5979 46.9419 82.5039 47.2671C83.4099 47.604 84.3914 47.7724 85.4484 47.7724C86.0408 47.7724 86.6158 47.7201 87.1733 47.6156C87.7309 47.511 88.2478 47.3136 88.724 47.0232C89.2002 46.7328 89.6184 46.3321 89.9785 45.821C90.3386 45.3215 90.6115 44.6768 90.7974 43.887L90.9193 43.3643ZM91.6163 38.1547C91.8718 37.9108 92.1041 37.6262 92.3132 37.301L93.2541 33.2587C92.8475 32.6315 92.4526 32.2191 92.0693 32.0217C91.686 31.8126 91.3027 31.6616 90.9193 31.5687C90.536 31.4757 90.1295 31.4293 89.6997 31.4293C89.0725 31.4293 88.4743 31.5571 87.9051 31.8126C87.3359 32.0565 86.8365 32.3934 86.4067 32.8231C85.9885 33.2413 85.6517 33.7408 85.3961 34.3216C85.1406 34.8907 85.0128 35.5063 85.0128 36.1684C85.0128 36.726 85.0999 37.2138 85.2742 37.632C85.4484 38.0502 85.6865 38.3986 85.9885 38.6774C86.2905 38.9562 86.639 39.1711 87.0339 39.3221C87.4289 39.4614 87.8528 39.5311 88.3058 39.5311C88.6892 39.5311 89.0725 39.4847 89.4558 39.3918C89.8507 39.2872 90.2282 39.1362 90.5883 38.9387C90.96 38.7297 91.3027 38.4683 91.6163 38.1547ZM103.708 26.6901H112.977L109.911 39.9667H113.239L112.124 44.7407H102.854L105.921 31.4641H102.593L103.708 26.6901ZM107.663 20.8707C107.663 20.441 107.739 20.0402 107.89 19.6685C108.052 19.2852 108.273 18.9542 108.552 18.6754C108.831 18.3966 109.156 18.1759 109.527 18.0133C109.911 17.8507 110.323 17.7694 110.765 17.7694C111.183 17.7694 111.578 17.8507 111.949 18.0133C112.321 18.1759 112.646 18.3966 112.925 18.6754C113.204 18.9542 113.425 19.2852 113.587 19.6685C113.75 20.0402 113.831 20.441 113.831 20.8707C113.831 21.3005 113.75 21.7071 113.587 22.0904C113.425 22.4621 113.204 22.7873 112.925 23.0661C112.646 23.3448 112.321 23.5655 111.949 23.7282C111.578 23.8908 111.183 23.9721 110.765 23.9721C110.323 23.9721 109.911 23.8908 109.527 23.7282C109.156 23.5655 108.831 23.3448 108.552 23.0661C108.273 22.7873 108.052 22.4621 107.89 22.0904C107.739 21.7071 107.663 21.3005 107.663 20.8707ZM115.826 26.6901H119.189L120.217 22.3691L126.89 19.5117L125.183 26.6901H128.493L127.395 31.4641H124.05L122.534 37.9282C122.36 38.5787 122.285 39.0956 122.308 39.4789C122.331 39.8622 122.453 40.141 122.674 40.3152C122.906 40.4778 123.173 40.5591 123.475 40.5591C123.719 40.5591 123.981 40.5359 124.259 40.4894C124.55 40.443 124.857 40.3733 125.183 40.2803L125.252 44.2703C124.881 44.4097 124.515 44.5375 124.155 44.6536C123.795 44.7698 123.411 44.8627 123.005 44.9324C122.61 45.0137 122.186 45.0718 121.733 45.1066C121.291 45.1531 120.809 45.1763 120.287 45.1763C119.45 45.1763 118.713 45.0776 118.074 44.8801C117.447 44.6943 116.947 44.3748 116.576 43.9218C116.215 43.4688 115.995 42.8648 115.913 42.1098C115.844 41.3432 115.948 40.3907 116.227 39.2524L118.057 31.4641H114.729L115.826 26.6901Z"
                fill="black"
              />
              <path d="M41.7364 5.43896H68.6206C66.722 9.59364 60.8743 18.1296 50.029 18.5828H36.7241L32.1515 29.9138H58.1403C56.4696 33.7663 50.8497 42.0605 41.7364 43.5109H26.6995L20.7758 57.5613C10.9335 57.1987 11.1309 48.4965 12.5739 44.4174L23.0542 18.5828H36.7241L41.7364 5.43896Z" fill="white" />
              <path d="M41.7364 5.43896H68.6206C66.722 9.59364 60.8743 18.1296 50.029 18.5828H36.7241L32.1515 29.9138H58.1403C56.4696 33.7663 50.8497 42.0605 41.7364 43.5109H26.6995L20.7758 57.5613C10.9335 57.1987 11.1309 48.4965 12.5739 44.4174L23.0542 18.5828H36.7241L41.7364 5.43896Z" fill="url(#paint0_linear_85_5840)" />
              <path opacity="0.2" d="M26.6995 43.5107L32.1674 29.9136V43.5107H26.6995Z" fill="#D1D4D6" />
              <path opacity="0.2" d="M36.7241 18.5828L41.7364 5.43896V18.5828H36.7241Z" fill="#D1D4D6" />
              <defs>
                <linearGradient id="paint0_linear_85_5840" x1="25.8472" y1="17.8773" x2="55.5351" y2="18.1741" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7518EC" />
                  <stop offset={1} stopColor="#18AFEC" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <svg onClick={() => setshowNav(false)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x mt-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>{" "}
        <ul className="text-base cursor-pointer tracking-1 leading-5 focus:outline-none">
          <li className="mt-6">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="mt-6">
            <Link href="/pricing#faq">FAQ</Link>
          </li>
          <li className="mt-6">
            <Link href="/documentation">Docs</Link>
          </li>
        </ul>
        <div className="mt-6" onClick={() => router.push(process.env.NEXT_PUBLIC_DASHBOARD + "/login")}>
          <ButtonBg text={"Login"} h="h-[36px]" mainHome={false} />
        </div>
      </nav>
    </>
  );
}

export default header;
