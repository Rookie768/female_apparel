import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import image1 from "../assets/10001.png"
import { Link } from 'react-router-dom';
function Navbar({length}) {
  return (
    <div className='flex relative flex-col w-full  bg-[#d25563]'>
        <Link to="/"><img src={image1} className='absolute sm:w-1/5 w-[80px] lg:-top-6 md:-top-4'/></Link>
        <div className='flex w-4/5 sm:w-3/5 sm:mx-auto ml-auto justify-between'>
            <div className="flex my-3 gap-4 sm:gap-8 text-white lg:text-lg md:text-base text-xs">
                <Link className="hover:underline" to="/">Home</Link>
                <Link className="hover:underline" to="/product">Shop</Link>
                <Link className="hover:underline" to="/addProduct">Add Product</Link>
                <Link className="hover:underline sm:block hidden" to="/cart">Cart</Link>
            </div>

            <div className='flex md:gap-5 gap-3 sm:mr-0 mr-4'>
                <Link className='hover:underline my-3 text-white lg:text-lg md:text-base text-xs' to="/login">Log In</Link>
                <Link className="relative" to="/cart">
                    <span className="absolute -right-1 md:text-xs text-[9px] top-1 animate-bounce bg-green-600 md:w-4 w-3 h-3 md:h-4 rounded-full justify-center flex text-white" style={length==0 ? {opacity:0}:{opacity:1}}>{length}</span>
                    <MdShoppingCart className='text-slate-200 my-3 md:size-6 size-4'/>
                </Link>
            </div>
        </div>
        <div className='w-3/5 mx-auto flex justify-center'>
            <input type='text' placeholder="    🔍  Search..." className='border-b-2 bg-slate-300 border-black md:w-1/3 w-1/2 rounded placeholder:text-black placeholder:text-xs md:h-10 sm:h-8 h-7'></input>
        </div>
    </div>
  )
}

export default Navbar
