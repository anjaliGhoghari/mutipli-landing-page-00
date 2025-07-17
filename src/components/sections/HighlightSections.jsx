import React from "react";
import styles from "../../styles/style";
import highlight_1 from "../../assets/icons/highlight-1.svg";
import highlight_2 from "../../assets/icons/highlight-2.svg";
import highlight_3 from "../../assets/icons/highlight-3.svg";
const highlightcard = [
  {
    id: 1,
    backgroundImage: highlight_1,
    heading: " Institutional Grade Asset Management",
    content:
      "Earn reliable, high quality yield backed by the largest and safest delta-neutral funds in crypto. Built with institutional-grade transparency.",
  },
  {
    id: 1,
    backgroundImage: highlight_2,
    heading: "Proprietary Predictive Engine for Smart Fund Allocation",
    content:
      "Earn reliable, high quality yield backed by the largest and safest delta-neutral funds in crypto. Built with institutional-grade transparency.",
  },
  {
    id: 1,
    backgroundImage: highlight_3,
    heading: "Borrow, Lend & Instantly Redeem  through Tokenization",
    content:
      "The First Protocol for Aggregation and Tokenization of Liquid Delta-Neutral Funds. Seamlessly tokenize your deployed capital and unlock additional on-chain yield through integrated DeFi strategies.",
  },
];
function HighlightSections() {
  return (
    <section className="relative border-b border-containerLine ">
      <div className="container ">
        <div className="border-x border-containerLine py-12">
          <div className="space-y-10 h-[210vh] relative">
            {highlightcard.map((card, idx) => (
              <div
                key={idx}
                className={`${styles.paddindX} sticky top-[15%] bg-bgBlack rounded-[16px] py-[225px] bg-no-repeat w-full`}
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <h2 className={`${styles.darkheading3} max-w-[493px]  mb-3`}>
                  {card.heading}
                </h2>
                <p
                  className={`${styles.darkparagraph} max-w-[493px] tracking-wide mb-14`}
                >
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightSections;
