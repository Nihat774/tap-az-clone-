import Link from 'next/link'
import React from 'react'
import Cart from '../ElanCart'

function Elanlar() {
  return (
    <section className='bg-[#f6f7fa] px-5'>
      <div className='flex justify-between w-full lg:p-[20px] pt-5 pb-5'>
        <p className='font-normal text-[14px] lg:font-semibold text-[#8d94ad]'>PREMIUM ELANLAR</p>
        <Link href="" className='underline'>Son elanlar</Link>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 '>
        <Cart />
      </div>
    </section>
  )
}

export default Elanlar
