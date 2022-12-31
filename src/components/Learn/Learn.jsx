import React from "react";
import "./learn.css";

const { useState } = require("react");

function Learn() {
  const [cardsL] = useState([
    {
      title: "Alif",
      text: " Alif (dalam bahasa Arab ﺍ pada posisi lepas) adalah huruf pertama dalam abjad Arab.",
    },
    {
      title: "Ba'",
      text: " Ba (dalam bahasa Arab ﺏ pada posisi lepas) adalah huruf kedua dalam abjad Arab.",
    },
    {
      title: "Ta'",
      text: " Ta (dalam bahasa Arab ﺕ pada posisi lepas) adalah huruf ketiga dalam abjad Arab. ",
    },
    {
      title: "Tsa",
      text: " ṯa (dalam bahasa Arab ﺙ pada posisi lepas) adalah huruf keempat dalam abjad Arab.",
    },
    {
      title: "Jim",
      text: " Jim (dalam bahasa Arab ﺝ pada posisi lepas) adalah huruf kelima dalam abjad Arab.",
    },
    {
        title: "Ha'",
        text: " ḥa (dalam bahasa Arab ﺡ pada posisi lepas) adalah huruf keenam dalam abjad Arab.",
      },
      {
        title: "Kha'",
        text: " Kha (dalam bahasa Arab ﺥ pada posisi lepas) adalah huruf ketujuh dalam abjad Arab.",
      },
      {
        title: "Dal",
        text: " Dal (dalam bahasa Arab ﺩ pada posisi lepas) adalah huruf kedelapan dalam abjad Arab.",
      },
      {
        title: "Dzal",
        text: " ڌ dibaca dahal atau dhal (bahasa Sindhi: ڌال,) adalah abjad Arab varian dari huruf dal.",
      },
      {
        title: "Ra'",
        text: " Ra (dalam bahasa Arab ﺭ pada posisi lepas) adalah huruf kesepuluh dalam abjad Arab.",
      },
    ]);
    return (
        <div>
          <section>
            <div className="containerL">
                <br/><br/>
              <h1>Makhrajul Huruf Hijaiyah</h1>
              <div className="cardsL">
                {cardsL.map((cardL, i) => (
                  <div key={i} className="cardL">
                    <h3>{cardL.title}</h3>
                    <p>{cardL.text}</p>
                    <a href="/login/pembelajaran/belajar"><button className="btnL">Yuk Belajar!</button></a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
    export default Learn;  