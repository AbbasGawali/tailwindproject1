import React from "react";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";
import user3 from "../assets/img/user3.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero8 = () => {
  const professionalsArray = [
    {
      id: 1,
      name: "Mary Brown",
      post: "creative leader",
      img: user1,
    },
    {
      id: 2,
      name: "Ann Richmond",
      post: "creative leader",
      img: user2,
    },
    {
      id: 3,
      name: "Bob Greenfield",
      post: "programming guru",
      img: user3,
    },
  ];

  return (
    <div className="min-h-[80vh] px-4 md:px-16 py-8 flex flex-col  items-center">
      <motion.h2
        initial={{
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
        className="text-2xl mt-12 text-black font-bold"
      >
        Meet The Team
      </motion.h2>
      <motion.h2
        initial={{
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
        className="text-2xl md:text-5xl mb-20 text-[#4fb291] font-bold"
      >
        Our Professionals
      </motion.h2>
      <div className="flex flex-wrap justify-center md:justify-center">
        {professionalsArray.map(({ name, post, img, id }) => (
          <motion.div
            initial={{
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
            key={id}
            className={`card text-center m-4 w-[80vmin] flex flex-col items-center  md:w-[24rem] md:px-4 rounded-lg text-black  `}
          >
            <motion.img
              initial={{
                scale: 0.1,
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
              src={img}
              className="w-[15rem] rounded-2xl"
              alt=""
            />
            <h2 className="text-2xl font-bold mt-4 ">{name}</h2>
            <h5 className="font-bold  text-[#4fb291] my-4">{post}</h5>
            <p className="text-center leading-8 font-[300] text-[1.1rem]">
              Lorem ipsum dolor amet consectetur, adipisicing Necessitatibus
              iusto doloresson eos nobis ut.
            </p>
            <div className="icons flex justify-center gap-4 mt-2 ">
              <FaFacebookF className="text-[#4fb291]" />
              <FaTwitter className="text-[#4fb291]" />
              <FaInstagram className="text-[#4fb291]" />
              <FaLinkedinIn className="text-[#4fb291]" />
            </div>
          </motion.div>
        ))}
      </div>
      <p className="my-8">
        Image by <span className="underline underline-offset-4">Freepik</span>
      </p>
    </div>
  );
};
