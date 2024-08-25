import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";

export default function Cartitem({item, deleteToCart}) {
  return (
    <div className='w-full flex gap-4 relative'>
      <Link className='w-1/4 hover:scale-105 duration-500' to={`/product/${item.id}`}>
        <img src={item.image}/>
      </Link>
      <div className='w-auto'>
        <p className='text-xl mb-2'>{item.title}</p>
        <p className='text-lg font-serif'>Size: <span className='font-bold'>{item.size}</span></p>
        <strike className="text-xs font-medium">₹{item.mrp}</strike>
        <span className='font-serif'>₹{item.price}</span>
        <p className='font-serif my-2'>Quantity:  <span>{item.quantity}</span></p>
        <p className='text-lg font-serif'>Total: <span>₹{item.price*item.quantity}</span></p>
        <MdDeleteForever className='text-red-600 size-7 absolute right-0 top-0' onClick={()=>deleteToCart(item.id, item.quantity, item.size)}/>
      </div>
    </div>
  )
}
