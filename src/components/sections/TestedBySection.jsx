import React from "react";
import styles from "../../styles/style";


function TestedBySection() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div className="border-x border-containerLine py-12">
          <div
            className={`${styles.paddindX} bg-bgBlack rounded-[16px] py-[216px] `}
          >
            <h2 className={`${styles.darkheading3}  mb-3`}>
            Along with the best
            </h2>
            <p className={`${styles.darkparagraph} leading-normal max-w-[426px] mb-14`}>
            Leading blockchain networks, top DeFi protocols, and institutional players support Multipli’s xTokens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestedBySection;
