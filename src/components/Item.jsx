import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Item({item}) {
  return (
    <Link className='sm:w-[200px] w-[130px] m-4 hover:scale-105 duration-700' to={`/product/${item.id}`}>
        <img src={item.image} className='mb-4 sm:h-[300px] h-[195px] w-full'></img>
        <p>{item.title}</p>
        <div className="text-yellow-400 flex">
          <FaStar/><FaStar/><FaStar/> <FaRegStar/><FaRegStar/>
        </div>
        <div className='mt-1'>
          <strike className="font-medium">₹{item.mrp}</strike>
          <span className="ml-2 font-semibold">₹{item.price}</span>
        </div>
    </Link>
  )}
