import React from "react";
import H2 from "../../reusableUI/headingTwo/index";
import Icon from "../../reusableUI/Icons/icons";
function feature() {
  return (
    <section className="flex flex-col items-center justify-center mt-32">
      <H2 headingTwo={"WORK BETTER AS A MONSTER WITH YURI"} />
      <p className="px-4 md:px-6 text-base leading-normal text-center text-gray-600 mt-2 lg:mt-6">
	  We are committed to automating, batching, and intelligentizing all manually operable steps. <br className="hidden lg:block"/>
Reduce manpower consumption through software, improve pitcher/team work efficiency, reduce pitcher's workload, <br className="hidden lg:block"/> and allow pitchers and team leaders to grasp the details and overall situation of pitching more clearly and efficiently. <br className="hidden lg:block"/> At the same time, clear and reliable optimization suggestions are provided based on the big data learning function.

      </p>
      <div className="flex items-center lg:flex-row flex-col justify-center lg:w-[1000px] xl:w-[1150px] lg:h-[303px] mt-8 relative">
        <div className="w-80 xl:w-96 left-0 bottom-0 lg:absolute overflow-hidden h-[232px] duration-700 ease-in-out hover:h-[303px] border border-gray-300 rounded-tl-lg rounded-bl-lg rounded-tr-none hover:rounded-tr-lg  py-10 px-12 bg-white group cursor-pointer gradient-hover">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-8 h-8 group-hover:bg-white bg-blue-600 bg-opacity-20 border rounded border-blue-600 flex items-center justify-center">
              <Icon icon="mobile" />
            </div>
            <h3 className="text-xl font-bold leading-5 text-center group-hover:text-white text-gray-900 mt-4">Publish ads in batches with one click</h3>
            <p className="text-base leading-6 h-[72px] duration-700 ease-in-out group-hover:h-[144px] overflow-hidden tracking-3 mt-3 text-center text-gray-600 group-hover:text-white">By presetting advertising templates, adding creative ideas in batches, and publishing ads to the selected advertising account with one click, you can achieve the free combination of multiple audiences, multiple materials, multiple copywriting, and multiple placements.</p>
          </div>
        </div>

        <div className="w-80 xl:w-96 h-[232px] lg:absolute inset-x-0 mx-auto bottom-0 duration-700 ease-in-out hover:h-[303px] border border-gray-300 rounded-t-none hover:rounded-t-lg py-10 px-12 bg-white group cursor-pointer gradient-hover">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-8 h-8 group-hover:bg-white bg-blue-600 bg-opacity-20 border rounded border-blue-600 flex items-center justify-center">
              <Icon icon="accessibility" />
            </div>
            <h3 className="text-xl font-bold leading-5 text-center group-hover:text-white text-gray-900 mt-4">Batch management</h3>
            <p className="text-base leading-6 h-[72px] duration-700 ease-in-out group-hover:h-[144px] overflow-hidden tracking-3 mt-3 text-center text-gray-600 group-hover:text-white">Creative management, account management, advertising management, BM management, virtual card management, visitor management, workbench, etc., comprehensive management functions, complete asset management work in one stop.</p>
          </div>
        </div>
        <div className="w-80 xl:w-96 h-[232px] border-gray-300 border-t border-b lg:absolute  right-0 bottom-0 duration-700 ease-in-out hover:h-[303px] border rounded-tr-lg rounded-br-lg rounded-tl-none hover:rounded-tl-lg e py-10 px-12 bg-white group cursor-pointer gradient-hover">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-8 h-8 group-hover:bg-white bg-blue-600 bg-opacity-20 border rounded border-blue-600 flex items-center justify-center">
              <Icon icon="dropInReady" />
            </div>
            <h3 className="text-xl font-bold leading-5 text-center group-hover:text-white text-gray-900 mt-4">Analysis & automatic optimization</h3>
            <p className="text-base leading-6 h-[72px] duration-700 ease-in-out group-hover:h-[144px] overflow-hidden tracking-3 mt-3 text-center text-gray-600 group-hover:text-white">The Yuri system provides a unified data panel to centrally manage advertising. The automatic optimization system intelligently optimizes based on preset rules and real-time advertising performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default feature;
