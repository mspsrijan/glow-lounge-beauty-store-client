import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Error from "../pages/Error";
import App from "../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Brand from "../pages/Brand";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import UpdateProduct from "../pages/UpdateProduct";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://brand-shop-server-sage-rho.vercel.app/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: () =>
          fetch("https://brand-shop-server-sage-rho.vercel.app/products/"),
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/brand/:id",
        element: <Brand></Brand>,
        loader: async ({ params }) => {
          const [bannersResponse, productsResponse] = await Promise.all([
            fetch(
              `https://brand-shop-server-sage-rho.vercel.app/brand/${params.id}/banners`
            ),
            fetch(
              `https://brand-shop-server-sage-rho.vercel.app/brand/${params.id}/products`
            ),
          ]);

          const bannersData = await bannersResponse.json();
          const productsData = await productsResponse.json();

          return { banners: bannersData, products: productsData };
        },
      },
      {
        path: "product/:id",
        element: (
          <PrivateRoutes>
            <Product></Product>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sage-rho.vercel.app/product/${params.id}`
          ),
      },

      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://brand-shop-server-sage-rho.vercel.app/brands"),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const [productResponse, brandsResponse] = await Promise.all([
            fetch(
              `https://brand-shop-server-sage-rho.vercel.app/product/${params.id}`
            ),
            fetch("https://brand-shop-server-sage-rho.vercel.app/brands"),
          ]);

          const productData = await productResponse.json();
          const brandssData = await brandsResponse.json();

          return { product: productData, brands: brandssData };
        },
      },

      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
