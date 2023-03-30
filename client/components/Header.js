import { React, useState } from "react";
import { Input } from "antd";
import Link from "next/link";
const Header = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const handleClick = () => {
    setHamburgerClick(!hamburgerClick);
  };

  return (
    <>
      <div className="navbar-main">
        {/* Overlay */}
        <div
          className={`overlay-appear ${hamburgerClick ? "active" : " "}`}
        ></div>
        <div className="container">
          <header>
            <div className="logo">
              <Link href="home">Tulsi</Link>
            </div>
            <div className="navbar-box">
              <div className="navbar-btn">
                <span
                  className={`hamburger-menu ${
                    hamburgerClick ? "changed" : ""
                  }`}
                  onClick={handleClick}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className={`navbar-list ${hamburgerClick ? "active" : " "}`}>
                <ul>
                  <li>
                    <a href="/food-gallery" title="Browse">
                      Browse
                    </a>
                  </li>
                  <li>
                    <a href="/sign-in" title="Sign In">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="/register" title="Register">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="/cart" title="Cart">
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
              <div className="search-bar">
                <Input placeholder="Search" />
                <div className="search-icon">
                  <img src="/assets/images/search-icon.png" alt="" srcSet="" />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
