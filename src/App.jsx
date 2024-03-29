import React from "react"
import Nav from "./components/navbar"
import Herosection from "./components/Hero"
import About from "./components/about"
import InfiniteMovingCardsDemo from "./components/services"
import Footers from "./components/footer"
import Reviews from "./components/review"
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
      }
    );
    AOS.refresh();
  },[])

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