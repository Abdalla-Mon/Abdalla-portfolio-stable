import { useMotionValue, useTransform, motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  let arr1 = [0, -100, -250];
  let arr2 = [0, 100, 250];
  return <section>Hello from home</section>;
}
function Heading({ text, value }) {
  const { scrollY } = useScroll();
  const marginLeft = useTransform(scrollY, [-100, 100, 300], value);
  return <motion.h1 style={{ marginLeft }}>{text}</motion.h1>;
}

export function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}
