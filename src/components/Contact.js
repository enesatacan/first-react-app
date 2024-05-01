import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı ve Soyadınızı Giriniz"
          />
          <label>E-Posta</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen E-Posta Adresinizi Giriniz"
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            placeholder="Lütfen Mesajınızı Giriniz"
            rows="6"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
