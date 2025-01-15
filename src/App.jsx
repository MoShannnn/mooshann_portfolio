import React, { useState } from 'react';
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
      'language': 'Vue, Laravel, Inertia.js, Tailwind, Shadcn, Filament',
      'categories': ['web application'],
    },
    {
      'name': 'Tempo Ticket Booking',
      'image': ticketBookingImage,
      'language': 'HTML, JS, JS, Bootstrap, Laravel, Fiament',
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
      'language': 'HTML, CSS, JS, Bootstrap, Tailwind CSS, Laravel, JQuery, AJAX',
      'categories': ['web application'],
    },
    {
      'name': 'BakerBakes Food Delivery',
      'image': foodDelivery,
      'language': 'HTML, CSS, JS, Bootstrap, PHP and SQL.',
      'categories': ['web application'],
    },
    {
      'name': 'London Website',
      'image': londonWebsite,
      'language': 'HTML, CSS, JS, Bootstrap.',
      'categories': ['website'],
    },
    {
      'name': 'Language Center Website',
      'image': helloChineseWebsite,
      'language': 'HTML, CSS, JS, Bootstrap, Laravel and Filament.',
      'categories': ['website'],
    },
    {
      'name': 'Digital Stamp',
      'image': digitalStamp,
      'language': 'React Native and Tailwind CSS',
      'categories': ['mobile application', 'figma'],
    },
    {
      'name': 'Tutor Link',
      'image': tutorLink,
      'language': 'A UI Design for Searching Local Guide.',
      'categories': ['figma'],
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
                  {/* <FaLaptopCode size={40} color='#818cf8'/> */}

                  <img
                    src={webIcon}
                    alt="design icon"
                    width="52"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Website</h4>

                  <p className="service-item-text">
                    The most modern and high-quality design made at a
                    professional level.
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
                    High-quality development of sites at the professional level.
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
                    Professional development of applications for iOS and
                    Android.
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
                    I make high-quality photos of any category at a professional
                    level.
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
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img
                        src={project.image || "./assets/images/placeholder.png"}
                        alt={project.name}
                        loading="lazy"
                      />
                    </figure>

                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.categories.join(", ")}</p>
                  </a>
                </li>
              ))}


              {/* <li
                className="project-item  active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-2.png"
                      alt="orizon"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Orizon</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-3.jpg"
                      alt="fundo"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Fundo</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="applications"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-4.png"
                      alt="brawlhalla"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Brawlhalla</h3>

                  <p className="project-category">Applications</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-5.png"
                      alt="dsm."
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">DSM.</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-6.png"
                      alt="metaspark"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">MetaSpark</h3>

                  <p className="project-category">Web design</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-7.png"
                      alt="summary"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Summary</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="applications"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-8.jpg"
                      alt="task manager"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Task Manager</h3>

                  <p className="project-category">Applications</p>
                </a>
              </li>

              <li
                className="project-item  active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src="./assets/images/project-9.png"
                      alt="arrival"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Arrival</h3>

                  <p className="project-category">Web development</p>
                </a>
              </li> */}
            </ul>
          </section>
        </article>

        {/* skills */}

        <article className={`${activePage === "skills" ? "active" : ""}`} >
          <header>
            <h2 className="h2 article-title text-start">Blog</h2>
          </header>

          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-1.jpg"
                      alt="Design conferences in 2022"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">
                      Design conferences in 2022
                    </h3>

                    <p className="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt,
                      explicabo.
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-2.jpg"
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">
                      Best fonts every designer
                    </h3>

                    <p className="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                      est eligendi.
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-3.jpg"
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Design digest #80</h3>

                    <p className="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis
                      nostrum exercitationem ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-4.jpg"
                      alt="UI interactions of the week"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">
                      UI interactions of the week
                    </h3>

                    <p className="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis
                      nostrud exercitation ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-5.jpg"
                      alt="The forgotten art of spacing"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">
                      The forgotten art of spacing
                    </h3>

                    <p className="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-6.jpg"
                      alt="Design digest #79"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Design digest #79</h3>

                    <p className="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat,
                      velit esse cillum.
                    </p>
                  </div>
                </a>
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
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  University school of the arts
                </h4>

                <span>2007 — 2008</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">New york academy of art</h4>

                <span>2006 — 2007</span>

                <p className="timeline-text">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere
                  menda ossimus, omnis voluptas assumenda est omnis..
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  High school of art and design
                </h4>

                <span>2002 — 2004</span>

                <p className="timeline-text">
                  Duis aute irure dolor in reprehenderit in voluptate, quila
                  voluptas mag odit aut fugit, sed consequuntur magni dolores
                  eos.
                </p>
              </li>
            </ol>
          </section>

          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et qvuas molestias
                  exceptur.
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Art director</h4>

                <span>2013 — 2015</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>

              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
            </ol>
          </section>

          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Web design</h5>
                  <data value="80">80%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Graphic design</h5>
                  <data value="70">70%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Branding</h5>
                  <data value="90">90%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">WordPress</h5>
                  <data value="50">50%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                </div>
              </li>
            </ul>
          </section>
        </article>

      </div>
      <MouseGlow />

    </main>
  );
}

export default App;
