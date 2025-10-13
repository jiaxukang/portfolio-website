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
            <img src={ME} alt="Felix Ken" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certification</h5>
              <small>
                E-Commerce with .Net Core & Angular | Udemy<br></br>
              </small>
              <small>Next.js 15 & React | Udemy</small>
            </article>
            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Education</h5>
              <small>
                Bachelor of Computer Science | University of Arizona
                <br></br>
              </small>
              <small>
                Master of Information Technology | UniMelb
                <br></br>
              </small>
            </article>
            <article className="about__card">
              <CiPassport1 className="about__icon" />
              <h5>485 VISA</h5>
              <small>expires in July 2028</small>
            </article>
          </div>
          <p>
            Highly motivated Full-Stack Software Engineer with 3+ years'
            experience delivering scalable applications, specialising in backend
            development, REST APIs and system integration. Skilled at
            modernising legacy platforms and building solutions that improve
            data accuracy, reduce processing times and automate workflows.
            Strong foundation in object-oriented programming, SQL, data
            processing and recognised for adaptability, strong troubleshooting
            and problem-solving skills and the ability to quickly learn new
            technologies. Currently seeking full-stack developer roles to apply
            expertise in <strong>Java, C#, Python, Next.js</strong> and further
            develop technical skills.
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
