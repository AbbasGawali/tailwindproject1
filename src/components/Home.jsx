import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { NavContext } from "../App";

const Home = () => {
  const { toggleNav } = useContext(NavContext);
  return (
    <div className="my-custom-bg-class bg-bottom md:bg-center h-screen w-full bg-cover relative">
      {toggleNav ? <Sidebar /> : ""}
      <div className="px-8  min-h-screen md:h-screen flex flex-col items-center justify-normal md:justify-center ">
        <h2 className="text-[2rem] mt-16 md:mt-0 mb-4 md:mb-0 md:text-[4rem] text-gray-700 font-[300] ">
          Happiness &
        </h2>
        <h1 className="text-[2rem]  md:text-[4rem] mt-[-15px] mb-4 md:mb-0 md:mt-[-20px] leading-8 md:leading-normal line font-bold text-green-900 text-center">
          Mindfulness Courses
        </h1>
        <p className="w-[110%] md:w-[45%] italic text-center tracking-wider">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Viverra maecenas accumsan lacus vel
          facilisis volutpat. Cras fermentum odio eu feugiat pretium nibh.
        </p>
        <button className="m-8 px-4 py-[0.6rem] md:my-4 md:px-8 md:py-[0.8rem] tracking-wider text-green-600 border-2 md:border-4 rounded-full border-green-600 hover:text-white duration-500  hover:bg-green-600">
          Learn More
        </button>
        <p className="italic ">
          Image from{" "}
          <span className="underline underline-offset-2">Freepik</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
