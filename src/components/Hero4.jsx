import { motion } from "framer-motion";
import React from "react";

const Hero4 = () => {
  const dataarr = [
    {
      id: 1,
      no: "01",
      h1c: "text-[#1f3e56]",
      pc: "text-[#808080]",
      bg: "bg-[#fff] ",
      animation: {
        initial: {
          y: 100,
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
    {
      id: 2,
      animation: {
        initial: {
          scale: 0.1,
          y: 100,
          opacity: 0,
        },
        whileInView: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      no: "02",
      h1c: "text-[#fff]",
      pc: "text-[#fff]",
      bg: "bg-[#4fb291] ",
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
    {
      id: 3,
      no: "03",
      animation: {
        initial: {
          y: 100,
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      h1c: "text-[#1f3e56]",
      pc: "text-[#808080]",
      bg: "bg-[#fff] ",
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
    {
      id: 4,
      no: "04",
      animation: {
        initial: {
          y: 100,
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      h1c: "text-[#fff]",
      pc: "text-[#fff]",
      bg: "bg-[#1f3e56] ",
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
    {
      id: 5,
      no: "05",
      animation: {
        initial: {
          scale: 0.1,
          y: 100,
          opacity: 0,
        },
        whileInView: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      h1c: "text-[#1f3e56]",
      pc: "text-[#808080]",
      bg: "bg-[#fff] ",
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
    {
      id: 6,
      no: "06",
      animation: {
        initial: {
          y: 100,
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeIn",
        },
      },
      h1c: "text-[#fff]",
      pc: "text-[#fff]",
      bg: "bg-[#1f3e56] ",
      ac: "#4fb291",
      title: "Hight Quality",
      description:
        "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis.",
    },
  ];

  return (
    <div className="min-h-[80vh] px-16 py-8 flex flex-col  items-center">
      <motion.h2
        className="text-4xl text-center md:text-6xl my-8 text-[#4fb291] font-bold"
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
      >
        Benefits of working with us
      </motion.h2>

      <div className="flex flex-wrap justify-center md:justify-center">
        {dataarr.map(
          ({ id, bg, no, description, title, ac, h1c, animation, pc }) => (
            <motion.div
              {...animation}
              key={id}
              className={`card text-center m-4 w-[80vmin]  md:w-[24rem] md:px-4 rounded-lg text-white ${bg}`}
            >
              <div className="icon   grid place-items-center py-4 md:pt-8">
                <h2 className={`text-5xl ${h1c}`}>{no}</h2>
              </div>
              <h3 className={`text-3xl py-4 md:pt-0 font-bold ${h1c}`}>
                {title}
              </h3>
              <p
                className={`text-1xl my-2 md:my-0   md:leading-10  mx-2 md:mx-4 text-[20px] mb-4 p-4 ${pc}`}
              >
                {description}
              </p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Hero4;
