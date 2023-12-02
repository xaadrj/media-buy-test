import React, { useEffect, useState } from "react";
import Icon from "../Icons/icons";
function index({ premiumCard, pricing, text }) {
  const [page, setPage] = useState(false);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    if (pricing === true) {
      setPage(true);
    } else {
      setPage(false);
    }

    if (premiumCard === true) {
      setPage(true);
      setPremium(true);
    } else {
      setPage(false);
      setPremium(false);
    }
  });
  return (
    <>
      <div className="flex items-center mt-5">
        <div className={`w-4 h-4  rounded-full flex items-center justify-center ${premium ? `bg-white` : `pricing-ticks`}`}>
          <Icon icon="tick" />
        </div>
        <p className={page ? `text-base leading-4 tracking-3 text-gray-600 ml-3` : `text-xs font-medium leading-3 text-gray-600 ml-3`}>{text}</p>
      </div>
    </>
  );
}

export default index;
