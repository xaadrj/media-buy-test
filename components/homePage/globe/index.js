import React, { useEffect } from "react";
import H2 from "../../reusableUI/headingTwo/index";
import ButtonWithBorder from "../../reusableUI/buttonWithBorder/index";

function index() {
  return (
    <>
      <section className="relative  overflow-hidden  xl:h-[532px] h-[350px] flex items-center justify-center -mt-2">
        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/globefull.png" alt="Background Image with globe " className="absolute bottom-0 w-full h-full object-center object-cover" />
        <div className="mx-auto container relative z-20 py-24 flex flex-col items-center justify-center">
          <H2 ptagColor="text-gray-400" textColor={"text-gray-50"} headingTwo={"We Feel A Connection. Do You?"} firstLine="If you’ve gotten butterflies and your arms are splattered with goosebumps, best" secondLine={"believe you’re in love. It’s okay, though, because we love you, too."} />
          {/* <p className="text-base tracking-[0.15em] md:leading-4 leading-6 mt-4 text-center text-gray-400 uppercase mb-8 ">Connect with developers all around the world</p> */}
          <div className="mt-4">
            <ButtonWithBorder link="https://discord.gg/jsHUVyRq2g" fs="text-[14px]" radius="rounded-lg" h="h-[46px]" w="w-[164px]" text=" Let’s connect!" />
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
