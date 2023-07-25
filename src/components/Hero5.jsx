import { motion } from "framer-motion";
import React from "react";

const Hero5 = () => {
  return (
    <div className="bg-hero-img2 bg-bottom md:bg-center min-h-[110vh] md:min-h-screen w-full bg-cover">
      <div className=" bg-[#1f3e56c9] flex flex-col justify-center items-center min-h-[110vh] md:min-h-screen w-full text-white">
        <motion.h1
          initial={{
            scale: 0.1,
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeIn",
          }}
          className="text-4xl md:text-6xl text-center font-bold mb-12"
        >
          How Coaching Works
        </motion.h1>
        <motion.p
          initial={{
            scale: 0.1,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeIn",
          }}
          className="w-[80%] md:w-[50%] text-center mb-12 text-1xl leading-7 md:leading-10    text-[20px] "
        >
          Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
          elementum.
        </motion.p>
        <motion.div
          initial={{
            scale: 0.1,
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeIn",
          }}
          className="buttons flex flex-col md:flex-row justify-center items-center   p-4 w-[50%]"
        >
          {/* <button>Learn More</button> */}
          {/* <button className="mt-16 text-2xl px-6 py-[0.8rem] md:my-6 md:mt-16 md:px-10 md:py-[1rem]   text-white bg-green-600    rounded-full  hover:text-[#1f3e56] duration-500  hover:bg-white">
            Learn More
          </button> */}
          <button className=" text-xl md:text-2xl px-6 w-[14rem] md:w-[18rem] py-[1rem]  md:mr-4   md:px-10 md:py-[1.5rem]   text-white bg-green-600    rounded-full  hover:text-[#1f3e56] duration-500  hover:bg-white">
            Learn More
          </button>
          <button className="text-xl md:text-2xl mt-4 md:mt-0 px-6 w-[14rem] md:w-[18rem] py-[1rem]  md:ml-4  md:px-10 md:py-[1.5rem]   text-white border-4 border-white    rounded-full  hover:text-[#1f3e56] duration-500  hover:bg-white">
            Live Demo
          </button>
        </motion.div>
        <motion.p
          initial={{
            scale: 0.1,
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeIn",
          }}
          className="mt-8"
        >
          Image from{" "}
          <span className="underline underline-offset-4">Freepik</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero5;
