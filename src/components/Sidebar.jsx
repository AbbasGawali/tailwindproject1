import React from "react";

const Sidebar = () => {
  return (
    <>
    <div className="absolute left-0 py-8 px-8 top-0 w-[70%] md:w-[30%] h-screen bg-[#4fb291] duration-500">
      <h3 className="text-center font-bold text-white text-3xl ">Home</h3>
      <h3 className="text-center font-bold text-white text-3xl my-8">About</h3>
      <h3 className="text-center font-bold text-white text-3xl">Services</h3>
 
    </div>
    </>
  );
};

export default Sidebar;
