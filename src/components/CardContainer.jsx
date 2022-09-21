import React from 'react'

export default function CardContainer({children}) {

  return (
    <div className="flex flex-col gap-12 justify-center items-center
    lg:flex-row lg:items-start p-2">
        {children}
    </div>
  )
}
