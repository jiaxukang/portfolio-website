import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { CiPassport1 } from "react-icons/ci";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certification</h5>
              <small>N/A</small>
            </article>
            <article className="about__card">
              <CiPassport1 className="about__icon" />
              <h5>485 VISA</h5>
              <small>expires in 2028</small>
            </article>
          </div>
          <p>
            Accomplished IT developer who holds Master of Information Technology in The University of Melbourne and Bachelor of Computer Science in University of Arizona in designing, developing, and deploying
            scalable, highly available, and secure applications on the web
            technology stack with expertise in programming using Java and
            Python. Skilled in writing high-quality, efficient code using
            object-oriented methods, SQL, and data processing. A fast learner
            who excels in dynamic work environments and highly motivated to
            leverage skills to drive success in the next role. Proficient in
            implementing new optimisation techniques and utilising the latest
            frameworks to improve web speed and user engagement.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
