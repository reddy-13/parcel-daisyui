import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 * - Search Bar
 * - ResturantContainer
 * - - Resturant Crad
 * Footer
 *  -Copyright
 *  -link
 *  - Address
 *  - Contact
 * @returns
 */

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
