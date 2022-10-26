import React from "react";
import "./About.css";
import { motion, useIsPresent } from "framer-motion";
import Menu from "../Components/Menu/Menu";
import data from "./SkillsData";
import Footer from "../Components/Footer/Footer";

const About = () => {
  const isPresent = useIsPresent();
  return (
    <>
      <motion.div className="about">
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

        <div className="about__container">
          <div className="about__content">
            <motion.div className="about__name">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Yash Patil
              </motion.h1>
            </motion.div>

            <motion.div className="about__self">
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Hi, I'm Yash, a self thaught web developer based in Mumbai,
                India. Currently pursuing a bachelor's degree focused in
                Computer Application from Shailendra Education Society's College
                of Arts Commerce and Science.
              </motion.h2>
              <motion.p
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                I think understanding the human experience is essential for
                creating useful and effective products that make life easier. I
                enjoy using my skill-set to empower people to accomplish their
                goals.
              </motion.p>
              <p>
                I am seeking an entry-level position to begin my career in a
                high-level professional environment.
              </p>
            </motion.div>
          </div>
          <div className="skills">
            <div className="skills__title">
              <h1>
                Tools & <br /> <span>Tech</span>
              </h1>
            </div>
            <div className="skills__main">
              <div className="skills__main__container">
                {data.map((item, i) => {
                  return (
                    <motion.div
                      className="skills__abilities"
                      initial={{ opacity: 0, y: "-100%" }}
                      whileInView={{ opacity: 1, y: "0" }}
                      transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                      <p>{item.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
