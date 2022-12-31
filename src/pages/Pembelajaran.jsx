import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Learn from "../components/Learn/Learn";
import Copyright from "../components/Copyright/Copyright";

const Pemebelajaran = () => {
  return (
    <Fragment>
      <Navbar />
      <Learn/>
      <Copyright/>
    </Fragment>
  );
};

export default Pemebelajaran;
