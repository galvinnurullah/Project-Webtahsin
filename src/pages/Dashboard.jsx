import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Dashboards from "../components/Dashboards/Dashboards";
import Copyright from "../components/Copyright/Copyright";


const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Dashboards/>
      <Copyright/>
    </Fragment>
  );
};

export default Dashboard;
