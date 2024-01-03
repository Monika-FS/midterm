import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div className="footer-items">
          <div className="newsletter">
            <div className="newsletter-items">
              <h5 style={{ color: "red" }}>Subscribe to our newsletter</h5>
              <p className="para">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
              <div class="input-group input-btn">
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                />
                <span class="input-btn">
                  <button class="button sub-btn" type="submit">
                    Subscribe Now
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="support">
            <div className="support-items">
              <h5 style={{ color: "red" }}>Support</h5>
              <ul>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Help</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <div className="contact-items ">
              <h5 style={{ color: "red" }}>Contact us</h5>
              <ul>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <span>+1281248818</span>
                </li>
                <li>
                  <i class="fa-sharp fa-regular fa-envelope"></i>{" "}
                  <span className="email">monikarao1301@gmail.com</span>
                </li>
                <div className="social-icons">
                  <ul>
                    <li>
                      <Link to={"https://www.google.co.in/"}>
                        <i class="fa-brands fa-google"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://www.facebook.com/"}>
                        <i class="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://twitter.com/i/flow/login"}>
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://www.instagram.com/"}>
                        <i class="fa-brands fa-square-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-end">Copyright @2023;Dezined by Monika Rao</p>
      </div>
    </>
  );
};

export default Footer;
