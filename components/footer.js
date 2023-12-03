import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Index() {
  const router = useRouter();
  return (
    <footer className="md:pt-[56px] pt-[32px] md:pb-[96px] pb-[40px] border-t border-gray-200 mx-auto container mt-[96px] flex flex-col lg:flex-row md:block lg:flex items-center justify-between 2xl:px-4 xl:px-10 px-4">
      <div className="flex flex-col items-center lg:items-start lg:text-left text-center">
        <img width={200} src="https://i.imgur.com/zIBlpDY.png" />

        <p
          onClick={() => router.push("mailto:support@getfigit.com")}
          className=" cursor-pointer lg:w-72 xl:w-96 text-xs font-medium leading-none text-gray-600 mt-2"
        >
          With creativity as the core and batch release, management, analysis,
          and automatic optimization as means, we solve the pain points of
          customer acquisition for cross-border enterprises.
        </p>
      </div>
      <div className="md:flex items-center justify-between lg:mt-0 mt-4 lg:w-8/12">
        <div className="md:flex md:space-x-16 md:space-y-0 space-y-4 md:mt-0 mt-4 lg:items-start items-start lg:justify-start justify-center">
         <ul className="space-y-3">
          <li className="font-bold mb-2 text-base text-center md:text-left cursor-pointer  leading-none text-gray-600">
           <span>Company</span>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href="/#team">Team</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "/contact" }}>Contact</Link>
          </li>
          </ul>
          <ul className="space-y-3">
          <li className="font-bold mb-2 text-base text-center md:text-left cursor-pointer  leading-none text-gray-600">
           <span>Product</span>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "/contact" }}>Feature</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "/contact" }}>Price</Link>
          </li>
          </ul>
          <ul className="space-y-3">
          <li className="font-bold mb-2 text-base text-center md:text-left cursor-pointer  leading-none text-gray-600">
           <span>Links</span>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "https://www.feiranmedia.com/" }}>FEIRAN MEDIA</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "https://www.5840.cn/" }}>Cross-border comments 5840</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "https://www.firebrowser.cn/?code=KF42LUJXPY" }}>Fire Leopard Browser</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "https://www.bitbrowser.cn/" }}>bit browser</Link>
          </li>
          <li className="text-sm text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
            <Link href={{ pathname: "https://www.chuhai2345.com/" }}>2345 sea navigation</Link>
          </li>
          </ul>
        </div>
        <div className="flex items-center justify-center  space-x-4 mt-12 md:mt-0">
          <Link href="/">
            <div className="w-[48px] h-[48px] text-[#171717] cursor-pointer hover:border-0 hover:bg-[#00ACEE] hover:text-white border-2 border-[#E6E7EA] rounded-full flex items-center justify-center">
              <svg
                width={34}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
                ></path>
              </svg>
            </div>
          </Link>
          <Link href="https://www.youtube.com/channel/UCyNWrCHjZ8s5RV1V4nDt6Jg">
            <div className="w-[48px] h-[48px] cursor-pointer border-2 border-[#E6E7EA] rounded-full flex items-center justify-center text-[#171717] hover:border-0 hover:bg-red-500 hover:text-white">
              <svg
                width={23}
                height={18}
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1874 3.62411C21.9834 2.49811 21.0114 1.67811 19.8834 1.42211C18.1954 1.06411 15.0714 0.808105 11.6914 0.808105C8.31335 0.808105 5.13935 1.06411 3.44935 1.42211C2.32335 1.67811 1.34935 2.44611 1.14535 3.62411C0.939352 4.90411 0.735352 6.69611 0.735352 9.0001C0.735352 11.3041 0.939352 13.0961 1.19535 14.3761C1.40135 15.5021 2.37335 16.3221 3.49935 16.5781C5.29135 16.9361 8.36335 17.1921 11.7434 17.1921C15.1234 17.1921 18.1954 16.9361 19.9874 16.5781C21.1134 16.3221 22.0854 15.5541 22.2914 14.3761C22.4954 13.0961 22.7514 11.2521 22.8034 9.0001C22.6994 6.69611 22.4434 4.90411 22.1874 3.62411ZM8.92735 12.5841V5.41611L15.1734 9.0001L8.92735 12.5841Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Index;
