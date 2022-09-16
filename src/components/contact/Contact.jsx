import React, { useContext, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/Context";

const Contact = () => {
  const formRef = useRef();
  const [emailSubmitDone, setEmailSubmitDon] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const submitHandle = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ob41ej",
        "template_ktk058t",
        formRef.current,
        "6mMIX1jrlhOFfuPmE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSubmitDon(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lets discuss your projects</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="Phone" className="contact-icon" />
              +977-9819041679
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="addess" className="contact-icon" />
              bipin67678grg@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="address" className="contact-icon" />
              Kathmandu Nepal
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-disc">
            <b>What's your story.?</b>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi,
            nemo magnam vel maiores accusantium dolorum impedit illum sunt
            debitis culpa natus placeat sed est dicta quae nesciunt distinctio
            nihil.
          </p>
          <form onSubmit={submitHandle} ref={formRef}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subjects"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="massege"
              id=""
              col="30"
              rows="5"
              placeholder="Massege"
            ></textarea>
            <button>Submit</button>
            {emailSubmitDone && "Thank you..!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
