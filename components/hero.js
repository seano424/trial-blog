import React from 'react'

export default function Hero(props) {
  const bangs = '!'.repeat(props.bangs)
  return (
    <div className="pb-20 pt-10 pl-16 max-w-5xl m-auto">
      <h1 className="text-7xl uppercase font-bold m-auto text-red-500 pb-4">THERE'S ALWAYS MORE TO EXPLORE</h1>
      <p>A WORLD OF UNLIMITED STORYTELLING IS WAITING TO BE DISCOVERED {bangs}</p>
    </div>
  )
}

