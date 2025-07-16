import React from "react";
import styles from "../../styles/style";
import spartan from "../../assets/icons/spartan.svg";
import pantera from "../../assets/icons/pantera.svg";
import sequola from "../../assets/icons/sequola.svg";
import starkware from "../../assets/icons/starkware.svg";
import Backedbysection from "../../assets/images/backedbysection.png"


function BackedBySection() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div className="border-x border-containerLine py-12">
          <div
            className={`${styles.paddindX} bg-bgBlack rounded-[16px] py-[96px] bg-no-repeat bg-right `}
            style={{ backgroundImage: `url(${Backedbysection})` }}
          >
            <h2 className={`${styles.darkheading3}   mb-3`}>
              Backed by the best
            </h2>
            <p className={`${styles.darkparagraph} leading-normal mb-14`}>
              Multipli is building the future of high grade institutional
              yields.
            </p>
            <div className="flex gap-14 flex-wrap items-center justify-start">
            <img src={sequola}/>
            <img src={spartan}/>
            <img src={pantera}/>
            <img src={starkware}/>      
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default BackedBySection;
