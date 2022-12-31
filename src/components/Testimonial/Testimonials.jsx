import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/doa.jpeg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-50" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Testimoni YukTahsin</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Belajar tahsin lebih mudah
                      </h6>
                      <p>
                        Dengan gaya belajar yang menyenangkan, serta bisa diakses
                        dimanapun, dan kapanpun. Membuat proses belajar tahsin bisa
                        mudah dan menyenangkan
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Galvin Eka Nurullah</h6>
                        <p>Bandung, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Fitur yang canggih
                      </h6>
                      <p>
                        Apabila kita mengalami kesulitan saat belajar, di YukTahsin
                        kita bisa berinteraksi langsung dengan guru mengaji,
                        baik melalui chat maupun terhubung via video call.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Muhammad Hasbi Sabilulhaq</h6>
                        <p>Sukabumi, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
