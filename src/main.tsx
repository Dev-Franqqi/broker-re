import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
];

const App = () => {
  const routeElement = useRoutes(routes);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={window.location.pathname}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
      >
        {routeElement}
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
