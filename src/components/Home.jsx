import React from 'react'
import Hero from './Hero'
import Items from './Items'

export default function Home({items}) {
  return (
    <>
      <Hero/>
      <Items items={items}/>
    </>
  )
}
