import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        style={{ backgroundImage: `url(${BannerImage})` }}
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit
          eius dolorum commodi quis tempore rem, aliquid architecto inventore
          quas necessitatibus nemo fugiat provident iste. Et cumque fugiat
          voluptatum cum.lorem Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium officiis corrupti at repellat numquam
          temporibus sint neque, repudiandae laboriosam quisquam, porro dicta
          dolorem id deleniti eos aperiam! Nihil, ad consequuntur. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt quos accusamus
          mollitia excepturi vero beatae, assumenda magnam laudantium impedit
          labore dicta esse sint quas asperiores adipisci iure ut exercitationem
          rerum?
        </p>
      </div>
    </div>
  );
}

export default About;
