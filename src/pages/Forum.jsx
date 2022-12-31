import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Forums from "../components/Forums/Forums";
import Copyright from "../components/Copyright/Copyright";

const Forum = () => {
  return (
    <Fragment>
      <Navbar />
      <Forums/>
      <Copyright/>
    </Fragment>
  );
};

export default Forum;
