import React from "react"
import Nav from "./components/navbar"
import Herosection from "./components/Hero"
import About from "./components/about"
import InfiniteMovingCardsDemo from "./components/services"
import Footers from "./components/footer"
import Reviews from "./components/review"

export default function App() {
  return (
    <div>
      <Nav />
      <Herosection />
      <About />
      <InfiniteMovingCardsDemo />
      <Footers />
    </div>
  )
}