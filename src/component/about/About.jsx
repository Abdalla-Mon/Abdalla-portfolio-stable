import { motion, useScroll, useTransform } from "framer-motion";
import { useContext } from "react";
import { RouteProvider } from "../../App";
export default function About() {
  let arr1 = [-60, -120, -220, -320, -420];
  let arr2 = [-20, 50, 120, 220, 320];
  let arr3 = [120, -50, -120, -170, -220];
  const { animation, state } = useContext(RouteProvider);

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={
        animation
          ? state === "left"
            ? { x: "100vw" }
            : { x: "-100vw" }
          : { scale: [0, 1] }
      }
      transition={{ duration: 0.5 }}
      className="about"
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
      <AboutText />
    </motion.section>
  );
}
function AboutText() {
  return (
    <div className="about-text">
      <div className="container mx-auto">
        <div className="about-me">
          <div className="about-box left">
            <AboutBox
              text={
                <>
                  <p>
                    I&apos;m a Frontend Web Developer building the Front-end of
                    Websites and Web Applications that leads to the success of
                    the overall product. Check out some of my work in the
                    Projects section.
                  </p>
                  <p>
                    I&apos;m open to Job opportunities where I can contribute,
                    learn and grow. If you have a good opportunity that matches
                    my skills then don&apos;t hesitate to contact me.
                  </p>
                </>
              }
              heading={"About me"}
            />
          </div>
          <div className="about-box right ">
            <AboutBox text={<Skills />} heading="Skills" />
          </div>
          <div className="about-box left">
            <AboutBox text={<Education />} heading="Education" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutBox({ classN, text, heading }) {
  return (
    <>
      <div>{text}</div>
      <h2>{heading}</h2>
    </>
  );
}
function Skills() {
  let skills = [
    "HTML",
    "CSS",
    "Scss",
    "Bootstrap",
    "Tailwind CSS",
    "MUI",
    "Javascript",
    "React",
    "React Redux",
  ];
  return (
    <>
      {skills.map((e) => (
        <div className="skill">{e}</div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <h4>Bachelor of Nursing</h4>
      <h5>2020 - 2025</h5>
      <p>I&apos;m a student in faculty of nursing cairo university.</p>
    </>
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
            available to work as freelancer or full-time.
          </p>
        </div>
      ) : null}
    </motion.h1>
  );
}
