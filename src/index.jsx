import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"
import ColorCubeGame from "./components/ColorCubeGame";
import ColourBlindessTest from "./components/ColourBlindess";
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
        {
          path : '/colourcube',
          element : <ColorCubeGame />
        },
        {
          path : '/colourBlindessTest',
          element : <ColourBlindessTest />
        },
        
    ])

    return (
        <>
          <RouterProvider router={router} />
        </>
      
);
}
