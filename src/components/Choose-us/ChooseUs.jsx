import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/ngajianak.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Fitur Terbaru YukTahsin</h2>
              <p>
                Dalam perkembangannya, YukTahsin selalu melakukan inovasi dengan
                cara memudahkan fitur-fitur yang memberikan kemudahan bagi para
                pengguna, agar memiliki pengalaman yang menyenangkan dan berkesan
                saat belajar mengaji di YukTahsin. Dengan inovasi yang kita lakukan,
                diharapkan dapat meningkatkan situs ini dari segi kualitas maupun
                kuantitas, agar bisa memberikan manfaat yang seluas-luasnya.
                Simak video berikut!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/MJAey_bDAz0"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <hr/>
    </section>
  );
};

export default ChooseUs;
