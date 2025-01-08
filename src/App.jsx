import myavatar from "./assets/images/my-avatar.png";
import "./assets/css/style.css";
import "./App.css";
import "./index.css";

// Icons
import { IoMailOutline, IoCallOutline, IoCalendarOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoChevronDown } from "react-icons/io5";

// import "./assets/js/script.js";

function App() {
  return (
    <main>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <div className="avatar-box">
            <img src={myavatar} alt="Richard hanrick" width="80" />
          </div>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Richard hanrick
            </h1>

            <p className="title">Web developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon><IoChevronDown color={'#ffdb70'}/></ion-icon>
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

                <a href="mailto:richard@example.com" className="contact-link">
                  richard@example.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoCallOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoCalendarOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon><IoLocationOutline color={'#ffdb70'} /></ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Location</p>

                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

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
        </div>
      </aside>

      <div className="col-span-2 main-content">
        {/* Navbar */}

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>
                About
              </button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Resume
              </button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Portfolio
              </button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Blog
              </button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* About */}

        <article className="about active" data-page="about">
          <header>
            <h2 className="h2 article-title text-start">About me</h2>
          </header>

          <section className="about-text">
            <p>
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
            </p>

            <p>
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive. Moreover, I add
              personal touch to your product and make sure that is eye-catching
              and easy to use. My aim is to bring across your message and
              identity in the most creative way. I created web design for many
              famous brand companies.
            </p>
          </section>

          {/* Service */}

          <section className="service">
            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/icon-design.svg"
                    alt="design icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web design</h4>

                  <p className="service-item-text">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/icon-dev.svg"
                    alt="Web development icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web development</h4>

                  <p className="service-item-text">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/icon-app.svg"
                    alt="mobile app icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Mobile apps</h4>

                  <p className="service-item-text">
                    Professional development of applications for iOS and
                    Android.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/icon-photo.svg"
                    alt="camera icon"
                    width="40"
                  />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Photography</h4>

                  <p className="service-item-text">
                    I make high-quality photos of any category at a professional
                    level.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Testimonials */}

          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>

            <ul className="testimonials-list has-scrollbar">
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-1.png"
                      alt="Daniel lewis"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Daniel lewis
                  </h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-2.png"
                      alt="Jessica miller"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Jessica miller
                  </h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-3.png"
                      alt="Emily evans"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Emily evans
                  </h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-4.png"
                      alt="Henry william"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Henry william
                  </h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* testimonials modal */}

          <div className="modal-container" data-modal-container>
            <div className="overlay" data-overlay></div>

            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img
                    src="./assets/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="80"
                    data-modal-img
                  />
                </figure>

                <img src="./assets/images/icon-quote.svg" alt="quote icon" />
              </div>

              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title>
                  Daniel lewis
                </h4>

                <time dateTime="2021-06-14">14 June, 2021</time>

                <div data-modal-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Clients */}

          <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>

            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-1-color.png"
                    alt="client logo"
                  />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-2-color.png"
                    alt="client logo"
                  />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-3-color.png"
                    alt="client logo"
                  />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-4-color.png"
                    alt="client logo"
                  />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-5-color.png"
                    alt="client logo"
                  />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-6-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
            </ul>
          </section>
        </article>

        {/* RESUME */}

        <article className="resume" data-page="resume">
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

        {/* PORTFOLIO */}

        <article className="portfolio" data-page="portfolio">
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

        {/* Blog */}

        <article className="blog" data-page="blog">
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

        {/* Contact */}

        <article className="contact" data-page="contact">
          <header>
            <h2 className="h2 article-title text-start">Contact</h2>
          </header>

          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>

          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>

            <form action="#" className="form" data-form>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />

                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>

              <button className="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
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
