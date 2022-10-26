import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import { motion, useIsPresent } from "framer-motion";
import "./ProjectPage.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Img from "./ProjectImages/workImg4.png";
import Video4 from "./ProjectImages/workvid4.mkv";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const RecipeApp = () => {
  const isPresent = useIsPresent();
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".project__img__container:after");

  useEffect(() => {
    window.scrollTo(0, 0);
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
              Recipe App
            </motion.h1>
          </motion.div>
          <motion.div
            className="project__discription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            Simple recipe application made using react and CSS. Get recipes
            related to your favorite ingredients.
          </motion.div>
          <motion.div
            className="project__link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            <span>Website</span>
            <div>
              <a
                href="https://yashp1801.github.io/recipeapp/"
                target={"_blank"}
              >
                view live
              </a>
              <a
                href="https://github.com/yashp1801/recipeapp"
                target={"_blank"}
              >
                View Code
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project__video__container">
          <video src={Video4} muted loop autoPlay></video>
        </div>
        <div className="project__summary">
          <h1>summary</h1>
          <p>
            Basic recipe application made with react and CSS. On the home page,
            enter the ingredient name you want to search for related recipes and
            click on the search icon. You will get the list of recipes based on
            the ingredient you entered. The entered ingredient value is stored
            in state and then passed to API, through which API gets called.
            Throughout this project, I learned how to call API, handle API data,
            store data in state and display data using the map method.
          </p>
        </div>
        <div className="project__navigation">
          <div className="project__navigation__container">
            <div className="link">
              <Link to="/moviesprime" className="project__navigation__link">
                <BsArrowLeftShort className="project__navigation__icon" />
                <span>Previous Project</span>
              </Link>
            </div>
            <div className="link">
              <Link to="/reactnotes" className="project__navigation__link ">
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

export default RecipeApp;
