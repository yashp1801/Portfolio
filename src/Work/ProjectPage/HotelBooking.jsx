import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import { motion, useIsPresent } from "framer-motion";
import "./ProjectPage.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import Img from "./ProjectImages/workImg2.png";
import Video2 from "./ProjectImages/workvid2.mkv";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";
import gsap from "gsap";
import Footer from "../../Components/Footer/Footer";
import LocalCoffeeShop from "./LocalCoffeeShop";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HotelBooking = () => {
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
              Hotel Booking
            </motion.h1>
          </motion.div>
          <motion.div
            className="project__discription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
          >
            Interactive website built with React js and CSS. Hotel booking helps
            you to find the best hotel for your next trip.
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
                href="https://reacthotelbooking.netlify.app/"
                target={"_blank"}
              >
                view live
              </a>
              <a
                href="https://github.com/yashp1801/hotelbooking"
                target={"_blank"}
              >
                View Code
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project__video__container">
          <video src={Video2} muted loop autoPlay></video>
        </div>
        <div className="project__summary">
          <h1>summary :</h1>
          <p>
            From the home page, you can enter the destination you want to go to,
            then set the date, and lastly, you can enter no. of people you are
            traveling with and how many rooms you want. After putting it
            according to your needs, you can search by clicking on the search
            button. By clicking the search button, you will redirect to the next
            page, where you can find the list of hotels. The data you will see
            on the page will be dummy data. I haven't connected to an API or
            database. You can check for information about the hotel by clicking
            on the "view deal " button. Throughout building this project, I
            learned about React Hooks, passing props, and how to work with react
            components.You can refer by looking at the video above.
          </p>
        </div>
        <div className="project__navigation">
          <div className="project__navigation__container">
            <div className="link">
              <Link to="/localcoffeeshop" className="project__navigation__link">
                <BsArrowLeftShort className="project__navigation__icon" />
                <span>Previous Project</span>
              </Link>
            </div>
            <div className="link">
              <Link to="/moviesprime" className="project__navigation__link ">
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

export default HotelBooking;
