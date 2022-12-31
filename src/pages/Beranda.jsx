import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/Welcome";
import Copyright from "../components/Copyright/Copyright";
import AboutUs from "../components/About-us/AboutUs";
import Sliders from "../components/Sliders/Sliders";

const Beranda = () => {
  return (
    <Fragment>
      <Navbar />
      <Welcome/>
      <AboutUs/>
      <Sliders/>
      <Copyright/>
    </Fragment>
  );
};

export default Beranda;
