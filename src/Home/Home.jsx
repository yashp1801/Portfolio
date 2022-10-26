import React, { useState } from "react";
import "./Home.css";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import homedata from "./homedata";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

const Home = () => {
  const [handleMouse, setHouseHandle] = useState(false);
  const [handleMouse1, setHouseHandle1] = useState(false);
  const [handleMouse2, setHouseHandle2] = useState(false);
  const [handleToggle, setHandleToggle] = useState(false);
  const isPresent = useIsPresent();

  const [{ video, video1, video2 }] = homedata;

  const toggleMenu = (event) => {
    if (handleToggle === false) {
      setHandleToggle(true);
    } else {
      setHandleToggle(false);
    }
  };

  const handleMouseEnter = (e) => {
    setHouseHandle(true);
  };
  const handleMouseLeave = (e) => {
    setHouseHandle(false);
  };

  const handleMouseEnter1 = (e) => {
    setHouseHandle1(true);
  };
  const handleMouseLeave1 = (e) => {
    setHouseHandle1(false);
  };

  const handleMouseEnter2 = (e) => {
    setHouseHandle2(true);
  };
  const handleMouseLeave2 = (e) => {
    setHouseHandle2(false);
  };

  return (
    <div className="home">
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
      <div className="background__video">
        <video
          src={`.././images/${video2}`}
          autoPlay
          loop
          muted
          className={`homevideo ${handleMouse ? "active" : ""}`}
        ></video>
        <video
          src={`.././images/${video}`}
          autoPlay
          loop
          muted
          className={`homevideo1 ${handleMouse1 ? "active1" : ""}`}
        ></video>
        <video
          src={`.././images/${video1}`}
          autoPlay
          loop
          muted
          className={`homevideo1 ${handleMouse2 ? "active1" : ""}`}
        ></video>
      </div>
      <div className={`home__navbar ${handleToggle ? "toggle" : ""}`}>
        <div className="menu__toggle__btn">
          <div className="icon__wrapper">
            {/* <MdClose className="toggle__icon" /> */}
          </div>
        </div>
        <div className="menu__links">
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={"/about"} className="menu__link ">
              about{" "}
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <Link to={"/work"} className="menu__link">
              work{" "}
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <Link to={"/resume"} className="menu__link ">
              resume
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="home__container">
        <div className="home__content">
          <motion.div className="title">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, my name is yash
            </motion.h1>
          </motion.div>
          <motion.div className="title">
            {" "}
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              and I am a self-taught{" "}
            </motion.h1>
          </motion.div>
          <motion.div className="title">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {" "}
              web developer based{" "}
            </motion.h1>
          </motion.div>
          <motion.div className="title">
            {" "}
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              in Mumbai.{" "}
            </motion.h1>
            <BiMenu className="toggle__icon" onClick={toggleMenu} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
