import React, { useState } from "react";
import freepik from "../assets/img/freepik.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Hero6 = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="flex flex-col md:flex-row py-4 px-4 md:px-16  w-full min-h-screen md:h-screen items-center justify-center">
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
          className=" flex-1"
        >
          <h2 className="text-2xl  md:text-5xl font-bold text-[#4fb291]">
            Each course of the program comprises:
          </h2>
          <h4 className="font-medium text-2xl my-4 text-black ">Tech Skills</h4>
          <p>
            We help businesses to innovate and grow by strengthening their ideas
            with our customized software solutions for multiple industries which
            includes healthcare, blockchain, education, insurance and many more
          </p>
          {/* <button>Learn More</button> */}
          <button className="text-2xl mt-6 px-6 py-[0.8rem]  md:px-10 md:py-[1rem]   text-white bg-[#4fb291]    rounded-full  hover:bg-[#1f3e56] duration-500   ">
            Learn More
          </button>
        </motion.div>
        <div className="flex-1 flex flex-col mt-8 md:mt-0 items-center justify-center">
          <img className="w-[20rem]" src={freepik} alt="" />
          <p className="mt-8">
            Image from <span className="text-[#4fb291]">Freepik</span>{" "}
          </p>
        </div>

        <div className="flex-1">
          <div className=" flex flex-col items-center mb-8">
            <h2 className="text-[#4fb291] text-6xl font-bold">
              {counterOn && (
                <CountUp start={0} end={65} duration={2} delay={0} />
              )}
              %
            </h2>
            <h4 className="my-2 font-bold">Sample Headline</h4>
            <p className="w-[70%] font-black leading-7  italic  text-center">
              Sample text. Click to select the Text Element.
            </p>
          </div>
          <div className=" flex flex-col items-center ">
            <h2 className="text-[#4fb291] text-6xl font-bold">
              {counterOn && (
                <CountUp start={0} end={20} duration={2} delay={0} />
              )}
              %
            </h2>
            <h4 className="my-2 font-bold">Sample Headline</h4>
            <p className="w-[70%] font-black leading-7  italic  text-center">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Hero6;
