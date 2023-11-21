'use client'
import Home from '@/Components/Home/Home'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const index = () => {
  const router = useRouter()
  // client side rendering route get
  useEffect(() => {
    if (router.pathname) {
      router.replace(window.location.pathname + window.location.search)
    }
}, [])
  return (
    <>
      <Home/>
    </>
  )
}

export default index
