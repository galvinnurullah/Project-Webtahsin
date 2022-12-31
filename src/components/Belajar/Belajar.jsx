import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import makhraj from "./Makhraj.jpg";
import alif from "./a.png";
import ba from "./b.png";
import ta from "./t.png";
import tsa from "./ts.png";
import ja from "./j.png";
import ha from "./h.png";
import kha from "./kh.png";
import ReactPlayer from "react-player";
import "./belajar.css";

const Belajar = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
    <section>
        <br/><br/>
        <center><h1>Gambar Makhrajul Huruf</h1></center>
        <center><img src={makhraj}/></center>
        <br/><br/>
        <hr/>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Alif (Hamzah)</h2>
              <p>
              Makhroj Huruf Hamzah Terletak pada Pangkal Tenggorokan, adapun cara pengucapannya seperti huruf A, mulut dibuka (Aa). 
              Sedangkan Huruf Hamzah memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Jelas (Jahr)<br/>
                2. Keras (Syiddah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/S4BHsds9VkI"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={alif} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Ba'</h2>
              <p>
              Makhroj Huruf Ba’ Terletak pada Bibir (Merapatkan Kedua Bibir), adapun Cara Pengucapannya seperti huruf B, tidak disertai nafas (Ba). 
              Sedangkan Huruf Ba’ memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Jelas (Jahr)<br/>
                2. Keras (Syiddah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
                5. Memantul (Qalqalah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/_Mo7cA0Vf1g"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={ba} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Ta'</h2>
              <p>
              Makhroj Huruf Ta’ Terletak pada Lidah (Ujung lidah bertemu Gusi Atas), adapun Cara Pengucapannya adalah Lidah menempel di gusi bagian atas, tidak boleh keluar (Ta). 
              Sedangkan Huruf Ta’ memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Samar (Hams)<br/>
                2. Keras (Syiddah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/4lv0Ff02exM"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={ta} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Tsa</h2>
              <p>
              Makhroj Huruf Tsa’ Terletak pada Ujung Lidah Dengan Ujung Gigi Seri Bagian Atas, adapun Cara Pengucapannya adalah Ujung lidah sedikit dikeluarkan, lidah bertemu ujung gigi (tsa). 
              Sedangkan Huruf Tsa’ memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Samar (Hams)<br/>
                2. Lunak (Rakhwah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/Q6W7zLuYwyU"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={tsa} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Jim</h2>
              <p>
              Makhroj Huruf Jim Terletak pada Bagian tengah lidah dan bagian tengah langit-langit mulut paling atas, adapun Cara Pengucapannya adalah Seperti huruf J, tidak boleh disertai nafas (ja). 
              Sedangkan Huruf Jim memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Jelas (Jahr)<br/>
                2. Keras (Syiddah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
                5. Memantul (Qolqolah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/yAtFRHe8Qqo"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={ja} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Ha'</h2>
              <p>
              Makhroj Huruf Ha' Terletak pada Bagian Tengah Tenggorokan (Katup pangkal tenggorokan), adapun Cara Pengucapannya adalah Seperti suara pernafasan, suara bersih dan nyaring (ha).
              Sedangkan Huruf Ha' memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Samar (Hams)<br/>
                2. Lunak (Rakhwah)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/ShQFhJjODhA"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={ha} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>

          <Col lg="6" md="6">
             <br/><br/>
            <div className="choose__content">
              <h2>Cara Membaca Huruf Kho'</h2>
              <p>
              Makhroj Huruf Kho' Terletak pada Bagian Tenggorokan Paling Atas (Daerah pangkal lidah dan langit-langit mulut yang berdaging), adapun Cara Pengucapannya adalah Suara agak kasar (kho).
              Sedangkan Huruf Kho' memiliki sifat-sifat huruf sebagai berikut:<br/>
                1. Dibaca Samar (Hams)<br/>
                2. Naik (Isti'la)<br/>
                3. Merendah (Istifal)<br/>
                4. Terbuka (Infitah)<br/>
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/Z_8rc7GK9JY"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={kha} alt="" className="w-100" />
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
            <br/><br/>
          </Col>
          <hr/>
        </Row>
      </Container>
    </section>
    );
};

export default Belajar;
