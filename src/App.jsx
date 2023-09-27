import {
  Outlet,
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/router/Navbar";
import About from "./component/about/About";
import { useEffect, useState } from "react";
import Portfolio from "./component/portfolio/Portfolio";
import { motion } from "framer-motion";
import { createContext } from "react";
import Contact from "./component/contact/Contact";
import Footer from "./component/router/Footer";
import Loader from "./component/Loader";
export const RouteProvider = createContext(false);
const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Routes />}>
      <Route path="" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
function Routes() {
  const [loader, setLoader] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState("left");
  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <RouteProvider.Provider
      value={{ animation, setAnimation, index, setIndex, setState, state }}
    >
      {loader ? <Loader /> : null}
      {!loader ? (
        <>
          <Navbar />
          <p className="hidden">abdalla abdelsabour portfolio</p>
          <Outlet />
          <Footer />
        </>
      ) : null}
    </RouteProvider.Provider>
  );
}

export default App;
