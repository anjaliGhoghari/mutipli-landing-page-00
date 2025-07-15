import React from "react";
import styles from "../../styles/style";
import graph from "../../assets/images/graph.png";

function GraphSection() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div
          className={`${styles.paddindX} ${styles.paddindY} border-x border-containerLine`}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <h2 className={`${styles.heading3} max-w-[426px]  mb-3`}>
                Risk Adjusted Daily Yield, xUSDC 12.13% APY
              </h2>
              <p className={`${styles.paragraph} max-w-[426px] mb-14`}>
                xTokens are the world’s first transferable tokens backed by top
                delta-neutral funds, earning daily yield and enabling secure
                DeFi staking for more returns.
              </p>
            </div>
            <div
              style={{
                background: `linear-gradient(0deg, #E1BAFF 0%, #E1BAFF 100%), url(${graph}) lightgray -0.571px 0px / 101.033% 100% no-repeat`,
                backgroundBlendMode: "color, normal",
                mixBlendMode: "hard-light",
              }}
            >
              <img src={graph} alt="Graph" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GraphSection;
