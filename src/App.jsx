import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
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
export const RouteProvider = createContext(false);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Routes />}>
      <Route path="" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  ),
  {
    basename: window.location.host,
  }
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
      {loader ? <p>loading</p> : null}
      {!loader ? (
        <>
          <Navbar />
          {animation ? (
            <motion.div
              // animate={{ x: ["-100vw", "0vw"], scale: [1, 0] }}
              initial={state === "left" ? { left: 0 } : { right: 0 }}
              animate={{ width: ["0vw", "100vw"], scale: [1, 0] }}
              transition={{
                width: {
                  duration: 0.4,
                },
                scale: {
                  duration: 0.4,
                  delay: 0.4,
                },
              }}
              className="wrapper fixed"
            ></motion.div>
          ) : null}
          <Outlet />
          <Footer />
        </>
      ) : null}
    </RouteProvider.Provider>
  );
}

export default App;
