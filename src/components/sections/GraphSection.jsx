import React from "react";
import styles from "../../styles/style";
import graph from "../../assets/images/graph.png";
import btn1 from "../../assets/icons/bitcoin.svg";
import btn2 from "../../assets/icons/usdc.svg";
import btn3 from "../../assets/icons/usdt.svg";

const buttons =[
  {
    id:1,
    logo:btn1,
    title:"xBTC",
  },
  {
    id:2,
    logo:btn2,
    title:"xUSDC",
  },
  {
    id:1,
    logo:btn3,
    title:"xUSDT",
  }
]


function GraphSection() {
  return (
    <section className="">
      <div className="line-container">
        <div
          className={`${styles.paddindX} ${styles.paddindY} border-x border-containerLine`}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex gap-2 mb-8 items-center">
                {buttons.map((btn,idx)=>(
                  <a id={idx} className="flex gap-2  hover:scale-110 transition-all duration-300 cursor-pointer bg-bgBlack text-white/90 py-2 pr-3 pl-2 rounded-[56px]" >
                    <img className="inline" src={btn.logo}/> {btn.title}
                  </a>
                ))}
              </div>
              <h2 className={`${styles.heading3} max-w-[426px] mb-3`}>
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
