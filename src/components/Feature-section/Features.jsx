import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Level",
    desc: "Fitur level agar proses  belajar tahsin kamu lebih sistematis. Tingkatkan level sesuai kemampuanmu saat ini. Teruslah berlatih!",
    icon: "ri-draft-line",
  },

  {
    title: "Forum",
    desc: "Fitur forum hadir, agar kamu bisa berkomunikasi dengan ustadz guru ngaji kamu dimanapun dan kapanpun!",
    icon: "ri-discuss-line",
  },

  {
    title: "Ranking",
    desc: "Rasanya akan lebih seru kalau kamu balap-balapan belajar ngaji bareng teman! Berlomba-lomba kebaikan!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
