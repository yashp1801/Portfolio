import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import { motion } from "framer-motion";
import "./ProjectPage.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Img1 from "./ProjectImages/workImg5.png";
import Video5 from "./ProjectImages/workvid5.mkv";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const NotesApp = () => {
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
              React notes
            </motion.h1>
          </motion.div>
          <motion.div
            className="project__discription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            Notes application made using react
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
                href="https://yashp1801.github.io/Reactnotesapp/"
                target={"_blank"}
              >
                view live
              </a>
              <a
                href="https://github.com/yashp1801/Reactnotesapp"
                target={"_blank"}
              >
                View Code
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project__video__container">
          <video src={Video5} muted loop autoPlay></video>
        </div>
        <div className="project__summary">
          <h1>summary</h1>
          <p>
            Simple note application made using react. Add content in the blue
            note and click on add note to add your note. You can delete a note
            by clicking on the dustbin icon at the bottom right of the note. The
            notes are added to client-side local storage, So if you close the
            application and open it some other time, you'll get back all the
            notes. And if you have multiple notes and want a specific note, you
            can search for that note by typing a keyword or some content that
            you have entered. When you click on the add note button, the data
            inside the input box gets stored in a state and passed to the note
            list component via props which keep the data in local storage and
            display it. The search bar uses a filter method to find specific
            keywords from the notes list
          </p>
        </div>
        <div className="project__navigation">
          <div className="project__navigation__container">
            <div className="link">
              <Link to="/recipeapp" className="project__navigation__link">
                <BsArrowLeftShort className="project__navigation__icon" />
                <span>Previous Project</span>
              </Link>
            </div>
            <div className="link">
              <Link
                to="/localcoffeeshop"
                className="project__navigation__link "
              >
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

export default NotesApp;
