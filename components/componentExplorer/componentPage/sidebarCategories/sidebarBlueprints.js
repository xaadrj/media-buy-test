import React, { useEffect, useState } from "react";
import Icon from "../../../reusableUI/Icons/icons";
const website = ["All", "Hero", "Features", "CTA", "About", "Blog", "Content", "Logo Cloud", "Newsletter", "Pricing", "Stats", "Team", "Testimonials", "Contact", "FAQ", "Error 404", "Footer"];
const stores = ["All", "Hero", "CTA", "Blog", "Newsletter", "FAQ", "Footer", "Navigation", "Featured", "Partners", "Headings", "Highlights", "Banner", "Best Sellers", "Product Grid", "Product Category", "Product Description", "Order Summary", "Quick View", "Cookies", "Carousel", "Checkout", "Filter", "Modal", "Shopping Cart", "Social", "Review", "Wishlist"];
const dashboard = ["All", "Alerts", "Buttons", "Check Boxes", "Toggles", "Tooltips", "Inputs", "Exports", "Gauges", "Loaders", "Links", "Notifications", "Paginations", "Progress Bar", "Radio Button Groups", "Tabs", "Accordions", "Dropdowns", "Modals", "Filters", "Horizontal Navbar", "Forms", "Tables", "Ratings", "Vertical Navbar", "Wizards"];
function sidebarBlueprints(props) {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      {/* Website */}
      <div
        onClick={() => {
          setOpen1(!open1), setOpen2(false), setOpen3(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[80]"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Website</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open1 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open1 ? `h-[578px]` : `h-0 `}`}>
        {website.map((data) => {
          return (
            <li
              key={data + Math.random(100)}
              onClick={() => {
                props.onChange(data), props.kitCategory("Websites");
              }}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* Website */}
      {/* Store */}

      <div
        onClick={() => {
          setOpen2(!open2), setOpen1(false), setOpen3(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[80] mt-2"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Stores</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open2 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open2 ? `h-[952px]` : `h-0 `}`}>
        {stores.map((data) => {
          return (
            <li
              key={data + Math.random(100)}
              onClick={() => {
                props.onChange(data), props.kitCategory("Stores");
              }}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* Store */}

      {/* Dashboard */}
      <div
        onClick={() => {
          setOpen3(!open3), setOpen1(false), setOpen2(false);
        }}
        className="flex items-center justify-between w-full cursor-pointer xl:py-2 py-4 xl:px-0 px-2 relative z-[80] mt-2"
      >
        <h2 className="text-xl font-semibold leading-5  text-gray-800">Dashbaord</h2>
        <Icon icon="chevron" customClasses={`duration-300 ease-in-out ${open3 ? `transform rotate-0` : `transform rotate-180`}`} />
      </div>
      <ul className={`mt-2 duration-300 ease-in-out overflow-hidden ${open3 ? `h-[900px]` : `h-0 `}`}>
        {dashboard.map((data) => {
          return (
            <li
              key={data + Math.random(100)}
              onClick={() => {
                props.onChange(data), props.kitCategory("Dashboards");
              }}
              className={`hover:bg-[#E9F4FC] rounded px-[28px] py-2 text-lg leading-none  ${data == props.active ? `text-[#17A1FA]` : `text-gray-800`} cursor-pointer`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {/* Dashboard */}
    </>
  );
}

export default sidebarBlueprints;
