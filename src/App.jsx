import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./assets/css/style.css";
import "./App.css";
import "./index.css";

// sections
import Sidebar from './sections/Sidebar';

// components
import MouseGlow from './components/MouseGlow';

// Icons
import designIcon from "./assets/images/icon-design.svg";
import webAppIcon from "./assets/images/icon-dev.svg";
import mobileAppIcon from "./assets/images/icon-app.svg";
import webIcon from "./assets/images/icon-web.svg";
import {
  IoEyeOutline,
  IoBookOutline,
  IoBriefcaseOutline
} from "react-icons/io5";
import { VscSymbolEvent } from "react-icons/vsc";
import htmlIcon from "./assets/images/icons/html5.svg"
import cssIcon from "./assets/images/icons/css.svg"
import jsIcon from "./assets/images/icons/javascript.svg"
import typescriptIcon from "./assets/images/icons/typescript.svg"
import bootstrapIcon from "./assets/images/icons/bootstrap.svg"
import tailwindIcon from "./assets/images/icons/tailwindcss.svg"
import reactIcon from "./assets/images/icons/react.svg"
import vuedotjsIcon from "./assets/images/icons/vuedotjs.svg"
import phpIcon from "./assets/images/icons/php.svg"
import laravelIcon from "./assets/images/icons/laravel.svg"
import pythonIcon from "./assets/images/icons/python.svg"
import djangoIcon from "./assets/images/icons/django.svg"

// Images
import antiProcrastImage from './assets/images/portfolios/anti_procrast_black.png';
import ticketBookingImage from './assets/images/portfolios/ticket_booking_system.png';
import trueColor from './assets/images/portfolios/true_color.png';
import iApprove from './assets/images/portfolios/i_approve.png';
import foodDelivery from './assets/images/portfolios/food_delivery.png';
import londonWebsite from './assets/images/portfolios/london_website.png';
import helloChineseWebsite from './assets/images/portfolios/hello_chinese_website.png';
import tutorLink from './assets/images/portfolios/tutor_link.png';
import digitalStamp from './assets/images/portfolios/digital_stamp.png';

function App() {
  const [activePage, setActivePage] = useState("about");

  const [activeCategory, setActiveCategory] = useState("all");

  //data

  const pages = ["about", "portfolio", "skills", 'resume'];

  const categories = ["all", "website", "web application", "mobile application", "figma"];

  const portfolios = [
    {
      'name': 'FocusFlow Anti-Procrast Web App',
      'image': antiProcrastImage,
      'language': 'Vue, Laravel, Shadcn, Filament',
      'categories': ['web application'],
    },
    {
      'name': 'Tempo Ticket Booking',
      'image': ticketBookingImage,
      'language': 'Bootstrap, Laravel, Fiament',
      'categories': ['web application'],
    },
    {
      'name': 'AI Personal Color Detect',
      'image': trueColor,
      'language': 'GPT API, Python, Django, Tailwlind',
      'categories': ['web application'],
    },
    {
      'name': 'iApprove',
      'image': iApprove,
      'language': 'JQuery, AJAX, Laravel',
      'categories': ['web application'],
    },
    {
      'name': 'BakerBakes Food Delivery',
      'image': foodDelivery,
      'language': 'Bootstrap, PHP, SQL',
      'categories': ['web application'],
    },
    {
      'name': 'London Website',
      'image': londonWebsite,
      'language': 'Javascript, Bootstrap',
      'categories': ['website'],
    },
    {
      'name': 'Language Center Website',
      'image': helloChineseWebsite,
      'language': 'Bootstrap, Laravel and Filament',
      'categories': ['website'],
    },
    {
      'name': 'Digital Stamp',
      'image': digitalStamp,
      'language': 'React Native and NativeWind',
      'categories': ['mobile application', 'figma'],
    },
    {
      'name': 'Tutor Link',
      'image': tutorLink,
      'language': 'UI Design for Searching Local Guide.',
      'categories': ['figma'],
    },

  ]

  const skills = [{
    'name': 'Bootstrap',
    'image': bootstrapIcon,
  },
  {
    'name': 'TailwindCSS',
    'image': tailwindIcon,
  },
  {
    'name': 'React',
    'image': reactIcon,
  },
  {
    'name': 'Vue',
    'image': vuedotjsIcon,
  },
  {
    'name': 'Php',
    'image': phpIcon,
  },
  {
    'name': 'Laravel',
    'image': laravelIcon,
  },

  {
    'name': 'Python',
    'image': pythonIcon,
  },
  {
    'name': 'Django',
    'image': djangoIcon,
  },
  {
    'name': 'HTML',
    'image': htmlIcon,
  },
  {
    'name': 'CSS',
    'image': cssIcon,
  },
  {
    'name': 'JavaScript',
    'image': jsIcon,
  },
  {
    'name': 'TypeScript',
    'image': typescriptIcon,
  },
  ]

  const handlePageNavigation = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const filteredPortfolios =
    activeCategory === "all"
      ? portfolios
      : portfolios.filter((project) => project.categories.includes(activeCategory));

  return (
    <main className='relative glow-capture'>
      <Sidebar />

      <div className="col-span-2 main-content">
        {/* Navbar */}

        <nav className="navbar">
          <ul className="navbar-list">
            {pages.map((page) => (
              <li key={page} className="navbar-item">
                <button
                  className={`navbar-link ${activePage === page ? "active" : ""}`}
                  data-nav-link
                  onClick={() => handlePageNavigation(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* About */}

        <article className={`${activePage === "about" ? "active" : ""}`} >
          <header>
            <h2 className="h2 article-title text-start">About me</h2>
          </header>

          <section className="about-text">
            <p>
              A passionate Full Stack Developer committed to gaining knowledge, skills, and experience.
              Experienced in web and mobile application development, as well as UI/UX design using Figma.
            </p>

            <p>
              Beyond my professional experience, I am committed to continuous growth and lifelong learning
              by regularly immersing myself in personal projects, online courses, and technology activities
              to sharpen my skills. I am deeply interested in the business strategy that
              drives technology impact on efficiency and growth.
            </p>
          </section>

          {/* Service */}

          <section className="service">
            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src={webIcon}
                    alt="design icon"
                    width="52"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Website</h4>

                  <p className="service-item-text">
                    Building responsive and user-friendly websites tailored to client needs.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src={webAppIcon}
                    alt="Web development icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web Application</h4>

                  <p className="service-item-text">
                    Developing efficient and scalable web applications for seamless functionality.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src={mobileAppIcon}
                    alt="mobile app icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Mobile Application</h4>

                  <p className="service-item-text">
                    Creating intuitive mobile apps focused on functionality and engagement.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src={designIcon}
                    alt="camera icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">UI/ UX Design</h4>

                  <p className="service-item-text">
                    Designing clean and user-centric interfaces for optimal user satisfaction.
                  </p>
                </div>
              </li>
            </ul>
          </section>

        </article>

        {/* PORTFOLIO */}

        <article className={`${activePage === "portfolio" ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title text-start">Portfolio</h2>
          </header>

          <section className="projects">
            <ul className="filter-list">
              {categories.map((category) => (
                <li className="filter-item" key={category}>
                  <button
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => setActiveCategory(category)}
                    data-filter-btn>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <ul className="project-list">
              {filteredPortfolios.map((project, index) => (
                <li
                  className={`project-item ${activeCategory === "all" || project.categories.includes(activeCategory)
                    ? "active"
                    : ""
                    }`}
                  data-filter-item
                  key={index}
                >
                  <a href="#">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <IoEyeOutline />
                      </div>
                      <img
                        src={project.image || "./assets/images/placeholder.png"}
                        alt={project.name}
                        loading="lazy"
                      />
                    </figure>

                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.language}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Skills */}

        <article className={`${activePage === "skills" ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title text-start">Skills</h2>
          </header>

          <section className="blog-posts">
            <ul className="blog-posts-list">
              {skills.map((skill) => (
                <li className="blog-post-item">
                  <a className="d-flex flex-col justify-content-center align-items-center py-3" href="#">
                    <img
                      src={skill.image}
                      alt="Design conferences in 2022"
                      loading="lazy"
                      width="40"
                    />
                    <h5 className="h5 blog-item-title mt-2 mb-0">
                      {skill.name}
                    </h5>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="skill mt-4">
            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5 mb-0">Website</h5>
                  <data value="80">80%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5 mb-0">Web Application</h5>
                  <data value="60">60%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "60%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5 mb-0">Mobile Application</h5>
                  <data value="50">50%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5 mb-0">UI/ UX</h5>
                  <data value="70">70%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                </div>
              </li>
            </ul>
          </section>
        </article>

        {/* RESUME */}

        <article className={`${activePage === "resume" ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title text-start">Resume</h2>
          </header>

          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <IoBookOutline />
              </div>

              <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  BSc (Hons) Business Computing and Information System
                </h4>

                <span>2024 — 2025</span>

                <p className="timeline-text">
                  University of Central Lancashire
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  NCC Diploma in Computing (with Business Management)
                </h4>

                <span>2021 — 2024</span>

                <p className="timeline-text">
                  Strategy First University College
                </p>
              </li>
            </ol>
          </section>

          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <IoBriefcaseOutline />
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Junior Software Engineer
                </h4>

                <span>2023 — 2025</span>

                <p className="timeline-text">
                  Enrich Insights Consulting Services Co., Ltd
                </p>
              </li>
            </ol>
          </section>

          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <VscSymbolEvent />
              </div>

              <h3 className="h3">Activities</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Samsung AI Hackathon
                </h4>

                <span>2024 — 2025</span>

                <p className="timeline-text">
                  Samsung Innovation Campus
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Strategy First's Mobile Application Plan Competition 2024
                </h4>

                <span>2024 — 2025</span>

                <p className="timeline-text">
                  Strategy First University College
                </p>
              </li>
            </ol>
          </section>

        </article>

      </div>

      <MouseGlow />
    </main>
  );
}

export default App;
