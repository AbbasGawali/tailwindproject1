import React from "react";
import { TbViewfinder } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { SiCmake } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { motion } from "framer-motion";

const Cards = () => {
  const imgOptions = {
    initial: {
      // scale: 0.1,
      opacity: 0,
      y: 200,
    },
    whileInView: {
      // scale: 1,
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: 0.5,
      ease: "easeIn",
    },
  };
  const dataarr = [
    {
      id: 1,
      child: (
        <>
          <TbViewfinder
            className="bg-white p-1 rounded-lg"
            size={70}
            color="#4fb291"
          />
        </>
      ),
      bg: "bg-[#1f3e56] ",
      ac: "#4fb291",
      title: "Visualize It",
      transition: {
        delay: 0.2,
        ease: "easeIn",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam culpa laudantium",
    },
    {
      id: 2,
      child: (
        <>
          <SiCmake
            className="bg-white p-1 rounded-lg"
            size={70}
            color="#4fb291"
          />
        </>
      ),
      bg: "bg-[#4fb291] ",
      title: "Create It",
      ac: "#fff",
      transition: {
        delay: 0.4,
        ease: "easeIn",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam culpa laudantium",
    },
    {
      id: 3,
      child: (
        <>
          <AiOutlineStock
            className="bg-white p-1 rounded-lg"
            size={70}
            color="#4fb291"
          />
        </>
      ),
      bg: "bg-[#1f3e56] ",
      ac: "#4fb291",
      title: "Grow It",
      transition: {
        delay: 0.6,
        ease: "easeIn",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam culpa laudantium",
    },
  ];

  return (
    <div className="min-h-[80vh] px-16 py-8 flex flex-col  items-center">
      <div className="flex flex-wrap justify-center md:justify-center lg:justify-normal">
        {dataarr.map(
          ({ id, bg, child, description, title, transition, ac }) => (
            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={transition}
              key={id}
              className={`card text-center m-4 w-[80vmin]  md:w-[25rem] rounded-lg text-white ${bg}`}
            >
              <div className="icon   grid place-items-center py-4 md:py-8">
                {child}
              </div>
              <h3 className="text-3xl my:2 md:my-4 font-bold ">{title}</h3>
              <p className="text-1xl my-2 md:my-0 tracking-wide  md:leading-7  mx-2 md:mx-4 text-[20px]">
                {description}
              </p>
              <div className="arrow grid place-items-center py-2 md:py-8">
                <BsArrowRight size={70} color={ac} />
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
