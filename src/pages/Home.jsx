import React from 'react'
import Hero from '../components/sections/Hero'
import Scale from '../components/sections/Scale'
import Features from '../components/sections/Features'
import GraphSection from '../components/sections/GraphSection'
import TestedBySection from '../components/sections/TestedBySection'
import BackedBySection from '../components/sections/BackedBySection'
import Testimonial from '../components/sections/Testimonial'

function Home() {
  return (
   <>
    <Hero/>
    <Scale/>
    <Features/>
    <GraphSection/>
    <TestedBySection/>
    <Testimonial/>
    <BackedBySection/>
   </>
  )
}

export default Home