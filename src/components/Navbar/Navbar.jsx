import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./navbar.css";
import Logo from "../../assests/images/Icon.png";
import User from "./galvin.png";
import Login from "../Login/Login";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
  <div class="container-fluid">
      <h5 className=" d-flex align-items-center gap-1" style={{color:'#FFFFFF'}}>
            <img src={Logo} alt="" className="w-5" /> YukTahsin
      </h5>
      <pre>     </pre>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login/beranda">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login/pembelajaran">Pembelajaran</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login/forum">Forum</a>
        </li>
      </ul>
      <form class="d-flex">
      <h7 className=" d-flex align-items-center gap-1" style={{color:'#FFFFFF'}}>
       <img src = {User}/>
       <div class="btn-group">
    <button type="button" class="btn btn-primary">Galvin Eka Nurullah</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="/">Log Out</a>
    </div>
</div>
       </h7>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
