import React, { useState } from "react";
import Buttonbg from "../buttonBg";
import axios from "axios";

import SmallSpinner from "../spinner/Spinner";
function index() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const sendSubscribtion = () => {
    setLoading(true);
    if (!validateEmail(email)) {
      setMsg(<p className="text-gray-700 text-base font-normal text-center">Please enter a valid email.</p>);
      setLoading(false);
    } else {
      let sendingObj = {
        email: email,
      };
      axios
        .post(process.env.NEXT_PUBLIC_LINK + "/email-subscription", sendingObj)
        .then((res) => res.data)
        .then(() => {
          setEmail("");
          setMsg(<p className="text-gray-700 text-base font-normal text-center">Thank you for subscribing.</p>);
          setLoading(false);
        })
        .catch(() => {
          setMsg(<p className="text-gray-700 text-base font-normal text-center">Something went wrong, please try later.</p>);
          setLoading(false);
        });
    }
  };
  return (
    <section className="xl:mt-[96px] md:mt-[96px] mt-[32px] flex flex-col items-center justify-center 2xl:px-4 xl:px-10 px-4">
      <h2 className="md:text-4xl text-2xl md:flex flex-col items-center justify-center font-bold md:leading-[43px] leading-[28x] tracking-[-0.02em] text-center">
        Let us pester you with cool
        <span className="bg-clip-text product-gradient t-f-c pb-3"> stuff and upgrades</span>
      </h2>
      <div className="md:w-[531px] w-full rounded-md border border-gray-300 p-2 md:flex items-center justify-between mt-8 ">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full  outline-none focus:outline-none border-none text-base leading-4 text-gray-500 placeholder:text-gray-500 pr-6"
          placeholder="Enter your email"
        />
        <div className=" flex-shrink-0 md:flex hidden">
          <button onClick={sendSubscribtion} className="w-[114px] h-[40px] lex hover:bg-opacity-90 items-center justify-center text-base font-semibold tracking-1 leading-4 product-gradient-button text-sm font-bold  text-white rounded focus:outline-none">
            {" "}
            {loading ? <SmallSpinner className="animate-spin rounded-full w-5 h-5 border-2 border-purple-700 border-solid group-hover:border-white" /> : "Subscribe"}
          </button>
        </div>
      </div>
      <div className=" w-full mt-2 md:hidden flex w-full" onClick={sendSubscribtion}>
        <button onClick={sendSubscribtion} className="md:w-[114px] w-full h-[40px] lex hover:bg-opacity-90 items-center justify-center text-base font-semibold tracking-1 leading-4 product-gradient-button text-sm font-bold  text-white rounded focus:outline-none">
          {" "}
          {loading ? <SmallSpinner className="animate-spin rounded-full w-5 h-5 border-2 border-purple-700 border-solid group-hover:border-white" /> : "Subscribe"}
        </button>
      </div>
      {msg ? msg : null}
    </section>
  );
}

export default index;
