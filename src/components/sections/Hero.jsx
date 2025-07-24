import React from "react";
import hero_mp4 from "../../assets/videos/hero.mp4";
import styles from "../../styles/style";
import Partners from "./Partners";
import Whitebutton from "../Whitebutton";
import Banner from "../common/Banner";
import Header from "../common/Header";
function Hero() {
  return (
    <>
      
      <section className="">
        {/* <div className="relative w-full h-screen overflow-hidden sm:
    max-h-[560px] rounded-[16px]"> */}
        <div
          className="relative w-full h-[84vh]  sm:h-[80vh] md:h-screen overflow-hidden 
      sm:max-h-[750px] md:max-h-[845px]"
        >
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
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)",
            }}
          />
          <Banner/>
          <Header/>
          <div className="relative mt-12 mx-6 md:mt-[88px] sm:mt-12 container z-20 flex items-start justify-start flex-col h-full">
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="900"
              className={`${styles.heading1} max-w-[700px]  sm:mb-3 mb-1`}
            >
              Yields from the world’s top asset managers made accessible.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="900"
              className={`${styles.paragraph} tracking-[1.5px] !text-[#F7F9FC] max-w-[360px] sm:mb-14 mb-6`}
            >
              The smart gateway to institutional-grade, delta-neutral crypto
              yields.
            </p>
            <div className="">
              <Whitebutton />
            </div>
            <Partners />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
