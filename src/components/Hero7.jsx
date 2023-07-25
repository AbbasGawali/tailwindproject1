import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";


const Hero7 = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-hero-img3 px-4 md:px-16 py-12 text-white bg-bottom md:bg-center min-h-screen md:h-screen w-full bg-cover">
        <div className=" w-[100%] md:w-[50%] py-4">
          <h2 className="text-3xl md:text-6xl  font-bold  text-[#4fb291]">
            How and where to learn mindfulness
          </h2>
          <p className="text-slate-400 text-1xl   my-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. ​Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full ">
          <div className="md:flex-1">
            <div className="w-[100%] md:w-[80%]   ">
              <h3 className="text-2xl md:text-3xl font-normal">
                Introductory courses, taster sessions and groups Formal
                mindfulness courses
              </h3>
              <p className="mt-4   text-['1rem'] ">
                Sample text. Click to select the Text Element.
              </p>
            </div>
          </div>

          <div className="md:flex-1  ">
            <div className="flex mt-4 md:mt-0">
              <div className="mr-8  md:mr-20">
                <h2 className="text-[#4fb291] text-5xl md:text-6xl font-bold">
                  {counterOn && (
                    <CountUp start={0} end={5} duration={2} delay={0} />
                  )}
                  K
                </h2> 
                <p className="mt-4 text-[1.2rem]">Sample Headline</p>
              </div>
              <div className="">
                <h2 className="text-[#4fb291] text-5xl md:text-6xl font-bold">
                {counterOn && (
                    <CountUp start={0} end={60} duration={2} delay={0} />
                  )}%
                </h2>
                <p className="mt-4 text-[1.2rem]">Sample Headline</p>
              </div>
            </div>

            <div className="flex mt-12">
              <div className="mr-8  md:mr-20 ">
                <h2 className="text-[#4fb291] text-5xl md:text-6xl font-bold">
                {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                </h2>
                <p className="mt-4 text-[1.2rem]">Sample Headline</p>
              </div>
              <div className="">
                <h2 className="text-[#4fb291] text-5xl md:text-6xl font-bold">
                {counterOn && (
                    <CountUp start={0} end={1230} duration={2} delay={0} />
                  )}
                </h2>
                <p className="mt-4 text-[1.2rem]">Sample Headline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Hero7;
