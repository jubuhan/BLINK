import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home"
import Colorcube from "./components/colourcube/ColorCubeMain";
import ColorBlindnessMain from "./components/colourblindness/ColorBlindnessMain";
import VisualAcuityMain from "./components/visualacuity/VisualAcuityMain";
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
          path : '/colourblindesstest',
          element : <ColorBlindnessMain />
        },
        {
          path : '/colourcube',
          element : <Colorcube />
        },
        {
          path : '/visualacuitytest',
          element : <VisualAcuityMain />
        },
        
    ])

    return (
        <>
          <RouterProvider router={router} />
        </>
      
);
}
