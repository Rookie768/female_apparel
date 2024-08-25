import React, { useState } from 'react'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Cart({cart, deleteToCart}) {
  
  let totalMRP = 0, totalPrice= 0, delCharges=99;

  const [discount, setdiscount] = useState(0);
  const [coupan, setcoupan] = useState("")

  cart.map((item)=> {
    totalMRP+=item.mrp*item.quantity
    totalPrice += item.price*item.quantity
  });

  function handleCoupanCode(){
    if(coupan=="kundan10"){
      setdiscount(parseInt(totalPrice*0.1))
      toast.success("Coupan Code Applied!")
    }
    else if(coupan=="birla20" || coupan=="harikesh20" || coupan=="mishra20"){
      setdiscount(parseInt(totalPrice*0.2))
      toast.success("Coupan Code Applied!")
    }
    else if(coupan=="om50"){
      setdiscount(parseInt(totalPrice*0.5))
      toast.success("Coupan Code Applied!")
    }
    else
      toast.error("Wrong Coupan Code!")
    setcoupan("")
  }

  return (
    <div className='lg:w-3/4 w-full mx-auto my-10 px-4'>
      <p className='text-4xl mb-2 font-serif font-extralight'>Shopping Cart</p>
      <div className='border-b-2 border-slate-600'></div>
      {
        cart.length==0 ? 
          <center>
            <div className='mt-10 text-2xl'> Cart is Empty</div>
            <Link to="/" className='font-serif text-center text-[#12ccb3] underline' >Start Shopping</Link>
          </center>
              :
          <div className='w-full flex justify-between sm:flex-row flex-col'>
            <div className='sm:w-7/12 w-full flex my-6 flex-col gap-4'>
              {
                  cart.map((item)=><Cartitem key={item.id} item={item} deleteToCart={deleteToCart}/>)
              }
            </div>
            <div className='sm:w-1/3 w-2/3 my-6 mx-auto flex flex-col gap-3'><hr/>
              <p className='flex justify-between'><span>SubTotal:</span><span>₹{totalMRP}</span></p>
              <p className='flex justify-between'><span>Product Discount:</span><span>₹{totalMRP-totalPrice}</span></p>
              <p className='flex justify-between'><span>Coupan Discount:</span><span>₹{discount}</span></p>
              <p className='flex justify-between'><span>Delievery Charges:</span><span>₹{delCharges}</span></p><hr/>
              <p className='flex justify-between font-semibold'><span>Total:</span><span>₹{totalPrice+delCharges-discount}</span></p><hr/>
              <div className='w-full flex gap-2 justify-between items-center'>
                <input type='text' className='mt-2 w-1/2 h-full rounded-xl border-gray-400 border-2 placeholder:text-sm placeholder:text-center' placeholder='Enter Code' value={coupan} onChange={(e)=>setcoupan(e.target.value)}></input>
                <button className='text-xs h-full w-1/2 border-slate-800 border-2 bg-[#34a2ff] mt-1 py-1 rounded-md' onClick={handleCoupanCode}>Apply Coupan</button>
              </div>

              <button className='text-center mt-8 bg-black text-white py-2 rounded-xl' onClick={()=>toast.success("Order Successfull!")}>CheckOut</button>
              <Link to="/" className='font-serif text-center text-[#3452ff] underline text-lg' >Continue Shopping</Link>
            </div>
          </div>
      }
    </div>
  )
}
