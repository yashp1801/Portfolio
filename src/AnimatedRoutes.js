import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Work from "./Work/Work";
import LocalCoffeeShop from "./Work/ProjectPage/LocalCoffeeShop";
import HotelBooking from "./Work/ProjectPage/HotelBooking";
import { AnimatePresence } from "framer-motion";
import Resume from "./Resume/Resume";
import RecipeApp from "./Work/ProjectPage/RecipeApp";
import MoviesPrime from "./Work/ProjectPage/Moviesprime";
import NotesApp from "./Work/ProjectPage/NotesApp";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/localcoffeeshop" element={<LocalCoffeeShop />} />
        <Route path="/hotelbooking" element={<HotelBooking />} />
        <Route path="/recipeapp" element={<RecipeApp />} />
        <Route path="/moviesprime" element={<MoviesPrime />} />
        <Route path="/reactnotes" element={<NotesApp />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
