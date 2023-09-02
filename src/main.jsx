import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./scss/app.css";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./scss/App.css";
import Home, { NavBar } from "./component/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "normalize.css"; // Note this
import About from "./component/home/About.jsx";
library.add(fas, far, fab);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
