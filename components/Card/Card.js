import React from 'react'

export default function Card({ card }) {
   return (
      <div className='bg-white p-1 m-1 shadow-sm rounded-sm'>{card.content}</div>
   )
}
