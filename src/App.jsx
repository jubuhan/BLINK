import React from "react"
import Nav from "./components/navbar"
import Herosection from "./components/Hero"
import About from "./components/about"
import InfiniteMovingCardsDemo from "./components/services"
import Footers from "./components/footer"
import Reviews from "./components/review"
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./components/Pop"

export default function App() {

  const [pop,setPop]=React.useState(false)

  const handleClick = () => {
    setPop(prev => !prev);
  }

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
      <Nav handleclick={handleClick} />
      <Herosection handleclick={handleClick}/>
      <About handleclick={handleClick} />
      <InfiniteMovingCardsDemo  handleclick={handleClick} />
      <Footers />
      <Login pop={pop} handleclick={handleClick} />
    </div>
  )
}