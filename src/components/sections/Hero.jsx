import React from 'react'
import hero_mp4 from "../../assets/videos/hero.mp4"
import Button from "../Button"
import styles from '../../styles/style'
import Partners from './Partners'
function Hero() {
  return (
    <section className="container">
    <div className="relative w-full h-screen overflow-hidden max-h-[720px] rounded-[16px]">
    <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
  <source src={hero_mp4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div
    className="absolute inset-0 z-10"
    style={{
      background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)',
    }}
  />
  <div className="relative z-20 mt-[88px] mx-[88px] flex items-start justify-start flex-col h-full">
    <h1 className={`${styles.heading1} max-w-[700px] mb-3`}>Yields from the world’s top asset managers made accessible.</h1>
    <p className={`${styles.paragraph} !text-[#F7F9FC] max-w-[360px] mb-14`}>The smart gateway to institutional-grade, delta-neutral crypto yields.</p>
    <Button variant="white"/>
    <Partners/>
  </div>
    </div>

    </section>
  )
}

export default Hero