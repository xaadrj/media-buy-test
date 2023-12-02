// import React from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import data from "./data.json";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import H2 from "../../reusableUI/headingTwo/index";
// import Icon from "../../reusableUI/Icons/icons";
// function index() {
//   return (
//     <section className="mt-[128px] mx-auto container flex flex-col items-center justify-center 2xl:px-4 xl:px-10 px-4">
//       <H2 headingTwo={"Testimonials"} firstLine={"Make believe and achieve the time saving remedy. Just "} secondLine={"ask all these folks, using our product"} />
//       <div>
//         <div className="xl:w-[1000px] mt-24 relative ">
//           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/bg-slider.png" alt="Person Profile Image" className="absolute left-0 bottom-0 -ml-3 -mb-3" />
//           <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} infinite={true}>
//             <Slider>
//               {data.map((data) => {
//                 return (
//                   <>
//                     <Slide index={data.index} tabIndex="null">
//                       <div className="md:flex items-stretch justify-between">
//                         <img src={data.img} alt="Person Profile Image"/>

//                         <div className="xl:pl-[128px] md:pl-[80px]  flex flex-col items-start justify-between">
//                           <Icon icon="upsideDownComma" />
//                           <p className="text-xl leading-[150%] tracking-3 text-gray-600">{data.quote}</p>
//                           <div>
//                             <p className="text-2xl font-semibold leading-6 tracking-3 text-gray-900">{data.author}</p>
//                             <p className="text-base leading-4 tracking-3 mt-3 text-gray-600">
//                               {data.role} - {data.company}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </Slide>
//                   </>
//                 );
//               })}
//             </Slider>
//             <div className="flex items-center absolute right-0 bottom-0">
//               <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
//                 <svg width={26} height={8} viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M25 4.5C25.2761 4.5 25.5 4.27614 25.5 4C25.5 3.72386 25.2761 3.5 25 3.5L25 4.5ZM0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464464C4.34027 0.269202 4.02369 0.269202 3.82843 0.464464L0.646446 3.64644ZM25 3.5L1 3.5L1 4.5L25 4.5L25 3.5Z" fill="#475569" />
//                 </svg>
//               </ButtonBack>

//               <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-4">
//                 <svg width={34} height={16} viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM33.7071 8.70711C34.0976 8.31658 34.0976 7.68342 33.7071 7.29289L27.3431 0.928932C26.9526 0.538408 26.3195 0.538408 25.9289 0.928932C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9H33V7H1V9Z" fill="url(#paint0_linear_22_5300)" />
//                   <defs>
//                     <linearGradient id="paint0_linear_22_5300" x1="29.8935" y1="8.9375" x2="25.2263" y2="-2.2427" gradientUnits="userSpaceOnUse">
//                       <stop stopColor="#2659F4" />
//                       <stop offset={1} stopColor="#009DFF" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </ButtonNext>
//             </div>
//           </CarouselProvider>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default index;
import React from "react";

function index() {
  return <></>;
}

export default index;
