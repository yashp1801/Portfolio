import React from "react";
import "./Resume.css";
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/Footer";
import Img from "./resumeImg.jpg";
import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";
import { RiMouseLine } from "react-icons/ri";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isPresent = useIsPresent();
  return (
    <div className="resume">
      <motion.div
        className="loader"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      />
      <Menu />
      <div className="resume__container">
        <div className="resume__title">
          <div className="title__wrapper">
            <motion.h1
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              lets get
            </motion.h1>
          </div>
          <div className="title__wrapper">
            <motion.h1
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              in touch
            </motion.h1>
          </div>
          <motion.div
            className="resume__icon__wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <RiMouseLine className="resume__icon" />
            <span>Scroll Down</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="resume__links"
        >
          <div className="link__wrapper">
            <span>email</span>
            <p>yash.p1810@gmail.com</p>
          </div>
          <div className="link__wrapper">
            <span>github</span>
            <a href="https://github.com/yashp1801">github.com/yashp1801</a>
          </div>
          <div className="link__wrapper">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/yashp18/">
              linkedin.com/in/yashp18/
            </a>
          </div>
        </motion.div>
        <div className="resume__form__container">
          <div className="form__wrapper">
            <div className="form__content">
              Take a minute and drop me a message, <br /> I'd love to hear from
              you.😊
            </div>
            <form
              className="resume__form"
              action="https://formsubmit.co/yashpatil4202@gmail.com"
              method="POST"
              autoComplete="off"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_next"
                value="https://reactthankspage.netlify.app/"
              ></input>
              <textarea
                placeholder="Enter your message here"
                rows="10"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="resume__image">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
