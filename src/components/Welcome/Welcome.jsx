import React from "react";
import "./welcome.css";

const Welcome = () => {
    return (
        <div className="welcome">
            <br/><br/><br/>
          <h1 className="mb-4 hero__title" style={{color:'#FFFFFF'}}>
            Selamat Datang! <br /> di Platform YukTahsin
          </h1>
          <p className="mb-5" style={{color:'#FFFFFF'}}>
            Cek jadwal shalatmu disini!
          </p>
          <iframe src="//www.arrahmah.id/jadwal-shalat/?bg=097900" scrolling="no" width="30%" height="200" frameborder="no" framespacing="0"></iframe>
          <br/><br/><br/>
        </div>
    );
};

export default Welcome;