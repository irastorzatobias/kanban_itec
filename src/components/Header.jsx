import React from 'react'

export default function Header({title}) {
  return (
    <div>
      <h1 className="text-center text-2xl mb-3 bg-blue-500 p-3 font-black text-white uppercase">{title}</h1>
    </div>
  )
}
