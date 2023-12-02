import React from "react";
import Hero from "../reusableUI/hero/index";
import VideoSection from "./videoSection/index";
function index() {
  return (
    <>
      <div className="md:h-[428px]">
        <Hero mt="mt-[70px]" himg={"md:h-[648px] h-[430px]"} heading={"Tutorials"} text={"Briefly learn how to use Figit with the help of these video tutorials and start using the plug-in without any hiccups "} />
      </div>
      <VideoSection />
    </>
  );
}

export default index;
