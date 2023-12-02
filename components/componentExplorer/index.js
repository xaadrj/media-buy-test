import React from "react";
import Hero from "../reusableUI/hero/index";
import ComponentViews from "./componentPage/index";
function index() {
  return (
    <>
      <div className="lg:h-[508px]">
        <Hero twoLine={true} mt="mt-[70px]" himg={"lg:h-[648px] md:h-[500px] h-[408px]"} headingLineOne={"Preview the"} headingLineTwo={"UI Elements"} text={"Browse through the versatile list of UI Elements and see actual realistic previews"} />
      </div>
      <ComponentViews />
    </>
  );
}

export default index;
