import React from "react";
import Logo from "../../assests/images/Icon.png";

const Copyright = () => {
    return (
  <footer className="text-center text-white" style={{backgroundColor:' #0a4275'}}>
   
    <div className="container p-0 pb-0">
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
        <h1 className=" d-flex align-items-center gap-1" style={{color:'#FFFFFF'}}>
            <img src={Logo} alt="" className="w-5" /> YukTahsin
      </h1>
        </p>
      </section>
    </div>
    <div className="text-center p-5"  style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
      © 2022 Copyright
    </div>
  </footer>
    );
};
    
export default Copyright;