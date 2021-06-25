import React from "react";
import ReactDOM from "react-dom";
import "../mystyle.css";

const Aboutus = () => {
  return (
    <>
      <main>
        <div className="title">Helping Hands </div>
        <div className="description1">
          We at helping hands aim to improve our healthcare system, by creating
          the first platform that will globally help to connect helpers with
          those in need of help.{" "}
        </div>
        <div className="description1">
          We plan to create this by creating a global platform where patients
          can ask for urgent medicines that may not be available nearby. We also
          plan to create a platform where recovered patients can share their
          experiences and help others to pass through a difficult time.{" "}
        </div>
        <div className="description1">
          Doctors can also share their experience therefore not only helping
          patients but also a doctor. Thereby helping the mental well being of
          both patient and doctor.
          <br />
          <br /> We also encourage them to hold a general meeting where they can
          share their life stories.
        </div>
        <div className="title">
          <br />
          <br />
          Developers
        </div>
        <div className="description1">
          .Sarthak Kansal
          <br />
          .Atul Kesharwani
          <br />
          .Kishan Saxena
          <br />
          .Shashank Gupta
        </div>
      </main>

      <footer>
        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/facebook.svg"
            alt="Facebook"
          />
        </a>
        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/github.svg"
            alt="GitHub"
          />
        </a>
        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/instagram.svg"
            alt="Instagram"
          />
        </a>

        <a href="#">
          <img
            class="codecell-img"
            src="./static/img/logo_covid.jpg"
            alt="TSEC CodeCell"
          />
        </a>

        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/twitter.svg"
            alt="Twitter"
          />
        </a>
        <a href="#" target="_blank">
          <img
            class="social-media-img"
            src="./static/img/social_media/youtube.svg"
            alt="YouTube"
          />
        </a>
      </footer>
    </>
  );
};
export default Aboutus;
