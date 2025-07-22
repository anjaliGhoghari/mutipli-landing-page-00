import React from "react";
import styles from "../../styles/style";
import card_1 from "../../assets/icons/card-1.svg";
import card_2 from "../../assets/icons/card-2.svg";
import card_3 from "../../assets/icons/card-3.svg";
import card_4 from "../../assets/icons/card-4.svg";
import logo_2_1 from "../../assets/icons/logo-2-1.svg";
import logo_2_2 from "../../assets/icons/logo-2-2.svg";
import logo_2_3 from "../../assets/icons/logo-2-3.svg";
import logo_3_1 from "../../assets/icons/logo-3-1.svg";
import logo_3_2 from "../../assets/icons/logo-3-2.svg";
import logo_4_1 from "../../assets/icons/logo-4-1.svg";
import logo_4_2 from "../../assets/icons/logo-4-2.svg";
import logo_4_3 from "../../assets/icons/logo-4-3.svg";

const cardDetail = [
  {
    title: "Best Risk Adjusted Yield in Market",
    description:
      "Targets a ~500-800 bps premium over U.S. Treasury yields on Stables, backed by overcollateralized assets, offering unmatched security in DeFi.",
    logo: card_1,
  },
  {
    title: "Extra Yield with No Additional Risk",
    description:
      "Tokenize your fund holdings with Multipli and deposit them via Multipli protected Defi protocols to earn extra yield, without taking on additional asset risk.",
    logo: card_2,
    companies: [
      { company: logo_2_1 },
      { company: logo_2_2 },
      { company: logo_2_3 },
    ],
  },
  {
    title: "One-Click Access",
    description:
      "Seamless entry into institutional-grade asset management, no minimums, no friction.",
    logo: card_3,
    companies: [{ company: logo_3_1 }, { company: logo_3_2 }],
  },
  {
    title: "Best in class Transparency and Audit",
    description:
      "Every strategy is both economically stress-tested and smart-contract audited.",
    logo: card_4,
    companies: [
      { company: logo_4_1 },
      { company: logo_4_2 },
      { company: logo_4_3 },
    ],
  },
];
function Features() {
  return (
    <section className="">
      <div className="line-container ">
        <div
          className={`${styles.paddindX} ${styles.paddindY} font-saans border-x border-containerLine`}
        >
          <h2 className={`${styles.heading3}  mb-3`}>
            Engineered to Protect. Designed to Perform.
          </h2>
          <p className={`${styles.paragraph} max-w-[903px] sm:mb-14 mb-6`}>
            We bring together the world’s top investment banks offering
            delta-neutral strategies into a single access point, making it easy
            to tap into institutional-grade returns through one seamless
            tokenized platform.
          </p>
          <div className="flex flex-wrap justify-between items-center ">
            {cardDetail.map((card) => (
              <div className="max-w-[465px] sm:max-w-[577px] sm:h-[322px] h-auto mb-4 bg-white hover:bg-bgBlack transition-all duration-500 sm:p-12 p-6 rounded-2xl group ">
                <div className="flex flex-shrink items-start flex-col justify-start">
                  <img src={card.logo} className="h-[32px] mb-4" />
                  <p className="text-2xl font-[380] mb-2 group-hover:text-white">
                    {card.title}
                  </p>
                  <p className="sm:text-base text-sm font-[380] leading-[140%]  text-black_50 group-hover:text-white/50">
                    {card.description}
                  </p>

                  {card.companies && card.companies.length > 0 ? (
                    <div className="sm:mt-[54px] mt-6 flex items-center justify-center gap-6">
                      {card.companies.map((item, idx) => (
                        <img
                          key={idx}
                          src={item.company}
                          alt=""
                          className="flex items-center"
                        />
                      ))}
                    </div>
                  ) : (
                    
                    <div className="flex gap-2 sm:mt-[39px] mt-6 justify-start items-center">
                    <div className="bg-[#FF8170] items-center text-[#1d1d1d] text-xs sm:text-base leading-[22.4px] font-[380] font-saans rounded-[96px] py-2 px-3 ">U.S APY-4%</div>
                    <span className="leading-[22.4px] font-[380] font-saans text-xs sm:text-base group-hover:text-white">VS</span>
                    <div className="bg-[#70FFDE] text-[#1d1d1d] text-xs sm:text-base leading-[22.4px font-[380] font-saans rounded-[96px] py-2 px-3 ">Multipli APY-12.19%</div>
                    </div>
                    
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
