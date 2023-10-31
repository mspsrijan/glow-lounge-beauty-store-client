import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";
import App from "../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Brand from "../pages/Brand";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/brand/:id",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.id}/banners`),
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/brands"),
      },
    ],
  },
]);

export default routes;
