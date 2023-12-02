import React, { useEffect, useState } from "react";

function index({ headingTwo, textColor, firstLine, secondLine, ptagColor, ptag }) {
  const [noptag, setNoptag] = useState(true);
  useEffect(() => {
    if (ptag == null) {
      setNoptag(true);
    } else {
      setNoptag(false);
    }
  });
  return (
    <>
      <h2 className={`xl:text-6xl md:text-4xl text-2xl font-bold text-center  tracking-[-0.06em] xl:leading-[60px] leading-[30px] ${textColor ? " " + textColor : " text-gray-900 "}`}>{headingTwo}</h2>
      {noptag && (
        <p className={`text-base leading-[150%] tracking-[-0.03em] text-center md:px-0 px-10  ${ptagColor ? "" + ptagColor : "text-[#525252]"} xl:mt-6 mt-3`}>
          {firstLine}
          <br className="md:block hidden" />

          {secondLine}
        </p>
      )}
    </>
  );
}

export default index;
