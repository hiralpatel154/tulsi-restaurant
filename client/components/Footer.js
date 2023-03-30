import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-logo">
              <div className="footer-logo">
                <a href="/index" title="Tulsi" className="site-logo font-36">
                  Tulsi
                </a>
              </div>
              <div className="footer-text">
                <p className="font-16">A Food Delivery Startup</p>
              </div>
            </div>
            <div className="footer-links">
              <h3 className="font-20">Quick Links</h3>
              <ul className="quick-link-box">
                <li>
                  <a href="/delivery-policy" title="Home">
                    Delivery Policy
                  </a>
                </li>
                <li>
                  <a href="/returns" title="Home">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/returns" title="Home">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-box-div">
              <h3 className="font-20">Contact Info</h3>
              <ul className="contact-items">
                <li className="contact-item">
                  <a
                    href="tel:9714859799"
                    className="contact-box"
                    target="_blank"
                  >
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="detail-box">
                      <p title="+91 63551 35078">+91 63551 35078</p>
                    </div>
                  </a>
                </li>
                <li className="contact-item">
                  <a
                    href="mailto:info@foresightpharma.in"
                    className="contact-box"
                    target="_blank"
                  >
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="detail-box">
                      <p title="info@tulsicuisine.in">info@tulsicuisine.in</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <h3 className="font-20">Social Media</h3>
              <ul className="social-media-icons">
                <li className="footer-link-item">
                  <a
                    href="https://www.facebook.com/"
                    title="Facebook"
                    target="_blank"
                  >
                    <div className="facebook-icon social-icon">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a
                    href="https://whatsapp.com/home"
                    target="_blank"
                    title="Whatsapp"
                  >
                    <div className="whatsapp-icon social-icon">
                      <i className="fab fa-whatsapp fa-lg"></i>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    title="Instagram"
                  >
                    <div className="instagram-icon social-icon">
                      <i className="fab fa-instagram fa-lg"></i>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    title="Youtube"
                  >
                    <div className="youtube-icon social-icon">
                      <i className="fab fa-youtube fa-lg"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copy-right-box font-14">
            {" "}
            Copyright © 2022 Tulsi Cuisine. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
