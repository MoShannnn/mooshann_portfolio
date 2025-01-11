import React, { useState } from 'react';
import "./assets/css/style.css";
import "./App.css";
import "./index.css";

// Icons
import { IoMailOutline, IoCallOutline, IoCalendarOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoChevronDown } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

// Images
import myavatar from "./assets/images/memoji.png";
import designIcon  from "./assets/images/icon-design.svg";
import webAppIcon from "./assets/images/icon-dev.svg";
import mobileAppIcon from "./assets/images/icon-app.svg";
import webIcon from "./assets/images/icon-web.svg";
import { FaLaptopCode } from 'react-icons/fa';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activePage, setActivePage] = useState("about");

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  const handlePageNavigation = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const pages = ["about", "portfolio", "skills", 'resume'];

  return (
    <main>
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`} data-sidebar>
        <div className="sidebar-info">
          <div className="avatar-box">
            <img src={myavatar} alt="Richard hanrick" width="80" />
          </div>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Mo Shan
            </h1>

            <p className="title">Full Stack Developer</p>
          </div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/MoShannnn" target="_blank" className="social-link">
                <ion-icon><IoLogoGithub color={'#d6d6d6b3'} /></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.linkedin.com/in/mo-shan-b9628a28b/" target="_blank" className="social-link">
                <ion-icon><IoLogoLinkedin color={'#d6d6d6b3'} height={"18px"} /></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="mailto:moshan2500@gmail.com" target="_blank" className="social-link">
                <ion-icon><IoMailOutline color={'#d6d6d6b3'} /></ion-icon>
              </a>
            </li>
          </ul>

          <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
            <span>Show Contacts</span>

            <ion-icon><IoChevronDown color={'#ffdb70'} /></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoMailOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Email</p>

                <a href="mailto:moshan2500@gmail.com" className="contact-link">
                  moshan2500@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoCallOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Phone</p>

                <a href="tel:+959751026316" className="contact-link">
                  +959 751026316
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoCalendarOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Birthday</p>

                <time dateTime="2004-02-6">Feb 6, 2004</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoLocationOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Location</p>

                <address>Yangon</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          
        </div>
      </aside>

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
            Beyond my professional experience, I am committed to continuous growth and life longlearning 
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
                {/* <FaLaptopCode size={40} color='#ffdb70'/> */}

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
              <li className="filter-item">
                <button className="active" data-filter-btn>
                  All
                </button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web design</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Applications</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>

            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-selecct-value>
                  Select category
                </div>

                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>

              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item>All</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web design</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Applications</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web development</button>
                </li>
              </ul>
            </div>

            <ul className="project-list">
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
                      src="./assets/images/project-1.jpg"
                      alt="finance"
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">Finance</h3>

                  <p className="project-category">Web development</p>
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
              </li>
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

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </main>
  );
}

export default App;
