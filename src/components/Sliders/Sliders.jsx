import React from "react";
import foto1 from "./Slide1.jpg";
import foto2 from "./Slide2.jpg";
import foto3 from "./Slide3.jpg";
import "./sliders.css";

const Sliders = () => {
    return (
<div id="carouselStandar" class="carousel slide" data-ride="carousel">
<center><h1>Ayat Pilihan</h1></center>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <center><img src={foto1} class="d-block w-80" alt="gambar"/></center>
    </div>
    <div class="carousel-item">
      <center><img src={foto2} class="d-block w-80" alt="gambar"/></center>
    </div>
    <div class="carousel-item">
      <center><img src={foto3} class="d-block w-80" alt="gambar"/></center>
    </div>
  </div>
  <br/>
  <div className="container">
        <div className="row mt-100">
            <div className="col-md-100">
                <p>
                <a className="btn btn-info btn-block" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Ceklis Tilawah One Day One Juz
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body border-info">
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz1"/>
                        <label className="custom-control-label" for="juz1">Juz 1 ~ Surah Al-Fatihah Ayat 1 - Surah Al-Baqarah Ayat 141</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz2"/>
                        <label className="custom-control-label" for="juz2">Juz 2 ~ Surah Al-Baqarah Ayat 142 - Surah Al-Baqarah Ayat 252</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz3"/>
                        <label className="custom-control-label" for="juz3">Juz 3 ~ Surah Al-Baqarah Ayat 253 - Surah Ali-Imran Ayat 92</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz4"/>
                        <label className="custom-control-label" for="juz4">Juz 4 ~ Surah Ali-Imran Ayat 93 - Surah An-Nisa' Ayat 23</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz5"/>
                        <label className="custom-control-label" for="juz5">Juz 5 ~ Surah An-Nisa' Ayat 24 - Surah An-Nisa Ayat 147</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz6"/>
                        <label className="custom-control-label" for="juz6">Juz 6 ~ Surah An-Nisa' Ayat 148 - Surah An-Ma'idah Ayat 82</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz7"/>
                        <label className="custom-control-label" for="juz7">Juz 7 ~ Surah Al-Ma'idah Ayat 83 - Surah An-An'am Ayat 110</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz8"/>
                        <label className="custom-control-label" for="juz8">Juz 8 ~ Surah Al-An'am Ayat 111 - Surah Al-A'raf Ayat 87</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz9"/>
                        <label className="custom-control-label" for="juz9">Juz 9 ~ Surah Al-A'raf Ayat 88 - Surah Al-Anfal Ayat 40</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz10"/>
                        <label className="custom-control-label" for="juz10">Juz 10 ~ Surah Al-Anfal Ayat 41 - Surah At-Taubah Ayat 92</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz11"/>
                        <label className="custom-control-label" for="juz11">Juz 11 ~ Surah At-Taubah Ayat 93 - Surah Hud Ayat 5</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz12"/>
                        <label className="custom-control-label" for="juz12">Juz 12 ~ Surah Hud Ayat 6 - Surah Yusuf Ayat 52</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz13"/>
                        <label className="custom-control-label" for="juz13">Juz 13 ~ Surah Yusuf Ayat 53 - Surah Ibrahim Ayat 52</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz14"/>
                        <label className="custom-control-label" for="juz14">Juz 14 ~ Surah Al-Hijr Ayat 1 - Surah An-Nahl Ayat 128</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz15"/>
                        <label className="custom-control-label" for="juz15">Juz 15 ~ Surah Al-Isra' Ayat 1 - Surah Al-Kahf Ayat 74</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz16"/>
                        <label className="custom-control-label" for="juz16">Juz 16 ~ Surah Al-Kahf Ayat 75 - Surah Taha Ayat 135</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz17"/>
                        <label className="custom-control-label" for="juz17">Juz 17 ~ Surah Al-Anbiya Ayat 1 - Surah Al-Hajj Ayat 78</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz18"/>
                        <label className="custom-control-label" for="juz18">Juz 18 ~ Surah Al-Mu'minun Ayat 1 - Surah Al-Furqan Ayat 20</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz18"/>
                        <label className="custom-control-label" for="juz18">Juz 18 ~ Surah Al-Mu'minun Ayat 1 - Surah Al-Furqan Ayat 20</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz19"/>
                        <label className="custom-control-label" for="juz19">Juz 19 ~ Surah Al-Furqan Ayat 21 - Surah An-Naml Ayat 55</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz20"/>
                        <label className="custom-control-label" for="juz20">Juz 20 ~ Surah An-Naml Ayat 56 - Surah Al-Ankabut Ayat 45</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz21"/>
                        <label className="custom-control-label" for="juz21">Juz 21 ~ Surah Al-Ankabut Ayat 46 - Surah Al-Azhab Ayat 30</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz22"/>
                        <label className="custom-control-label" for="juz22">Juz 22 ~ Surah Al-Azhab Ayat 31 - Surah Yasin Ayat 27</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz23"/>
                        <label className="custom-control-label" for="juz23">Juz 23 ~ Surah Yasin Ayat 28 - Surah Az-Zumar Ayat 31</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz24"/>
                        <label className="custom-control-label" for="juz24">Juz 24 ~ Surah Az-Zumar Ayat 32 - Surah Fussilat Ayat 46</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz25"/>
                        <label className="custom-control-label" for="juz25">Juz 25 ~ Surah Fussilat Ayat 47 - Surah Al-jatsiyah Ayat 37</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz26"/>
                        <label className="custom-control-label" for="juz26">Juz 26 ~ Surah Al-Ahqaf Ayat 1 - Surah Ad-Dzariyat Ayat 30</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz27"/>
                        <label className="custom-control-label" for="juz27">Juz 27 ~ Surah Ad-Dzariyat Ayat 31 - Surah Al-Hadid Ayat 29</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz28"/>
                        <label className="custom-control-label" for="juz28">Juz 28 ~ Surah Al-Mujadilah Ayat 1 - Surah At-Tahrim Ayat 12</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz29"/>
                        <label className="custom-control-label" for="juz29">Juz 29 ~ Surah Al-Mulk Ayat 1 - Surah Al-Mursalat Ayat 50</label>
                    </div>
                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                        <input type="checkbox" className="custom-control-input" id="juz30"/>
                        <label className="custom-control-label" for="juz30">Juz 30 ~ Surah An-Naba' Ayat 1 - Surah An-Nas Ayat 6</label>
                    </div>
                     
                  </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
</div>
 );
};

export default Sliders;