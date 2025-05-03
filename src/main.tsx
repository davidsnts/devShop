import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./context/cartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
