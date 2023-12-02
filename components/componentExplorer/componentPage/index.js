import React, { useEffect, useState } from "react";
import axios from "axios";
import SidebarUIKits from "./sidebarCategories/sidebarUIKits";
import SidebarBlueprints from "./sidebarCategories/sidebarBlueprints";
import Sticky from "react-stickynode";
function index() {
  const [selected, setSeleted] = useState("Blueprints");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("Websites");
  const [sidebar, setSidebar] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`https://yu9o7cup81.execute-api.us-west-1.amazonaws.com/dev/components/list`).then((res) => {
      const persons = res.data.data;
      setData(persons);
    });
  }, []);
  const changeHandler = (kit) => {
    setFilter(kit);
  };
  const categoryChange = (change) => {
    setCategory(change);
    setSidebar(!sidebar);
  };
  useEffect(() => {
    if (filter == "Check Boxes" && selected == "Blueprints") {
      setFilter("Checkboxes");
    }
    if ((filter == "Vertical Navbar") & (selected == "Blueprints")) {
      setFilter("Vertical Navbars");
    }
  });

  let allElements = data.map((singleData) => {
    let el = null;

    if (singleData.tab == selected && (singleData.subcategory === filter || filter === "All") && singleData.category == category) {
      el = (
        <div key={singleData.name + Math.random(10000)} className="shadow-kits xl:w-[413px] w-full rounded-[6px] h-[279px] flex items-center justify-center">
          <img src={singleData.img} alt={`Component ${singleData.name}`} className="w-full h-full object-fill object-center" />
        </div>
      );
    }
    return el;
  });

  return (
    <>
      <div className="flex items-start mt-[96px] xl:mx-auto xl:container 2xl:px-0 xl:px-10 relative">
        <div className="w-[305px] bg-white xl:sticky hidden xl:block top-0 z-20 md:pt-12 pt-0 ">
          {/* <Sticky enabled={true}> */}
          <sidebar className={`xl:w-full xl:relative absolute z-20  top-0 xl:h-auto h-screen bg-white duration-300 transform ease-in-out xl:py-0 py-8 xl:border-0 border-r border-gray-400 ${sidebar ? `xl:-translate-x-0 md:-translate-x-full -translate-x-full` : `translate-x-0`}`}>
            {selected == "Blueprints" && <SidebarBlueprints onChange={changeHandler} active={filter} kitCategory={categoryChange} />}
            {selected == "Ui Kits" && <SidebarUIKits onChange={changeHandler} active={filter} kitCategory={categoryChange} />}
            <button onClick={() => setSidebar(!sidebar)} className="h-6 w-6 bg-gray-800 absolute right-0 top-20 -mr-8 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800 xl:hidden ">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg7.svg" alt="toggler" />
            </button>
          </sidebar>
          {/* </Sticky> */}
        </div>
        <div className="w-6 h-screen absolute block xl:hidden md:top-0 top-20 z-20 md:pt-16 pt-0 ">
          {sidebar ? (
            <Sticky enabled={true}>
              <button onClick={() => setSidebar(!sidebar)} className="h-6 w-6 bg-gray-800 absolute left-0 top-6 ml-2 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800 xl:hidden ">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg7.svg" alt="toggler" />
              </button>
            </Sticky>
          ) : (
            ""
          )}
          <sidebar className={`md:w-[405px] w-[20rem] fixed h-screen overflow-y-auto  top-0 bg-white duration-300 transform ease-in-out xl:py-0 py-8 xl:border-0 border-r border-gray-400 ${sidebar ? `xl:-translate-x-0 md:-translate-x-full -translate-x-full z-[80]` : `translate-x-0 px-4 z-[80]`}`}>
            <div onClick={() => setSidebar(!sidebar)} className="w-full flex items-end justify-end py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
            {selected == "Blueprints" && <SidebarBlueprints onChange={changeHandler} active={filter} kitCategory={categoryChange} />}
            {selected == "Ui Kits" && <SidebarUIKits onChange={changeHandler} active={filter} kitCategory={categoryChange} />}
          </sidebar>
        </div>
        <section className="md:ml-6 w-full">
          <div className="md:flex hidden items-center border-b border-[#F3F4F6] w-full xl:sticky bg-white  top-0">
            <p onClick={() => setSeleted("Blueprints")} className={`text-2xl cursor-pointer font-semibold duration-300 ease-in-out leading-6 ${selected == "Blueprints" ? `border-[#17A1FA] text-[#17A1FA] ` : `hover:text-[#17A1FA] text-gray-700 border-transparent `}  border-b-2  py-4`}>
              Blueprints
            </p>
            <p onClick={() => setSeleted("Ui Kits")} className={`text-2xl cursor-pointer font-semibold duration-300 ease-in-out leading-6 ${selected == "Ui Kits" ? `border-[#17A1FA] text-[#17A1FA] ` : `hover:text-[#17A1FA] text-gray-700 border-transparent `}  border-b-2  py-4 ml-10`}>
              UI Kits
            </p>
          </div>
          <div className={`2xl:px-4 xl:px-10 px-4 relative  w-full md:hidden block ${sidebar ? `z-20 delay-700` : `z-0`}`}>
            <div className="w-full bg-white mt-6 flex items-center justify-between border rounded border-gray-300 relative z-0 cursor-pointer" onClick={() => setShow(!show)}>
              <p className="px-3 py-3 text-gray-600  text-sm leading-3 tracking-normal font-normal">{selected}</p>
              <div className="cursor-pointer text-gray-600  mr-3">
                {show ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </div>
              {show && (
                <ul className="visible transition duration-300 opacity-100 bg-white top-10 z-30 shadow rounded mt-2 py-1 w-full absolute">
                  <li onClick={() => setSeleted("Blueprints")} className="text-indigo-600 hover:bg-indigo-100 font-bold text-sm leading-3 tracking-normal py-3 px-3">
                    Blueprints
                  </li>
                  <li onClick={() => setSeleted("Ui Kits")} className="text-indigo-600 hover:bg-indigo-100 font-bold text-sm leading-3 tracking-normal py-3 px-3">
                    UI Kits
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="2xl:px-0 xl:px-10 px-4 py-12 grid md:grid-cols-2 xl:w-[1024px] xl:gap-x-[19px] md:gap-x-[10px] xl:gap-y-[19px] gap-y-[10px] ml-2 ">{allElements}</div>
        </section>
      </div>
    </>
  );
}

export default index;
