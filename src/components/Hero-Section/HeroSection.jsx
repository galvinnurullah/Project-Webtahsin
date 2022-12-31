import React from "react";
import { Container, Row, Col } from "reactstrap";
import ngaji from "../../assests/images/anakngaji.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Belajar mengaji <br /> Menjadi menyenangkan <br /> Bersama YukTahsin
              </h2>
              <p className="mb-5">
                Situs ini hadir sebagai inovasi agar anak-anak <br />  menjadi semangat dalam belajar Al-Qur'an. <br />
                Melalui fitur dan tampilan yang menarik, <br /> menjadikan pengalaman belajar mengaji menjadi luar biasa. <br/>
                Yuk belajar Al-Qur'an!
              </p>
              <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
    </section>
  );
};

export default HeroSection;
