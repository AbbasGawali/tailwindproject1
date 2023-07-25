import { motion } from "framer-motion";
import React from "react";
import { TiTick } from "react-icons/ti";

const Hero9 = () => {
  return (
    <div className="min-h-min w-full bg-[#4fb291]  flex flex-col md:flex-row justify-center items-center text-white  px-4 md:px-16">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        }}
        className="py-12 md:py-32 w-full md:w-[60%]"
      >
        <h2 className="text-4xl font-bold">Start using Our App for free</h2>
        <p className="w-[80%] text-2xl my-8 leading-10">
          Access all Xero features for 30 days, then decide which plan best
          suits your business.
        </p>
        <div className="form flex flex-col md:flex-row  ">
          <input
            type="text"
            placeholder="Enter a valid email address"
            className="rounded-full bg-white text-gray-400 py-4 px-6 w-full md:w-[45%] mr-4 outline-none"
          />
          <button className="uppercase font-bold mt-4 md:mt-0 rounded-full bg-[#243f56] text-white py-4 px-6 w-full md:w-[20%]   outline-none">
            Submit
          </button>
        </div>
        <p className="mt-8 text-[1.2rem]">
          Or{" "}
          <span className="underline underline-offset-4 cursor-pointer hover:text-[#76ebc4]">
            compare plans from $17 per month
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: 10,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        }}
        className=" w-full md:w-[40%]"
      >
        <div className="flex items-center text-1xl md:text-2xl">
          <TiTick className="mr-2" /> Safe and secure
        </div>
        <div className="flex items-center text-1xl md:text-2xl my-2 md:my-4">
          <TiTick className="mr-2" />
          Cancel any time
        </div>
        <div className="flex items-center text-1xl pb-8 md:pb-0 md:text-2xl">
          <TiTick className="mr-2" />
          24/7 online support
        </div>
      </motion.div>
    </div>
  );
};

export default Hero9;
