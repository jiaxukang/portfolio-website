import { useState } from "react";
import "./portfolio.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
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
import g12 from "../../assets/g12.png";
import g13 from "../../assets/g13.png";
import g14 from "../../assets/g14.png";
import g15 from "../../assets/g15.png";
const portfolioData = [
  {
    id: 9,
    image: g10,
    title: "Jade.io - Legislation Ingestion System",
    website: "https://jade.io",
    demo: "https://jade.io",
    description:
      "Backend optimisation with Java, Spring, PostgreSQL. Automated multi-state tracking with Selenium and Docker.",
  },
  {
    id: 10,
    image: g11,
    title: "NDFV Benchbook - Legal Research Platform",
    website: "https://dfvbenchbook.aija.org.au/",
    demo: "https://dfvbenchbook.aija.org.au/",
    description:
      "Full-stack development with Next.js and advanced content management.",
  },
  {
    id: 11,
    image: g12,
    title: "BFSLA - Member Management Platform",
    website: "https://dfvbenchbook.aija.org.au/",
    demo: "https://dfvbenchbook.aija.org.au/",
    description:
      "Full-stack with Next.js, Supabase, Sanity CMS, and Stripe payment integration. Processed $30K in first month.",
  },
  {
    id: 12,
    image: g15,
    title: "Delambre - Digital Legal Document Processing Engine",
    website: "https://github.com/jiaxukang",
    demo: "https://github.com/jiaxukang",
    jug: false,
    demos: true,
    description:
      "Java Spring Boot document processing with Apache POI. Cut conversion time from 24h to 1h. (Backend Engine, no UI)",
  },
  {
    id: 13,
    image: g13,
    title: "Do Job Now - Job Management System",
    website: "https://www.dojobnow.com/",
    demo: "https://www.dojobnow.com/",
    jug: true,
    demos: true,
    description:
      "Python FastAPI, PostgreSQL, Vue.js. Integrations with Stripe, Xero, ClickSend, and AWS.",
  },
  {
    id: 14,
    image: g14,
    title: "Skinet - E-commerce Platform",
    website: "https://github.com/jiaxukang/ECommerceWebsite",
    demo: "https://github.com/jiaxukang",
    jug: true,
    demos: true,
    description:
      "C# ASP.NET Core, Angular, MSSQL, Redis. Clean Architecture with 60% faster page loads.",
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openDialog = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((project) => {
          const { id, image, title, website, demo, jug, demos, description } =
            project;
          return (
            <article
              key={id}
              className="portfolio__item"
              onClick={() => description && openDialog(project)}
              style={{ cursor: description ? "pointer" : "default" }}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} height="200" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {jug ? (
                  <a
                    href={website}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <BsGithub /> Github
                  </a>
                ) : (
                  ""
                )}
                {!demos ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IoMdOpen /> Live Demo
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Dialog/Modal */}
      {dialogOpen && selectedProject && (
        <div
          className={`portfolio__dialog-overlay ${dialogOpen ? "active" : ""}`}
          onClick={closeDialog}
        >
          <div
            className="portfolio__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="portfolio__dialog-close" onClick={closeDialog}>
              <AiOutlineClose />
            </button>

            <div className="portfolio__dialog-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="portfolio__dialog-content">
              <h2>{selectedProject.title}</h2>
              <p className="portfolio__dialog-description">
                {selectedProject.description}
              </p>

              <div className="portfolio__dialog-links">
                {selectedProject.jug && (
                  <a
                    href={selectedProject.website}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub /> View on Github
                  </a>
                )}
                {!selectedProject.demos && (
                  <a
                    href={selectedProject.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoMdOpen /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
