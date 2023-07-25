import { easeInOut, easeOut, motion } from "framer-motion";
import React from "react";

const Hero3 = () => {
  return (
    <motion.div className="min-h-[120vh] md:min-h-screen relative px-8 bg-[#243f56] text-white">
      <span className="before:content-['']  before:absolute before:bg-[#4fb291] before:w-8 before:h-[65%] before:top-28 before:left-[0px]  after:content-['']  after:absolute after:bg-[#4fb291] after:w-8 after:h-[65%] after:top-28 after:right-[0px]">
        <div className=" container h-screen  flex flex-col justify-center items-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            whileInView={{
              opacity: 1,
              y: "0",
            }}
            transition={{
              delay: 0.5,
            }}
            className="font-bold text-3xl md:text-5xl mt-12 text-center "
          >
            Welcome Message
          </motion.h2>
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
              ease: "easeIn",
            }}
            className="mt-8 text-1rem md:text-[1.3rem] text-center w-[80%] md:w-[60%] leading-5  md:leading-10 "
          >
            Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus
            dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem
            ipsum dolor sit amet consectetur. Mauris pellentesque pulvinar
            pellentesque habitant morbi tristique senectus. Nec feugiat nisl
            pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero.
          </motion.p>
          <motion.button
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
              ease: "easeIn",
            }}
            className="mt-16 text-2xl px-6 py-[0.8rem] md:my-6 md:mt-16 md:px-10 md:py-[1rem]   text-white bg-green-600    rounded-full  hover:text-[#1f3e56] duration-500  hover:bg-white"
          >
            Learn More
          </motion.button>
        </div>
      </span>
    </motion.div>
  );
};

export default Hero3;
