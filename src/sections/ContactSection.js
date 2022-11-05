import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <h2>Come in Contact with Us</h2>
        <form onSubmit="submitForm(event)" noValidate>
          <div>
            <input
              id="name"
              type="text"
              onKeyUp="validate(event)"
              placeholder="Your Name"
            />
            <div id="nameErrorMessage" className="errorMessage"></div>
          </div>
          <div>
            <input
              id="email"
              type="email"
              onKeyUp="validate(event)"
              placeholder="Your Mail"
            />
            <div id="emailErrorMessage" className="errorMessage"></div>
          </div>
          <div className="textarea">
            <textarea
              id="comment"
              onKeyUp="validate(event)"
              placeholder="Comments"
            ></textarea>
            <div id="commentErrorMessage" className="errorMessage"></div>
          </div>
          <div>
            <button type="submit" className="btn-theme">
              <span className="corner-topLeft"></span>
              <span className="corner-bottomRight"></span>
              Post Comments
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection;
