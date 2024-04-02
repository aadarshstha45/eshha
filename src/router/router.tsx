import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
  {
    path: "/activities",
    element: <Home />,
  },
  {
    path: "/achievements",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
]);
