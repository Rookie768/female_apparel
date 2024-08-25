import React from 'react'
import Item from './Item';

function Items({items}) {
  return (
    <div className='w-full bg-gradient-to-r from-pink-200 via-pink-100 to-orange-300'>
        <div className='lg:w-3/4 w-full flex flex-wrap mx-auto justify-center'>
        {
            items.map((item)=>{
                return (
                    <Item key={item.id} item={item}></Item>
                )
            })
        }
        </div>
    </div>
  )
}

export default Items
