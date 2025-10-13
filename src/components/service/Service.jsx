import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id = "service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-stack development with Java, C#, Python, Angular, React, Next.js and Vue.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend API development with REST APIs, Spring Boot, .NET Core, and FastAPI.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design and optimization with PostgreSQL, MSSQL, MySQL, and Redis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud deployment and DevOps with AWS, Azure, Docker, and Kubernetes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>System integration with third-party APIs (Stripe, Xero, payment gateways).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Legacy system modernization and performance optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CI/CD pipeline setup with automated testing and deployment workflows.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Working Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stakeholder engagement and effective communication with technical and non-technical teams.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong problem-solving abilities with attention to detail for complex technical issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proven ability to work independently and collaboratively within Agile/Scrum teams.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Quick learner with ability to adapt to new technologies and frameworks rapidly.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong organizational and time-management skills to meet project deadlines effectively.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resilient and adaptable, thriving in fast-paced and dynamic work environments.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Recognized for delivering high-quality work and exceeding performance expectations.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service