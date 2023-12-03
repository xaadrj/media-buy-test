import Link from "next/link";

const Index = () => (

    <div classname="">
      <div className="">
        <section className="mx-auto container py-20">
          <div className="flex justify-center items-center flex-col">
            <div className="flex lg:flex-row flex-col-reverse lg:space-x-32">
              <div className="flex justify-center items-center">
                <div className="flex flex-col flex justify-end h-72 w-3/4 mt-6 md:mt-0">
                  <div className="md:mb-7 mb-2">
                    <h2 className="lg:text-4xl md:text-4xl text-3xl font-extrabold leading-9 text-gray-800 ">MEDIA BUY ERP</h2>
                  </div>
                  <div className="flex justify-start items-center">
                    <p className="md:text-lg text-base leading-7 text-gray-600 ">Yuri is a Media Buy ERP system that integrates material management, account management, tracking system, automatic optimization, and team management.</p>
                  </div>
                  <div className="flex justify-between items-center lg:mt-12 md:mt-8 mt-4">
                    <div>
                      
								<Link href="/contact" className="w-[128px] h-[46px] focus:outline-none  cursor-pointer text-sm text-gray-50 product-gradient-button  rounded flex items-center justify-center">
									Book a Demo
								</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex lg:justify-start justify-center items-start">
                <div className="flex justify-center items-center mb-10 lg:mt-0 w-96 md:w-full">
                  <img src="https://i.imgur.com/kygJO7L.png" alt="mobile" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" ">
        <section className="px-4 md:px-6 xl:px-12 flex justify-center items-center w-full mx-auto container py-20">
            <div className="flex items-center lg:flex-row flex-col  sm:space-y-10 lg:space-x-32">
              <div className="flex items-center justify-center xl:justify-start xl:items-start w-full">
                <div className=" flex-col flex  mt-6 md:mt-0">
                  <div className="md:mb-7 mb-2">
                    <h2 className="lg:text-7xl text-4xl sm:text-5xl md:text-5xl font-extrabold sm:leading-9 text-gray-800 ">What we can do?</h2>
                  </div>                  
                </div>
              </div>
              <div className="w-full flex lg:justify-start justify-center items-start">
                <div className="flex font-bold text-sm sm:text-lg md:text-xl lg:text-2xl  justify-center items-center mb-10 lg:mt-0 w-full">
                <ul className="">
                    <li className="py-2">1. Solve the cumbersome issue of multi-account Facebook advertising</li>
                    <li className="py-2">2. Solve the complex management of multiple advertisements and automatically control advertising costs</li>
                    <li className="py-2">3. Solve the high probability of advertising accounts and homepage posts being blocked</li>
                    <li className="py-2">4. Improve risk control issues such as risk payment, account blocking, and failure to pass review</li>
                    <li className="py-2">5. One-on-one teaching to ensure customers are proficient in using the system</li>
                    <li className="py-2">6. One-stop solution, from virtual card account opening to advertising release</li>
                </ul>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  
  
  );
  export default Index;
  
  
  
  
  