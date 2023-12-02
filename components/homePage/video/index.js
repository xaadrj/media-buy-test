import React from "react";

function video() {
  return (
    <section className="2xl:px-4 xl:px-10 px-4 md:mt-24 mt-12">
      <div className="flex items-center justify-center mx-auto container  lg:w-[1000px] 2xl:w-[1480px] shadow-video w-full rounded-xl    relative z-[50] 2xl:h-[355px] lg:h-[241px] bg-transparent md:h-[191px] h-[120px] ">
        <iframe src="https://player.vimeo.com/video/890558930?h=b553dfde20&badge=0&autopause=0&player_id=0&app_id=58479&portrait=0&byline=0&title=0&autoplay=1&loop=1" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="yuri" />
      </div>

    </section>
  );
}

export default video;
