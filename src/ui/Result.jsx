import React from 'react'

export default function Result({num , text} ) {
  return (
    <h1 className='text-main-color font-extrabold text-5xl sm:text-7xl flex gap-6'>
        {num ? num : "_ _"}
        
        <p className='text-black  italic'> {text}</p>

    </h1>
  )
}
