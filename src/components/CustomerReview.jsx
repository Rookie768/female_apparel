import React from 'react'
import {FaStar} from "react-icons/fa"

export default function CustomerReview({review}) {
  return (
    <div className='border-slate-300 rounded-xl border-2 md:w-1/4 w-[40vw]'>
      <p>{review.name}</p>
      <p className='text-yellow-500 flex justify-center'><FaStar/>{review.star}</p>
      <p className="text-xs text-left m-2">{review.data}</p>
    </div>
  )
}
