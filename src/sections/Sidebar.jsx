import React, { useState } from "react";

// Icons
import {
  IoMailOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoChevronDown,
} from "react-icons/io5";

// Images
import myavatar from "../assets/images/memoji.png";

function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <>
      <aside
        className={`sidebar ${sidebarActive ? "active" : ""}`}
        data-sidebar
      >
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
              <a
                href="https://github.com/MoShannnn"
                target="_blank"
                className="social-link"
              >
                <ion-icon>
                  <IoLogoGithub color={"#d6d6d6b3"} />
                </ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/mo-shan-b9628a28b/"
                target="_blank"
                className="social-link"
              >
                <ion-icon>
                  <IoLogoLinkedin color={"#d6d6d6b3"} height={"18px"} />
                </ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="mailto:moshan2500@gmail.com"
                target="_blank"
                className="social-link"
              >
                <ion-icon>
                  <IoMailOutline color={"#d6d6d6b3"} />
                </ion-icon>
              </a>
            </li>
          </ul>

          <button
            className="info_more-btn"
            data-sidebar-btn
            onClick={toggleSidebar}
          >
            <span>Show Contacts</span>

            <ion-icon>
              <IoChevronDown color={"#818cf8"} />
            </ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon>
                  <IoMailOutline color={"#818cf8"} />
                </ion-icon>
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
                <ion-icon>
                  <IoCallOutline color={"#818cf8"} />
                </ion-icon>
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
                <ion-icon>
                  <IoCalendarOutline color={"#818cf8"} />
                </ion-icon>
              </div>

              <div className="contact-info text-start">
                <p className="contact-title">Birthday</p>

                <time dateTime="2004-02-6">Feb 6, 2004</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon>
                  <IoLocationOutline color={"#818cf8"} />
                </ion-icon>
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
    </>
  );
}

export default Sidebar;
