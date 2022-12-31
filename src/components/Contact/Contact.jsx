import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <section className="page-section" id="kontak">
        <div className="container"></div>
        <h2 className="page-section-heading text-center text-capitalizeeachword text-secondary mb-0">Kontak</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7">
            <form name="kontak" method="post" action="" id="contactForm" autocomplete="off">
              <h5>Nama</h5>
              <div class="form-floating mb-1">
                <input className="form-control" id="nama" type="text" placeholder="Isikan nama lengkap..." autofocus required oninvalid="this.setCustomValidity('Nama Harus Diisi')" oninput="this.setCustomValidity('')" />
              </div>
              <br />
              <h5>Email</h5>
              <div className="form-floating mb-1">
                <input className="form-control" id="email" type="email" placeholder="nama@example.com" autofocus required oninvalid="this.setCustomValidity('Email Harus Diisi')" oninput="this.setCustomValidity('')" />
              </div>
              <br />
              <h5>Whatsapp</h5>
              <div className="form-floating mb-1">
                <input className="form-control" id="website" type="text" placeholder="www.example.com" autofocus required oninvalid="this.setCustomValidity('Website Harus Diisi')" oninput="this.setCustomValidity('')" />
              </div>
              <br />
              <h5>Pesan</h5>
              <div className="form-floating mb-1">
                <textarea className="form-control" id="alamat" type="text" placeholder="Isikan alamat anda..." autofocus required oninvalid="this.setCustomValidity('Alamat Harus Diisi')" oninput="this.setCustomValidity('')"></textarea>
              </div>
              <br />
              <button class="btn btn-primary btn-xl active" id="submitButton" type="submit">
                Kirim
              </button>
              <button class="btn btn-primary btn-xl active" id="resetButton" type="reset">
                Reset
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
