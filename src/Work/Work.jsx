import { useRef, useEffect } from "react";
import workData from "./WorkData";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import "./Work.css";
import Menu from "../Components/Menu/Menu";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const isPresent = useIsPresent();
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".work__card__image:after");

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
  });

  return (
    <motion.div className="work">
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

      <div className="work__container" ref={(el) => (container = el)}>
        <div className="work__title">
          <div className="work__title__wrapper">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Selected
            </motion.h1>
          </div>
          <div className="work__title__wrapper second">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9 }}
            >
              Projects 
            </motion.h1>
          </div>
        </div>
        {workData.map((items, i) => {
          return (
            <motion.div
              className="work__card"
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Link
                to={`/${items.projectLink}`}
                className="work__card__container"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="work__card__image"
                  ref={(el) => (image = el)}
                >
                  <motion.div
                    className="hoverOverlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ ease: "easeIn" }}
                  >
                    <h1>{items.hovertitle}</h1>
                  </motion.div>
                  <motion.img src={`.././images/${items.imgLink}`} alt="" />
                </motion.div>
                <div className="work__card__content">
                  <h1>{items.title}</h1>
                  <span>{items.subtitle}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Work;
