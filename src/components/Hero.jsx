import React from 'react'
import hero from "../assets/hero.png"
import banner from "../assets/Nautanky_banne.png"

function Hero() {
  return (
    <div>
      <div className="bg-[#CF6D28]">
        <img src={banner} className="w-3/5 mx-auto"></img>
      </div>
      <center className=" w-full relative py-8">
        <img src={hero} className="absolute w-1/5 bottom-0 left-0 lg:left-32 md:left-20"></img>
        <h1 className="font-normal sm:font-semibold sm:mb-4 mb-2 mx-auto">For the Bold, Stylish & Confident you</h1>
        <p className="sm:text-sm text-xs font-serif italic mx-auto w-2/3 lg:w-[500px] md:w-[420px] text-slate-600">"Our collection features a range of stylish and versatile outfits perfect for any casual occasion. From breezy kurtas to comfy palazzos, each piece is crafted with care and attention to detail. We use high-quality fabrics that are breathable and easy to care for, ensuring that you look and feel your best all day long."</p>
      </center>
    </div>
  )
}

export default Hero
