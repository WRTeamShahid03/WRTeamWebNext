import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <span> <span className='boldText'>CYBER WEEK SALE NOW LIVE:</span> Enjoy a <span className='boldText'> 50% FLAT </span> Discount on All Our Products!</span>
      <Link href='/cyber-week-sale/' target='_blank'><button >Get Offer <FaArrowRight /></button></Link>
    </div>
  )
}

export default TopHeader
