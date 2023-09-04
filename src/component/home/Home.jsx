import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useMotionValue,
  useTransform,
  motion,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <AnimatePresence>
      <motion.section
        className="home"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100%" }}
      >
        <div className="container mx-auto">
          <div className="home-content">
            <div className="text">
              <Text />
            </div>
            <div className="img-container">
              <div className="img-wrapper flex justify-center">
                <img src="./landing-imgs/port-img.png" alt="Abdalla's photo" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
function Text() {
  return (
    <>
      <h6>WELCOME TO MY WORLD</h6>
      <h1>
        Hi, I’m <span className="colored">Abdalla Abdelsabour a </span>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "Frontend Developer...", // initially rendered starting point
            1000,
            `React Developer.`,
          ]}
          style={{ whiteSpace: " pre-line" }}
          speed={50}
          deletionSpeed={50}
          repeat={Infinity}
        />
      </h1>
      <p>
        Junior front-end developer available for freelance and corporate work
      </p>
      <div className="flex gap-5 home-icons">
        <a
          className="face-icon "
          href="https://www.facebook.com/abdalla.abdalsabor/"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a>
        <a
          className="linkedin-icon "
          href="https://www.linkedin.com/in/abdalla-abdelsabor-ba6983235/"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />{" "}
        </a>
        <a className="github-icon " href="https://github.com/Abdalla-Mon">
          <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
        </a>
      </div>
    </>
  );
}
function Heading({ text, value }) {
  let arr1 = [0, -100, -250];
  let arr2 = [0, 100, 250];
  const { scrollY } = useScroll();
  const marginLeft = useTransform(scrollY, [-100, 100, 300], value);
  return <motion.h1 style={{ marginLeft }}>{text}</motion.h1>;
}
