import React, { useState } from "react";
import FAQ from "../../reusableUI/faq/index";
import data from "./faq.json";
function index() {
  return (
    <section id="faq" className="mx-auto container  flex flex-col items-center justify-center mt-[148px]">
      <div className="xl:w-[1064px] bg-white 2xl:px-4 xl:px-10 px-4">
        <h2 className="md:text-3xl text-2xl font-bold leading-[32px] text-gray-800 mb-4">Frequently asked questions</h2>
        {data.map((data) => {
          return (
            <div key={data + Math.random(1000)}>
              <FAQ question={data.question} answer={data.answer} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default index;
