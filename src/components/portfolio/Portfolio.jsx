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
import g10 from "../../assets/g10.png";
import g11 from "../../assets/g11.png";

const portfolioData = [
  {
    id: 9,
    image: g10,
    title: "Jade.io",
    website: "https://jade.io",
    demo: "https://jade.io",
  },
  {
    id: 10,
    image: g11,
    title: "NDFV Benchbook",
    website: "https://dfvbenchbook.aija.org.au/",
    demo: "https://dfvbenchbook.aija.org.au/",
  },
  {
    id: 1,
    image: g2,
    title: "Take out mobile app (Mobile size)",
    website: "https://github.com/jiaxukang/Take-out-app-optimal",
    demo: "http://takeout.codekang.live/takeout/index.html",
    jug: true,
  },
  {
    id: 2,
    image: g1,
    title: "Soon Metaverse website",
    website: "",
    demo: "https://soonmetaverse.com/",
  },
  {
    id: 6,
    image: g6,
    title: "Defence Tower Game",
    website: "https://github.com/jiaxukang/DefenceTower",
    demo: "https://www.youtube.com/watch?v=OLFFdOKLEz0",
    jug: true,
  },
  {
    id: 4,
    image: g4,
    title: "Tripal Andriod App",
    website: "",
    demo: "https://www.youtube.com/watch?v=lRNR12sU9JU",
  },
  {
    id: 5,
    image: g5,
    title: "Linked Game",
    website: "https://github.com/jiaxukang/LinkedGame",
    demo: "https://jiaxukang.github.io/LinkedGame/play.html",
    jug: true,
  },
  {
    id: 3,
    image: g3,
    title: "Library Management System",
    website: "https://github.com",
    demo: "https://www.youtube.com/watch?v=UEuPcORPjZM",
  },
  {
    id: 7,
    image: g7,
    title: "P2P Dowlnoad Application",
    website: "https://github.com/jiaxukang/P2PFileTransfer",
    demo: "https://github.com",
    jug: true,
    demos: true,
  },
  {
    id: 8,
    image: g8,
    title: "White Board Application",
    website: "https://github.com/jiaxukang/WhiteBoard",
    demo: "https://github.com",
    jug: true,
    demos: true,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, website, demo,jug, demos}) => {
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
                  !demos?<a
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
