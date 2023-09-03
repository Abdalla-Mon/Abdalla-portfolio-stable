import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/router/Navbar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Routes />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
function Routes() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
