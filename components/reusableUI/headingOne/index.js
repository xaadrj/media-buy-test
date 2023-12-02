import React from "react";

function index({ headingOne }) {
  return (
    <>
      <h1 className="2xl:text-9xl xl:text-8xl md:text-6xl text-3xl font-bold 2xl:leading-[128px] xl:leading-[128px] md:leading-[96px] leading-[24px] pr-2 tracking-[-0.06em] text-center bg-clip-text product-gradient t-f-c pb-4">{headingOne}</h1>
    </>
  );
}

export default index;
