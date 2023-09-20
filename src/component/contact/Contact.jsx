import { useContext } from "react";
import { motion } from "framer-motion";
import { RouteProvider } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const { animation, state } = useContext(RouteProvider);
  return (
    <motion.section className="contact">
      <div className="container mx-auto">
        <motion.div
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
          className="contact-content flex gap-8 flex-col-reverse tab:flex-row"
        >
          <div className="left tab:w-3/6">
            <div className="contact-me">
              <h2>Contact me</h2>
              <div className="email">
                <h6>Email:</h6>
                <p>abdotlos60@gmail.com</p>
              </div>
              <div className="phone">
                <h6>Phone:</h6>
                <p>+20 11 273 425 64</p>
              </div>
            </div>
            <div className="send-message">
              <div className="flex gap-5 contact-icons">
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
                <a
                  className="whats-icon "
                  href="https://wa.me/+01127342564"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />{" "}
                </a>
              </div>
            </div>
            <div className="hire">
              <h2>Hire Me</h2>
              <div className="flex">
                <a
                  className="hire-link"
                  href="https://www.upwork.com/freelancers/~0150928ace1e88d577"
                >
                  Upwork
                </a>
                <a
                  className="hire-link mostaql"
                  href="https://mostaql.com/u/Abdallamy"
                >
                  Mostaql
                </a>
              </div>
            </div>
          </div>
          <div className="right tab:w-3/6">
            <div className="img-container">
              {/* <img src="./contact3.svg" alt="contact-us" /> */}
              <img src="./contact3.svg" alt="contact-us" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
