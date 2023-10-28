import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import App from "../App";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: "About",
      },
    ],
  },
]);

export default routes;
