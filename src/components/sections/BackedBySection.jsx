import React from "react";
import styles from "../../styles/style";
import spartan from "../../assets/icons/spartan.svg";
import pantera from "../../assets/icons/pantera.svg";
import sequola from "../../assets/icons/sequola.svg";
import starkware from "../../assets/icons/starkware.svg";
import Backedbysection from "../../assets/images/backedbysection.png"
import BackedbysectionMobile from "../../assets/images/backed-by-section-mobile-background.png"


 
function BackedBySection() {
  return (
    <section>
      <div className="line-container">
        <div className="border-x border-containerLine py-16 sm:py-12">
  <div
    className={`${styles.paddindX} bg-bgBlack rounded-[16px] py-[96px] bg-no-repeat bg-right hidden sm:block`}
    style={{ backgroundImage: `url(${Backedbysection})` }}
  >
    <h2 className={`${styles.darkheading3} mb-3`}>Backed by the best</h2>
    <p className={`${styles.darkparagraph} leading-normal sm:mb-14 mb-12`}>
      Multipli is building the future of high grade institutional yields.
    </p>
    <div className="flex sm:gap-14 gap-7 flex-wrap items-center justify-start">
      <img src={sequola} />
      <img src={spartan} />
      <img src={pantera} />
      <img src={starkware} />
    </div>
  </div>

  {/* Small screen version (image after text) */}
  <div className={`${styles.paddindX} bg-bgBlack rounded-[16px] pb-0 pt-[72px] sm:hidden`}>
    <h2 className={`${styles.darkheading3} mb-3`}>Backed by the best</h2>
    <p className={`${styles.darkparagraph} leading-normal mb-14`}>
      Multipli is building the future of high grade institutional yields.
    </p>
    <div className="flex gap-14 flex-wrap items-center justify-start mb-10">
      <img src={sequola} />
      <img src={spartan} />
      <img src={pantera} />
      <img src={starkware} />
    </div>
    {/* 👇 Image shown below the text only on small screens */}
    <img src={BackedbysectionMobile} alt="Backed By Illustration" className="w-full h-auto" />
  </div>
</div>

      </div>
    </section>
  );
}

export default BackedBySection;
