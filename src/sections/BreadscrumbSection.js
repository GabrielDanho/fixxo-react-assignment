import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbSection = () => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Contacts</li>
        </ul>
      </div>
    </section>
  )
}

export default BreadcrumbSection;
