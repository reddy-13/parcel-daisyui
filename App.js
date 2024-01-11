import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
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
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
