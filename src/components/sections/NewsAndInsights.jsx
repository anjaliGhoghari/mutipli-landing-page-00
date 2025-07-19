import React from "react";
import styles from "../../styles/style";
import { useState, useRef, useEffect } from "react";
import poster_1 from "../../assets/images/poster-1.png";
import poster_2 from "../../assets/images/poster-2.png";
import poster_3 from "../../assets/images/poster-3.png";

const press = [
  {
    poster: poster_1,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
  {
    poster: poster_2,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
  {
    poster: poster_3,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
];
const news = [
  {
    poster: poster_1,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
  {
    poster: poster_1,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
  {
    poster: poster_1,
    title: "Weekly Summary:July First Week",
    description:
      "Learn about Multipli's journey so far in 2025 and what is in store for the future - DeBank, WBTC and so on.",
  },
  
];
function NewsAndInsights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boxStyle, setBoxStyle] = useState({});
  const navRefs = useRef([]);
  useEffect(() => {
    const current = navRefs.current[activeIndex];
    if (current) {
      setBoxStyle({
        width: current.offsetWidth,
        left: current.offsetLeft,
      });
    }
  }, [activeIndex]);
  return (
    <section id="blogs" className="">
      <div className="line-container">
        <div
          className={`${styles.paddindX} ${styles.paddindY} border-x border-containerLine `}
        >
          <div className="flex justify-between items-center mb-12">
            <div className="relative">
              <div className="relative flex gap-4">
                {/* Sliding Box */}
                <div
                  className="absolute bottom-[0px] h-[2px] bg-[#A66CFF] transition-all duration-300"
                  style={{
                    width: `${boxStyle.width}px`,
                    left: `${boxStyle.left}px`,
                  }}
                ></div>
                {["Press", "News, insights"].map((item, index) => (
                  <a
                    key={index}
                    ref={(el) => (navRefs.current[index] = el)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 hidden lg:flex text-[24px] font-[570] cursor-pointer py-1 px-2 transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-black/90"
                        : "text-black/20 hover:text-bgBlack"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <a href="https://blog.multipli.fi/" className="text-white hover:text-black border hover:border-black border-white hover:bg-white transition-all duration-500 bg-[#1d1d1d] py-[6px] flex items-center px-4 leading-[20px]  rounded-[32px] tracking-[-0.16px] text-base font-[570] font-saans">
              View more
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-start font-saans gap-2">
            {activeIndex === 0 &&
              press.map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  data-aos-duration="700"
                  className="flex cursor-pointer flex-col"
                >
                  <div className="mb-5">
                    <img className="rounded-2xl" src={item.poster} />
                  </div>
                  <div className="flex justify-start items-start flex-col gap-2">
                    <p className="max-w-[225px] text-xl font-[380]">
                      {item.title}
                    </p>
                    <p className="max-w-[279px] tracking-[-0.12px] text-black/70 text-xs font-[380]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            {activeIndex === 1 &&
              news.map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  data-aos-duration="700"
                  className="flex cursor-pointer flex-col"
                >
                  <div className="mb-5">
                    <img className="rounded-2xl" src={item.poster} />
                  </div>
                  <div className="flex justify-start items-start flex-col gap-2">
                    <p className="max-w-[225px] text-xl font-[380]">
                      {item.title}
                    </p>
                    <p className="max-w-[279px] tracking-[-0.12px] text-black/70 text-xs font-[380]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsAndInsights;
