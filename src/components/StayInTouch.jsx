import React from 'react'

function StayInTouch() {
  return (
    <div className='flex flex-col gap-4 text-white mt-6'>
      <p className='font-bold mx-auto'>Keep Up to Date</p>

      <div className='flex gap-2'>
        <div className='flex flex-col gap-2 w-5/12'>
            <input type='text' placeholder='    Name' className="bg-transparent border-white border-2 placeholder:text-white"></input>
            <input type='text' placeholder='    Email' className="bg-transparent border-white border-2 placeholder:text-white"></input>
            <input type='text' placeholder='    Phone' className="bg-transparent border-white border-2 placeholder:text-white"></input>
        </div>
        <input type='text' placeholder='Message for us...' className="w-1/2 bg-transparent border-white border-2 placeholder:text-white placeholder:text-center placeholder:text-xs"></input>   
      </div>
        
      <button value="Submit" className="bg-white rounded-md w-fit text-black text-center">Subscribe</button>
      
    </div>
  )
}

export default StayInTouch
