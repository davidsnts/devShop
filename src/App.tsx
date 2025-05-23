import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Detail } from "./pages/product";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products/:id", element: <Detail /> },
    ],
  },
]);

export { router };
