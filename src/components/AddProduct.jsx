import React from 'react'
import { Link } from 'react-router-dom';

export default function AddProduct({addProduct, setg}) {
  
  function handleSubmit(event){
        event.preventDefault();
        addProduct(event);
    }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
        <form className="max-w-md w-5/6 min-[400px]:w-2/3 p-6 bg-white shadow-lg rounded-md" onSubmit={handleSubmit}>
            <label htmlFor="id" className="block text-sm font-medium text-gray-600">Product Id</label>
            <input type="number" id="id" name="id" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">Product Title</label>
            <input type="text" id="title" name="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            <label htmlFor="mrp" className="block text-sm font-medium text-gray-600">MRP</label>
            <input type="number" id="mrp" name="mrp" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
            <input type="number" id="price" name="price" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            <label htmlFor='image' className="block text-sm font-medium text-gray-600">image</label>
            <input type="file" name='image' accept='image/*' className='mt-1 p-2 w-full border border-gray-300 rounded-md' onChange={(e) => setg(URL.createObjectURL(e.target.files[0]))} required></input>
            
            <button type="submit" className="w-full bg-indigo-500 text-white p-2 mt-2 rounded-md hover:bg-indigo-600">Add This Product</button>
            <Link to="/" className='underline text-green-800 mt-2 flex justify-center'>Go to HomePage</Link>
        </form>
      
      {/* <form className='my-20 ml-8 text-lg border border-black' onSubmit={handleSubmit}>
          
        <label htmlFor='id'>Product Id: </label>
        <input type='number' name='id' className='border-2 border-black mx-10' required></input><br/><br/>
        <label htmlFor='title'>Title: </label>
        <input type="text" name='title' className='border-2 border-black mx-10' required></input><br/><br/>
        <label htmlFor='image'>image: </label>
        <input type="file" name='image' accept='image/*' className='border-2 border-black mx-10' onChange={(e) => setg(URL.createObjectURL(e.target.files[0]))} required></input><br/><br/>
        <label htmlFor='mrp'>MRP: </label>
        <input type="number" name='mrp' className='border-2 border-black mx-10' required></input><br/><br/>
        <label htmlFor='price'>Price: </label>
        <input type="number" name='price' className='border-2 border-black mx-10' required></input><br/><br/>
        
        <button type="submit" value="submit" className="border-2 border-black mr-10 bg-blue-600 text-white rounded-md px-10 py-1">Submit</button>
        <button type="reset" value="reset" className="border-2 mb-4 border-black bg-gray-300 rounded-md px-4 py-1">Reset </button><br/>
        
        <Link to="/" className='underline text-green-800'>Go to HomePage</Link>
      </form> */}
    </div>
  )
}
