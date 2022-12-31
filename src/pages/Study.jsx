import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Belajar from "../components/Belajar/Belajar";
import Copyright from "../components/Copyright/Copyright";


const Study = () => {
  return (
    <Fragment>
      <Navbar />
      <Belajar/>
      <Copyright/>
    </Fragment>
  );
};

export default Study;
