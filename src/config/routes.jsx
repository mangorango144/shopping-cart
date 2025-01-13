import { Products } from "../routes";
import { ShoppingCart } from "../routes";
import { Shop } from "../routes";
import { Home } from "../routes";
import { ErrorPage } from "../routes";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
];

export default routes;
