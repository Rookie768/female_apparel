import React from 'react'
import {FaStar, FaRegStar} from "react-icons/fa"
import CustomerReview from './CustomerReview'

export default function CustomerReviews() {

  let Reviews = [
    {
        id:1,
        name: "Krishant shah",
        star: 5,
        data : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia facere consequuntur voluptas ipsum tempora repudiandae culpa."
    },
    {
        id:2,
        name: "Kushal Kumar",
        star: 5,
        data : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolor inventore nesciunt fuga quis."
    },
    {
        id:3,
        name: "Sachin",
        star: 4,
        data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis autem labore obcaecati a officiis, omnis ea."
    },
    {
        id:4,
        name: "Om Tiwari",
        star: 5,
        data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi quod deleniti nam aut velit incidunt ad, totam sunt repellendus quo distinctio."
    }
  ]

  return (
    <center className='w-full my-6'>
      <p className='text-xl'>Customer Reviews</p>
      <div className='border-b-2 border-slate-500 my-2'></div>
      <div className='text-yellow-500 flex justify-center text-xl'>
        <FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/>
      </div>
      <div className='w-full my-8 flex flex-wrap gap-4 md:flex-nowrap justify-center'>
        {
            Reviews.map((review)=><CustomerReview key={review.id} review={review}/>)
        }
      </div>
    </center>
  )
}
