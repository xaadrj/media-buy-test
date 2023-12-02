import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          borderTopColor: "transparent",
        }}
        className="animate-spin rounded-full w-3 h-3 border-2 border-white border-solid"
      ></div>
    </div>
  );
};

export const SmallSpinner = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          borderTopColor: "transparent",
        }}
        // className="animate-spin rounded-full w-5 h-5 border-2 border-purple-700 border-solid"
        className={props.className}
      ></div>
    </div>
  );
};

export default Spinner;
