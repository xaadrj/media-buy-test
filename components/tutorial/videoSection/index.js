import React from "react";
import Icon from "../../reusableUI/Icons/icons";
function index() {
  const data = [
    {
      src: "https://www.youtube.com/embed/RqL2TTptqhA",
      title: "Autolayout UI Elements",
      description: "All of Figit components are in autolayout. Use the power of autolayout to speed up your designs.",
    },
    {
      src: "https://www.youtube.com/embed/-cPGPOP1Tbg",
      title: "Figit Blueprints in Action",
      description: "This is how you can use the blueprints in Figit plugin to quickly design hi-fi components.",
    },
    {
      src: "https://www.youtube.com/embed/lg29Rvi-Olc",
      title: "Figit - A library of Auto layout components in Figma",
      description: "Thrilled to launch Figii Plugin for Figma. A library of auto layout UI elements and blueprints. ",
    },
    {
      src: "https://www.youtube.com/embed/5kV0cJiLvgc",
      title: "[DEMO] Figma Auto Layout UI Elements Plugin",
      description: "I have been working on a Figma plugin with my team. The plugin is a Library of UI elements in Auto Layout which we use internally. We created this library to reduce the amount of time we spend on design. The patterns can be used as a base to design faster, using auto layout.",
    }
  ];
  return (
    <section className="mx-auto container flex items-center justify-center 2xl:px-4 xl:px-10 px-4">
      <div className="w-[1280px] mt-40 md:mt-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  md:gap-x-5 gap-y-8 md:gap-y-[96px]">
          {data.map((data, key) => {
            return (
              <div className="cursor-pointer sm:mt-10 md:mt-0">
                <div className="w-full  rounded-lg relative flex items-center justify-center ">
                  <iframe className="w-full md:w-[560px] h-[215px]  sm:h-[315px]" src={data.src} />
                </div>
                <p className="text-2xl font-medium leading-7 text-gray-800 mt-[28px]">{data.title}</p>
                <p className="text-base leading-normal text-gray-400 mt-3">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default index;
