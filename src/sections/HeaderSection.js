import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/placeholder-female-sitting.svg';
import img2 from '../images/placeholder-male-sitting.svg';

const HeaderSection = () => {
    return (
        <header className="__gradinent-gray">
        <nav className="__navbar container">
             <div className="__logo">
                 Fixxo.
             </div>
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
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span>
                     <i className="fa-regular fa-heart"></i>
                 </a>
                 <a href="#">
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span>
                     <i className="fa-regular fa-bag-shopping"></i>
                 </a>
             </div>
        </nav>
 
        <section className="__showcase container">
             <img src={img1} className="__img-left" alt="placeholder-female-sitting"/>
             <div className="__showcase-body">
                 <h1>SALE UP</h1>
                 <h1>To 50% Off</h1>
                 <p>Online shopping free home delivery over $100</p>
                 <a className="__btn-theme" href="#">
                     <span className="__btn-theme-left"></span>
                     SHOP NOW
                     <span className="__btn-theme-right"></span>
                 </a>
             </div>
             <img src={img2} className="__img-right" alt="placeholder-male-sitting"/>
        </section>
     </header> 
    )
}

export default HeaderSection