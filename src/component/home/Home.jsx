import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { RouteProvider } from "../../App";
import { useContext } from "react";
export default function Home() {
  const { animation, state } = useContext(RouteProvider);
  return (
    <motion.section className="home">
      <p className="hidden">abdalla abdelsabour portfolio</p>
      <p className="hidden">abdalla abdelsabour </p>
      <p className="hidden">عبدالله عبدالصبور </p>
      <p className="hidden">عبدالله </p>
      <p className="hidden">abdalla</p>
      <p className="hidden">abdalla portfolio</p>

      <div className="container mx-auto">
        <motion.div
          className="home-content"
          initial={
            state === "left"
              ? { scale: 0.5, x: "100vw" }
              : { scale: 0.5, x: "-100vw" }
          }
          animate={
            animation
              ? state === "left"
                ? { scale: [1, 0.5], x: "-100vw" }
                : { scale: [1, 0.5], x: "100vw" }
              : state === "left"
              ? { x: "0vw", scale: 1 }
              : { x: "0vw", scale: 1 }
          }
          transition={
            animation
              ? {
                  x: { duration: 0.5, delay: 0.5 },
                  scale: { duration: 0.5, delay: 0 },
                }
              : {
                  x: { duration: 0.5, delay: 0 },
                  scale: { duration: 0.5, delay: 0.5 },
                }
          }
        >
          <div className="text">
            <Text />
          </div>
          <div className="img-container">
            <div className="img-wrapper flex justify-center">
              <img
                src="./landing-imgs/port-img.png"
                alt="Abdalla Abdelsabour"
                width={"100%"}
                height={"100%"}
              />
              <img
                src="./landing-imgs/port-img.png"
                alt="عبدالله عبدالصبور"
                className="hidden"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
function Text() {
  return (
    <>
      <div className="h6">WELCOME TO MY WORLD</div>
      <h1 className="hidden">Abdalla Abdelsabour</h1>
      <h1 className="hidden">Abdalla</h1>
      <h1 className="hidden">عبدالله عبدالصبور</h1>
      <h1 className="hidden">عبدالله</h1>
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
      <a
        className="cv"
        href="https://drive.google.com/file/d/19jB4LhFHM2Zo0P0lyUIrmmBpHRwidRcZ/view"
        title="My cv "
      >
        Download My CV
      </a>
      <div className="flex gap-5 home-icons">
        <a
          className="face-icon "
          href="https://www.facebook.com/abdalla.abdalsabor/"
          title="My Facebook Profile"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a>
        <a
          className="linkedin-icon "
          href="https://www.linkedin.com/in/abdalla-abdelsabor-ba6983235/"
          title="My linkedin Profile"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />{" "}
        </a>
        <a
          className="github-icon "
          href="https://github.com/Abdalla-Mon"
          title="My github Profile"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
        </a>
      </div>
    </>
  );
}
