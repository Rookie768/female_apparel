import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import image2 from "../assets/10005.jpg";
import image3 from "../assets/10006.jpg";
import "./Product.css" 
import CustomerReviews from './CustomerReviews';

export default function Product({items, addToCart}) {
  
  let Navigate = useNavigate();
  let {productId}= useParams();
  let product = items.find((item)=> item.id==Number(productId))
  
  const [mainImage, setmainImage]= useState(product.image);
  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState("M");

  function handleSize(e){
    setsize(e.target.value)
  }
  
  return (
    <div className='bg-gradient-to-t from-pink-100 to-white'>
      <div className='lg:w-2/3 w-11/12 mx-auto flex flex-col gap-4 my-6'>
        <div className='flex justify-between z-10 md:text-xl sm:text-lg min-[500px]:text-base text-xs'>
          <span><Link to="/">Home</Link>\Product\{product.title}</span>
          <button onClick={()=>Navigate(-1)} className='underline text-indigo-600'>Go to Prev Page</button>  
        </div>
        <div className='flex w-full md:gap-6 flex-col md:flex-row'>
          <div className='md:w-1/2 w-2/3 mx-auto flex justify-between'>
            <div className='w-1/6 flex flex-col gap-4'>
              <img src={product.image} className='w-full hover:scale-105 duration-500' onClick={()=>setmainImage(product.image)}/>
              <img src={image2} className='w-full hover:scale-105 duration-500' onClick={()=>setmainImage(image2)}/>
              <img src={image3} className='w-full hover:scale-105 duration-500' onClick={()=>setmainImage(image3)}/>
            </div>
            <img src={mainImage} className='w-4/5'/>
          </div>
          <div className='md:w-1/2 w-full p-4 mx-auto'>
            <p className='text-xl sm:text-2xl md:text-4xl font-serif font-extralight'>{product.title}</p>
            <div className='border-slate-700 border-b-2'></div>
            <p className="sm:text-xl text-sm mt-4"><strike>₹{product.mrp}</strike></p>
            <center className="sm:text-2xl text-xl font-medium">₹{product.price}</center>
            <center className='text-sm'>Inclusive of all Taxes!</center>
            <center className='sm:my-8 my-4 radio-button'>
              <div className='text-2xl mb-4'>SIZE</div>
              <input type="radio" name="size" id="S" value="S" onChange={handleSize}/>
              <label htmlFor="S">S</label>
              <input type="radio"name="size" id="M" value="M" onChange={handleSize}/>
              <label htmlFor="M">M</label>
              <input type="radio" name="size" id="L" value="L" onChange={handleSize}/>
              <label htmlFor="L">L</label>
              <input type="radio" name="size" id="XL" value="XL" onChange={handleSize}/>
              <label htmlFor="XL">XL</label>
            </center>
            <div className='flex justify-around my-16'>
              <div className='w-1/4 bg-gray-200 border-2 border-gray-300 hover:border-gray-500 text-2xl flex justify-around my-auto'>
                <span className="cursor-pointer" onClick={()=>{if(quantity>0) setquantity(quantity-1)}}>-</span>
                <span>{quantity}</span>
                <span className='cursor-pointer' onClick={()=>setquantity(quantity+1)}>+</span>
              </div>
              <button className='bg-blue-400 w-1/2 p-2 border-2 hover:bg-black duration-500 hover:text-white border-black' onClick={()=>addToCart(productId, quantity, size)}>
                Add To Cart
              </button>
            </div>
            <div className='w-full'>
              <p className='text-lg'>Description</p>
              <div className='border-b-2 border-slate-400'></div>
              <p className='mt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit doloribus quod cum mollitia fugiat ipsam, minus molestias voluptatum aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <CustomerReviews/>
      </div>
    </div>
  )
}
