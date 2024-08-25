import React from 'react'
import image1 from "../assets/10001.png"
import Contact from './Contact'
import StayInTouch from './StayInTouch'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-[#D35B68] w-full'>
        <div className="lg:w-4/5 w-full flex mx-auto justify-evenly">
            <div className='flex flex-col justify-between gap-8 w-1/3'>
                <div className='flex flex-col'>
                  <img src={image1} width={180}/>
                  <div className='flex py-2 gap-5'>
                    <BsInstagram className='ml-5 size-7 text-white'/>
                    <FaFacebook className='size-7 text-white'/>
                    <FaTwitter className='size-7 text-white'/>
                  </div>
                </div>
                <ul className='text-white flex flex-col underline'>
                    <a href='#'>About Us</a>
                    <a href='#'>Contact Us</a>
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Privacy Policy</a>
                </ul>
            </div>
            <div className='md:flex w-1/2 md:w-full'>
              <Contact></Contact>
              <StayInTouch></StayInTouch>
            </div>
        </div>
        <center className='py-6'>
          <p className='text-sm text-zinc-200'>©️ 2024, "Company Name". All Rights reserved</p>
        </center>
    </div>
  )
}
