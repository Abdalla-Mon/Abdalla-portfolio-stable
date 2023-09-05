import { motion, useScroll, useTransform } from "framer-motion";
import { useContext } from "react";
import { RouteProvider } from "../../App";
export default function About() {
  let arr1 = [-60, -120, -220, -320, -420];
  let arr2 = [-20, 50, 120, 220, 320];
  let arr3 = [120, -50, -120, -170, -220];
  const { animation, setAnimation } = useContext(RouteProvider);

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={animation ? { x: "100vw" } : { scale: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-landing">
        <div className="about-container">
          <div className="head-border">
            <Heading value={arr1} head={"Frontend"} />
          </div>
          <div className="head-border">
            <Heading value={arr2} head={"React"} text={true} />
          </div>
          <Heading value={arr3} head={"Developer"} />
        </div>
      </div>
    </motion.section>
  );
}
function Heading({ head, text, value }) {
  const { scrollY } = useScroll();
  const marginLeft = useTransform(scrollY, [50, 200, 350, 450, 550], value);
  return (
    <motion.h1 style={{ marginLeft }} className={head}>
      <span>{head}</span>
      {text ? (
        <div>
          <p>
            Hello Iam
            <span>Abdalla Abdelsabour</span> a frontend developer currently
            available to work as freelancer or full-time. `
          </p>
        </div>
      ) : null}
    </motion.h1>
  );
}
