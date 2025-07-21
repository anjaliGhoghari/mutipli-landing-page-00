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
    "AlphaIQ™, our patented intelligence engine, dynamically allocates capital to top-performing funds using predictive analytics, maximizing yield and capital efficiency.",
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
    <section className="relative">
      <div className="line-container ">
        <div className="border-x border-containerLine sm:py-12 py-6">
          {/* <div className="space-y-12 h-[220vh] relative">
            {highlightcard.map((card, idx) => (
              <div
                key={idx}
                className={`${styles.paddindX} sticky top-[20%] bg-bgBlack rounded-[16px] sm:py-[250px] py-[52px] bg-no-repeat w-full`}
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <h2 className={`${styles.darkheading3} max-w-[493px]  mb-3`}>
                  {card.heading}
                </h2>
                <p
                  className={`${styles.darkparagraph} max-w-[480px] tracking-wide`}
                >
                  {card.content}
                <div className="w-full mt-9 block sm:hidden">
                  <img  src={card.backgroundImage}/>
                  </div>
                </p>
              </div>
            ))}
          </div> */}
          <div className="space-y-12 h-auto relative">
  {highlightcard.map((card, idx) => (
    <div
      key={idx}
      className={`
        ${styles.paddindX} 
        bg-bgBlack rounded-[16px] 
        bg-no-repeat w-full
        py-[52px] sm:py-[250px]
        sticky top-[15%] sm:top-[20%]
      `}
      style={{ backgroundImage: `url(${card.backgroundImage})` }}
    >
      <h2 className={`${styles.darkheading3} max-w-[493px] mb-3`}>
        {card.heading}
      </h2>

      <p className={`${styles.darkparagraph} max-w-[480px] tracking-wide`}>
        {card.content}
      </p>

      {/* 👇 Show image below content only on mobile */}
      <div className="w-full mt-9 block sm:hidden">
        <img
          src={card.backgroundImage}
          alt="Background visual"
          className="w-full h-auto rounded-[16px]"
        />
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}

export default HighlightSections;
