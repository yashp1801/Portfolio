import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Menu.css";

const Menu = () => {
  const [handleClick, setHandleClick] = useState(false);

  const handleOnClick = (e) => {
    if (handleClick === false) {
      setHandleClick(true);
    } else {
      setHandleClick(false);
    }
  };

  return (
    <motion.div
      className="menu"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="menu__toggle__btn">
        <BiMenu className="toggle__icon" onClick={handleOnClick} />
 
      </div>
      <div className={`menu__container ${handleClick ? "active" : ""}`}>
        <div>
          <Link to={"/"} className="menu__link">
            home{" "}
          </Link>
        </div>
        <div className="menu__links">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link to={"/about"} className="menu__link ">
              about{" "}
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link to={"/work"} className="menu__link">
              work{" "}
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to={"/resume"} className="menu__link ">
              resume
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
