import React from "react";
import "./tentang.css";
import Logo from "../../assests/images/Icon.png";
function Tentang() {
  return (
    <div>
      <section id="Tentang">
        <div class="small-container">
          <h2 class="title-am">
            <br />
            Tentang Kami
          </h2>
          <h2 class="sub-title">
            Website ini bernama YukTahshin. Website ini berfungsi sebagai media pembelajaran baca Al-Quran. Website ini memiliki berbagai fitur, seperti materi, video pembelajaran, latihan, level mengaji yang telah dicapai dan masih banyak
            lagi.
          </h2>
          <div class="row justify-content-center">
            <div class="col-2">
              <img src={Logo} />
              <h1>YukTahsin</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Tentang;
