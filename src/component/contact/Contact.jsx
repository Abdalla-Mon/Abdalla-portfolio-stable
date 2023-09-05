import { useContext } from "react";
import { motion } from "framer-motion";
import { RouteProvider } from "../../App";

export default function Contact() {
  const { animation, state } = useContext(RouteProvider);
  return (
    <motion.section
      className="contact"
      initial={{ scale: 0 }}
      animate={
        animation
          ? state === "left"
            ? { x: "100vw" }
            : { x: "-100vw" }
          : { scale: [0, 1] }
      }
      transition={{ duration: 0.5 }}
    ></motion.section>
  );
}
