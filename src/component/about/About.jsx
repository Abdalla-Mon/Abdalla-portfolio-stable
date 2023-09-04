import { motion } from "framer-motion";
import { useContext } from "react";
import { RouteProvider } from "../../App";
export default function About() {
  const { animation, setAnimation } = useContext(RouteProvider);

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={animation ? { x: "100vw" } : { scale: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h1>about</h1>
      <h2>about</h2>
      <h3>about</h3>
      <h4>about</h4>
      <h5>about</h5>
    </motion.section>
  );
}
