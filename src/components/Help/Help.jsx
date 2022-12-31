import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Tanya from "./tanya.png";

const Help = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
      <br/><br/><br/><br/>
      <center><img src={Tanya}/></center>
        <Accordion.Header>Tips ngaji lancar bagaimana? #1</Accordion.Header>
        <Accordion.Body>
         <center>
            Mengaji sebetulnya tidak sulit, yang dibutuhkan itu adalah ketekunan.<br/>
            Jangan sampai kamu merasa, diri kamu belum lancar membaca Qur'an,<br/>
            lalu kamu malah malas untuk membacanya.<br/>
            Semangat terus ya.....!<br/>
         </center> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Kenapa saya tidak bisa login? #2</Accordion.Header>
        <Accordion.Body>
        <center>
            Pertama-pertama pastikan kamu memiliki akun yang valid untuk masuk ke platform YukTahsin .<br/>
            Kemudian, cek juga password yang kamu masukan sudah benar.<br/>
            Jika masih ada kendala, kamu bisa menghubungi layanan kontak yang tersedia.<br/>
            Semangat terus ya.....!<br/>
        </center>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Saya terkendala karena tidak bisa mengakses pembelajaran! #3</Accordion.Header>
        <Accordion.Body>
        <center>
            Pastikan kamu memiliki akses internet yang memadai untuk mengakses platform ini.<br/>
            Coba tanya ke temanmu, apakah dia tidak bisa mengakses juga?<br/>
            Bila iya, maka yang menjadi kesalahan berarti di sistem kita, jika tidak maka ada kendala di akun kamu!<br/>
            Semangat terus ya.....!<br/>
        </center>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Bagaimana jika saya lupa sandi? #4</Accordion.Header>
        <Accordion.Body>
        <center>
            Kamu dapat melakukan verifikasi dengan menggunakan fitur lupa sandi.<br/>
            Setelah itu, akan dilakukan pemulihan sandi agar akunmu dapat diakses kembali.<br/>
            Masukan sandi yang baru, dan login ulang.<br/>
            Semangat terus ya.....!<br/>
        </center>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Gambar saya tidak muncul kenapa? #5</Accordion.Header>
        <Accordion.Body>
        <center>
            Itu bisa disebabkan karena kesalahan koneksi yang kamu gunakan,<br/>
            Sehingga tidak dapat mengakses dan mengunduh gambar yang ada di internet.<br/>
            Akibatnya gambar yang kamu lihat kosong.<br/>
            Semangat terus ya.....!<br/>
        </center>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Help;
