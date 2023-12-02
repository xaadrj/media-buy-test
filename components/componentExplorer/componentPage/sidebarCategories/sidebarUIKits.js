import React, { useEffect, useState } from "react";
import Icon from "../../../reusableUI/Icons/icons";
const webapp = ["All", "Alerts", "Buttons", "Check Boxes", "Toggles", "Tooltips", "Inputs", "Export", "Gauges", "Loaders", "Links", "Notifications", "Pagination", "Progress Bar", "Radio Button Groups", "Tabs", "Accordions", "Dropdowns", "Modals", "Filters", "Horizontal Navbar", "Forms", "Tables", "Rating", "Vertical Navbar", "Wizards"];
const marketing = ["All", "Hero", "Features", "CTA", "About", "Blog", "Content", "Logo Cloud", "Newsletter", "Pricing", "Stats", "Team", "Testimonial", "Contact", "FAQ", "Error 404", "Footer"];
const eccom = ["All", "Hero", "CTA", "Blog", "Newsletter", "FAQ", "Footer", "Navigation", "Featured", "Partners", "Heading", "Highlights", "Banner", "Best Sellers", "Product Grid", "Product Category", "Product Description", "Order Summary", "Quick View", "Cookies", "Carousel", "Checkout", "Filter", "Modal", "Shopping Cart", "Social", "Review", "Wishlist"];
function sidebarBlueprints(props) {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      {/* webapp */}
      <div
        onClick={() => {
          setOpen1(!open1), setOpen2(false), setOpen3(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[100]"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Web Application</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open1 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open1 ? `h-[902px]` : `h-0 `}`}>
        {webapp.map((data) => {
          return (
            <li
              key={data + Math.random(10000)}
              onClick={() => {
                props.onChange(data), props.kitCategory("Web Application");
              }}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* webapp */}
      {/* Store */}

      <div
        onClick={() => {
          setOpen2(!open2), setOpen1(false), setOpen3(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[100] mt-2"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Marketing</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open2 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open2 ? `h-[579px]` : `h-0 `}`}>
        {marketing.map((data) => {
          return (
            <li
              key={data + Math.random(10000)}
              onClick={() => {
                props.onChange(data), props.kitCategory("Marketing");
              }}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* Store */}

      {/* eccom */}
      <div
        onClick={() => {
          setOpen3(!open3), setOpen1(false), setOpen2(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[100] mt-2"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Ecommerce</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open3 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open3 ? `h-[955px]` : `h-0 `}`}>
        {eccom.map((data) => {
          return (
            <li
              onClick={() => {
                props.onChange(data), props.kitCategory("Ecommerce");
              }}
              key={data + Math.random(10000)}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* eccom */}
    </>
  );
}

export default sidebarBlueprints;
