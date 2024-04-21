import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"

export default function index() {
    const router = createBrowserRouter([
        {
          path : '/',
          element : <App />
        },
        {
          path : '/home',
          element : <Home />
        },
    ])

    return (
        <>
          <RouterProvider router={router} />
        </>
      
);
}
