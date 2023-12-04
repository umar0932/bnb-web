import React, { type PropsWithChildren } from 'react'

const CardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative rounded-lg bg-[#EFF8FF] px-8 py-12 shadow-md md:right-20'>
      {children}
    </div>
  )
}

export default CardLayout
