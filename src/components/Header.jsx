import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { NavContext } from "../App";
const Header = () => {
  const { toggleNav, setToggleNav } = useContext(NavContext);

  const toggleClick = (prev) => {
    toggleNav ? setToggleNav(false) : setToggleNav(true);
  };

  return (
    <div className="px-8 flex items-center justify-between py-4">
      <div className="logo text-slate-400 text-2xl">Logo</div>
      <div className="logo cursor-pointer" onClick={toggleClick}>
        <FiMenu size={28} />
      </div>
    </div>
  );
};

export default Header;
