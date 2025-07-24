import React from 'react'
import Hero from '../components/sections/Hero'
import Scale from '../components/sections/Scale'
import Features from '../components/sections/Features'
import GraphSection from '../components/sections/GraphSection'
import TestedBySection from '../components/sections/TestedBySection'
import BackedBySection from '../components/sections/BackedBySection'
import Testimonial from '../components/sections/Testimonial'
import NewsAndInsights from '../components/sections/NewsAndInsights'
// import HighlightSections from '../components/sections/HighlightSections'
import HighlightLoaderSection from '../components/sections/HighlightLoaderSection'

function Home() {
  return (
   <>
    <HighlightLoaderSection/>
    {/* <HighlightSections/> */}
    <Scale/>
    <Features/>
    <GraphSection/>
    <TestedBySection/>
    <Testimonial/>
    <NewsAndInsights/>
    <BackedBySection/>
    
   
   </>
  )
}

export default Home