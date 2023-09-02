import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./scss/App.css";
import Home, { NavBar } from "./component/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
]);
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
