import React from 'react'
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import Banner from '../components/common/Banner'

function Layout({children}) {
  return (
    <>
   
    <Banner/>
  <Header/>
   <main className='bg-[#F5F5F5]'>{children}</main>
   <Footer/>
   
   </>
  )
}

export default Layout