import React from "react";
import styles from "../../styles/style";
import card_1 from "../../assets/icons/card-1.svg";
import card_2 from "../../assets/icons/card-2.svg";
import card_3 from "../../assets/icons/card-3.png";
import card_4 from "../../assets/icons/card-4.svg";
import edgecapital_gray from "../../assets/icons/edgecapital_gray.svg";
import Nomura_gray from "../../assets/icons/Nomura_gray.svg";
import spartan_gray from "../../assets/icons/spartan_gray.svg";
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
  },
  {
    title: "One-Click Access",
    description:
      "Seamless entry into institutional-grade asset management, no minimums, no friction.",
    logo: card_3,
  },
  {
    title: "Best in class Transparency and Audit",
    description:"Every strategy is both economically stress-tested and smart-contract audited.",
    logo: card_4,
  },
];
function Features() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div
          className={`${styles.paddindX} ${styles.paddindY} border-x border-containerLine`}
        >
          <h2 className={`${styles.heading3}  mb-3`}>
            Engineered to Protect. Designed to Perform.
          </h2>
          <p className={`${styles.paragraph} max-w-[903px] mb-14`}>
            We bring together the world’s top investment banks offering
            delta-neutral strategies into a single access point, making it easy
            to tap into institutional-grade returns through one seamless
            tokenized platform.
          </p>
          <div className="flex flex-wrap justify-between items-center ">
          {cardDetail.map((card) => (
            <div className="w-[577px] mb-4 bg-white hover:bg-bgBlack transition-all duration-500  p-12 rounded-2xl group ">
              <div className="flex items-start flex-col justify-start">
                <img src={card.logo} className="h-[32px] mb-4" />
                <p className="text-2xl mb-2 group-hover:text-white">
                  {card.title}
                </p>
                <p className="text-base text-black_50 group-hover:text-white/50">
                  {card.description}
                </p>
                <div className=" mt-16 flex gap-6">
                  <img className="w-[68px]" src={edgecapital_gray} />
                  <img className="w-[68px]" src={spartan_gray} />
                  <img className="w-[68px]" src={Nomura_gray} />
                </div>
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
