import React from 'react'
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import Banner from '../components/common/Banner'
import Hero from '../components/sections/Hero'

function Layout({children}) {
  return (
    <>
   
    
  <Hero/>
   <main className='bg-[#faf9f9]'>{children}</main>
   <Footer/>
   
   </>
  )
}

export default Layout