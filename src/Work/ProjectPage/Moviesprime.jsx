import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import { motion, useIsPresent } from "framer-motion";
import "./ProjectPage.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Img from "./ProjectImages/workImg3.png";
import Video3 from "./ProjectImages/workvid3.mkv";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const MoviesPrime = () => {
  const isPresent = useIsPresent();
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".project__img__container:after");

  let tl = gsap.timeline();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } }).to(
      imageReveal,
      1.4,
      {
        height: "0% ",
        ease: Power2.easeInOut,
      }
    );
  });
  return (
    <motion.div className="project">
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        className="loader"
        style={{ originX: isPresent ? 0 : 1 }}
      />
      <Menu />
      <div className="project__container">
        <div className="project__img__container">
          <motion.div
            className="img__overlay"
            initial={{ y: 0 }}
            animate={{ y: -800 }}
            transition={{ duration: 1.2, ease: "linear" }}
          ></motion.div>
          <img src={Img} alt="" ref={(el) => (container = el)} />
        </div>
        <div className="project__content">
          <motion.div className="project__title">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
             Movies Prime
            </motion.h1>
          </motion.div>
          <motion.div
            className="project__discription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            Movies search application using react and SCSS. Search for any movie
            and gets its details and IMDB ratings.
          </motion.div>
          <motion.div
            className="project__link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            <span>Website</span>
            <div>
              {/* <a href="">view live</a> */}
              <a href="https://github.com/yashp1801/MoviesPrime">View Code</a>
            </div>
          </motion.div>
        </div>
        <div className="project__video__container">
          <video src={Video3} muted loop autoPlay></video>
        </div>
        <div className="project__summary">
          <h1>summary</h1>
          <p>
            Enter your favorite movie name from the home page in the input box.
            Results will appear after you type the correct movie name. You can
            look for more movie details by clicking on the poster movie. This
            app is built using react and scss, and I have used context API to
            handle all API-related data. Throughout building this project, I
            learned how to use and the advantages of context API.
          </p>
        </div>
        <div className="project__navigation">
          <div className="project__navigation__container">
            <div className="link">
              <Link to="/hotelbooking" className="project__navigation__link">
                <BsArrowLeftShort className="project__navigation__icon" />
                <span>Previous Project</span>
              </Link>
            </div>
            <div className="link">
              <Link to="/recipeapp"className="project__navigation__link ">
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

export default MoviesPrime;
