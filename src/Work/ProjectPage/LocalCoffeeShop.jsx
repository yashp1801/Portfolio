import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import { motion } from "framer-motion";
import "./ProjectPage.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Img1 from "./ProjectImages/workImg1.png";
import Video1 from "./ProjectImages/workvid1.mp4";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const LocalCoffeeShop = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".project__img__container:after");

  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } }).to(
      imageReveal,
      1.4,
      {
        height: "0% ",
        ease: Power2.easeInOut,
      }
    );
    window.scrollTo(0, 0);
  });
  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Menu />
      <div className="project__container">
        <div className="project__img__container">
          <motion.div
            className="img__overlay"
            initial={{ y: 0 }}
            animate={{ y: -800 }}
            transition={{ duration: 1.2, ease: "linear" }}
          ></motion.div>
          <img src={Img1} alt="" ref={(el) => (container = el)} />
        </div>
        <div className="project__content">
          <motion.div className="project__title">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              Local Coffee shop
            </motion.h1>
          </motion.div>
          <motion.div
            className="project__discription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            Static website built with HTML, CSS and Javascript. I created this
            project to showcase my HTML and CSS skills and how efficient I am
            with responsive layouts.
          </motion.div>
          <motion.div
            className="project__link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            <span>Website</span>
            <div>
              <a href="https://localcoffeeshop.netlify.app/" target={"_blank"}>view live</a>
              <a href="https://github.com/yashp1801/localcoffeeshop"  target={"_blank"}>View Code</a>
            </div>
          </motion.div>
        </div>
        <div className="project__video__container">
          <video src={Video1} muted loop autoPlay></video>
        </div>
        <div className="project__summary">
          <h1>summary</h1>
          <p>
            This project focuses on HTML, CSS and responsive Layout. There is
            not much javascript used. This website has three sections you can
            navigate by clicking links in the navbar.
          </p>
        </div>
        <div className="project__navigation">
          <div className="project__navigation__container">
            <div className="link">
              <Link to="/reactnotes" className="project__navigation__link">
                <BsArrowLeftShort className="project__navigation__icon" />
                <span>Previous Project</span>
              </Link>
            </div>
            <div className="link">
              <Link to="/hotelbooking" className="project__navigation__link ">
                <span>Next Project</span>
                <BsArrowRightShort className="project__navigation__icon " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default LocalCoffeeShop;
