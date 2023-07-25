import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import { Hero8 } from "./components/Hero8";
import Hero9 from "./components/Hero9";
import Footer from "./components/Footer";

export const NavContext = createContext();
const App = () => {
  const [toggleNav, setToggleNav] = useState(false);
  useEffect(() => {
    console.log(toggleNav);
  }, []);

  return (
    <div className="bg-[#ffffff] font-montserrat">
      <NavContext.Provider value={{ toggleNav, setToggleNav }}>
        <Header />
        <Home />
        <Cards />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
        <Hero9 />
        <Footer />
      </NavContext.Provider>
    </div>
  );
};

export default App;
