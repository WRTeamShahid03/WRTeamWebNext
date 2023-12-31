import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <span> <span className='boldText'>Hurry Up! Only 1 Day Left: Year End Flash Sale Closing Soon!</span> Enjoy a <span className='boldText'> 50% FLAT </span> Discount on All Our Products!</span>
      <Link href='https://wrteam.in/year-end-flash-sale/' target='_blank'><button >Get Offer <FaArrowRight /></button></Link>
    </div>
  )
}

export default TopHeader
