import React from "react";
import { Link } from "react-router-dom";  

const NavSection = () => {
  return (
    <nav className="__navbar container">
      <div className="__logo">Fixxo.</div>
      <div className="__nav-links">
        <Link to="/">Home</Link>
        <Link to="#">Categories</Link>
        <Link to="#">Products</Link>
        <Link to="contacts">Contacts</Link>
      </div>
      <div className="__nav-icon-links">
        <a href="#">
          <i className="fa-regular fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-regular fa-repeat"></i>
        </a>
        <a href="#">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">
            1
          </span>
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href="#">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">
            3
          </span>
          <i className="fa-regular fa-bag-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavSection;
