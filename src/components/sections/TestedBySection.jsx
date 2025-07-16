import React from "react";
import styles from "../../styles/style";
import trusted_background from "../../assets/images/trusted-background.png"


function TestedBySection() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div className="border-x border-containerLine py-12">
          <div
            className={`${styles.paddindX} bg-bgBlack rounded-[16px] py-[216px] bg-no-repeat `}
            style={{ backgroundImage: `url(${trusted_background})` }}
          >
            <h2 className={`${styles.darkheading3} text-[40px]  mb-3`}>
            Along with the best
            </h2>
            <p className={`${styles.darkparagraph} max-w-[426px]`}>
            Leading blockchain networks, top DeFi protocols, and institutional players support Multipli’s xTokens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestedBySection;
