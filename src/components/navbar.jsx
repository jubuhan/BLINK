import React from 'react'
import logonav from "../assets/img/logonav.png"
import Hamlogo from "../assets/img/hamburger.png"
import closelogo from "../assets/img/close.png"
import invitelogo from "../assets/img/invite.png"
import helplogo from "../assets/img/help.png"
import homelogo from "../assets/img/home.png"
import servicelogo from "../assets/img/services.png"
import aboutlogo from "../assets/img/about.png"

export default function navbar() {
  const[hamClick,setHamClick]=React.useState(false)


  return (
    <div className='bg-white duration-200 z-40 fixed w-full font-Raleway shadow-md'>
      <div className='py-4'>
        <div className='px-6 flex justify-between items-center gap-4'>
            <div className='flex justify-between items-center gap-4'>
                <div className='cursor-pointer block sm:hidden'>
                    <img onClick={()=>setHamClick(!hamClick)} className='w-6' src={Hamlogo} />
                </div>
                <img className='w-[70px] hover:opacity-80 hover:scale-105 duration-300' src={logonav} alt="logo" />
            </div>
            <div className='items-center text-black  text-md sm:text-xl hidden sm:block'>
                <ul className='flex justify-between gap-10'>
                  <li><a className=' hover:opacity-70' href='/'>Home</a></li>
                  <li><a className=' hover:opacity-70' href='#about'>About</a></li>
                  <li><a className=' hover:opacity-70' href='#services'>Services</a></li>
                  <li><a className=' hover:opacity-70' href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className='flex items-center justify-end'>
              <button className='w-[100px] text-white bg-black/95 rounded-xl px-3 py-2 hover:scale-105 transition duration-300 hover:shadow-lg hover:bg-white hover:text-black'>Login</button>
            </div>
        </div>
      </div>

      {hamClick && <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'>

      </div>}


      <div className={hamClick ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          <img onClick={()=>setHamClick(!hamClick)} className='absolute w-5 top-5 right-4 cursor-pointer' src={closelogo} alt="close" />
          <h2 className='text-2xl sm:text-4xl p-4 font-bold'>BLINK</h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={homelogo} alt="orders" />Home</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={servicelogo} alt="orders" />Services</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={aboutlogo} alt="orders" />About</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={helplogo} alt="orders" />Help</li>
              <li className='flex text-xl py-4 cursor-pointer'><img className='w-7 mr-4' src={invitelogo} alt="orders" />Invite Friends</li>
            </ul>
          </nav>
      </div>
    </div>
  )
}
