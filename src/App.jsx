import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myavatar from "./assets/images/my-avatar.png";
import "./App.css";
import "./assets/css/style.css";
// import "./assets/js/script.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  richard@example.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time datetime="1982-06-23">June 23, 1982</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>

     

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
    </>
  );
}

export default App;
