import React from "react";
import styles from "../../styles/style";
import { Tooltip } from "antd";
import logo1 from "../../assets/icons/scrolllogo-1.svg";
import logo2 from "../../assets/icons/scrolllogo-2.svg";
import logo3 from "../../assets/icons/scrolllogo-3.svg";
import logo4 from "../../assets/icons/scrolllogo-4.svg";
import logo5 from "../../assets/icons/scrolllogo-5.svg";
import logo6 from "../../assets/icons/scrolllogo-6.svg";
import logo7 from "../../assets/icons/scrolllogo-7.svg";
import logo8 from "../../assets/icons/scrolllogo-8.svg";
import logo9 from "../../assets/icons/scrolllogo-9.svg";
import logo10 from "../../assets/icons/scrolllogo-10.svg";
const logos = [
  { src: logo1, tooltip: "Copper.co" },
  { src: logo2, tooltip: "Chiliz" },
  { src: logo3, tooltip: "Synthetix" },
  { src: logo4, tooltip: "Oasis" },
  { src: logo5, tooltip: "Celo" },
  { src: logo6, tooltip: "Arbitrum" },
  { src: logo7, tooltip: "Lens Protocol" },
  { src: logo8, tooltip: "Balancer" },
  { src: logo9, tooltip: "Zora" },
  { src: logo10, tooltip: "Ethereum" },
];
function TestedBySection() {
  return (
    <section className="">
      <div className="line-container">
        <div className="border-x border-containerLine py-16 sm:py-12">
          <div className={`md:py-[88px] sm:py-[72px] py-16 bg-bgBlack  rounded-[16px]`}>
            <div className={`${styles.paddindX}`}>
              <h2 className={`${styles.darkheading3} text-[40px]  mb-3`}>
                Along with the best
              </h2>
              <p className={`${styles.darkparagraph} max-w-[426px] mb-7 sm:mb-[87px]`}>
                Leading blockchain networks, top DeFi protocols, and
                institutional players support Multipli’s xTokens
              </p>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-scroll hover:paused">
                {[...Array(100)].map((_, repeatIdx) =>
                  logos.map((logo, idx) => (
                    <Tooltip
                      title={logo.tooltip}
                      placement="top"
                      overlayInnerStyle={{
                        fontSize: "14px",
                        borderRadius: "32px",
                        fontWeight:"500",
                        padding: "6px 12px",
                      }}
                    >
                      <img
                        key={`loop-${repeatIdx}-${idx}`}
                        src={logo.src}
                        className="mr-2 size-[88px] sm:size-auto flex-shrink-0"
                        alt={`logo-${idx}`}
                      />
                    </Tooltip>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestedBySection;
