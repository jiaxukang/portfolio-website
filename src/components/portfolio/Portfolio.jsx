import React from "react";
import "./portfolio.css";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g9.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
import v1 from "../../assets/video1.mp4";

const portfolioData = [
  {
    id: 1,
    image: g2,
    title: "Take out mobile app",
    website: "https://github.com/jiaxukang/Take-out-app-optimal",
    demo: "http://codekang.live/takeout/index.html",
    jug: true
  },
  {
    id: 2,
    image: g1,
    title: "Soon Metaverse officework website",
    website: "",
    demo: "https://soonmetaverse.com/",
  },
  {
    id: 6,
    image: g6,
    title: "Defence Tower Game",
    website: "https://github.com/jiaxukang/DefenceTower",
    demo: "https://github.com",
    jug: true
  },
  {
    id: 4,
    image: g4,
    title: "Tripal Andriod App",
    website: "",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: g5,
    title: "Linked Game",
    website: "https://github.com/jiaxukang/LinkedGame",
    demo: "https://jiaxukang.github.io/LinkedGame/play.html",
    jug: true
  },
  {
    id: 3,
    image: g3,
    title: "This is a portfolio item title",
    website: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 7,
    image: g7,
    title: "P2P Dowlnoad Application",
    website: "https://github.com/jiaxukang/P2PFileTransfer",
    demo: "https://github.com",
    jug: true,
    demo: false,
  },
  {
    id: 8,
    image: g8,
    title: "White Board Application",
    website: "https://github.com/jiaxukang/WhiteBoard",
    demo: "https://github.com",
    jug:true,
    demo: false,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, website, demo,jug }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} height="200"/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {
                  jug?<a href={website} className="btn" target="_blank">
                  Github
                </a>: ""
                }
                {
                  demo?<a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>:""
                }
              
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
