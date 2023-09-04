import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/router/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useState } from "react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Routes />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);
export const AppProvider = createContext();
function App() {
  // return <RouterProvider router={router} />;
  const [index, setIndex] = useState(0);
  const arr = [<Home />, <p>p</p>, <About />];
  return (
    <AppProvider.Provider value={{ index, setIndex }}>
      <Navbar />
      <AnimatePresence>{arr[index]}</AnimatePresence>;
    </AppProvider.Provider>
  );
}
function Routes() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
function About() {
  return (
    <motion.div
      initial={{ height: "0", overflow: "hidden" }}
      animate={{ height: [0, 200, 500] }}
      transition={{ duration: 0.5 }}
      exit={{ x: "100%" }}
      className="about  bg-slate-500"
    >
      <h1> About me</h1>
      <h1> About me</h1>
      <h1> About me</h1>
      <h1> About me</h1>
      <h1> About me</h1>
      <h1> About me</h1>
    </motion.div>
  );
}

export default App;
