import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tentang from "../components/Tentang/Tentang";

const About = () => {
  return (
    <Fragment>
      <Header />
      <Tentang />
      <Footer/>
    </Fragment>
  );
};

export default About;
