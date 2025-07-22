import React from "react";
import styles from "../../styles/style";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Scale() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <>
      <section ref={ref} className="">
        <div className="line-container ">
          <div className="border-x border-containerLine py-16 sm:py-12">
          <div className={`${styles.paddindX} bg-bgBlack rounded-[16px] py-16 md:py-20 sm:py-18 `}>
              <h2 className={`${styles.darkheading3}  mb-3`}>
                Built for stability. Designed for scale. Open to all.
              </h2>
              <p
                className={`${styles.darkparagraph} mb-14`}
              >
                Multipli is building the future of high grade institutional
                yields.
              </p>
              <div className="flex justify-between items-center flex-wrap">
                <div
                  data-aos="zoom-in"
                  className=" flex items-start flex-col m-5 sm:m-0"
                >
                  {startCount ? (
                    <CountUp
                      end={10}
                      duration={10}
                      className={`${styles.darkheading1} mb-3`}
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white mb-3">
                      0
                    </span>
                  )}
                  <p className={`${styles.darkparagraph}`}>Supported chains</p>
                </div>
                <div
                  data-aos="zoom-in"
                  className=" flex items-start flex-col m-5 sm:m-0"
                >
                  {startCount ? (
                    <CountUp
                      end={80}
                      duration={10}
                      className={`${styles.darkheading1} mb-3`}
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white mb-3">
                      0
                    </span>
                  )}
                  <p className={`${styles.darkparagraph}`}>Partners</p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="flex items-start flex-col m-5 sm:m-0"
                >
                  {startCount ? (
                    <CountUp
                      end={12.56}
                      duration={10}
                      decimals={2}
                      suffix="%"
                      className={`${styles.darkheading1} mb-3`}
                    />
                  ) : (
                    <div className="flex items-baseline mb-3">
                      <span className="text-5xl font-bold text-white mb-3">
                        0
                      </span>
                    </div>
                  )}
                  <p className={`${styles.darkparagraph}`}>Average 7D APY</p>
                </div>

                <div
                  data-aos="zoom-in"
                  className="flex items-start flex-col m-5 md:m-0"
                >
                  {startCount ? (
                    <CountUp
                      end={100}
                      duration={10}
                      prefix="$"
                      suffix="M"
                      className={`${styles.darkheading1} mb-3`}
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white mb-3">
                      $0M
                    </span>
                  )}
                  <p className={`${styles.darkparagraph}`}>
                    Total value locked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scale;
