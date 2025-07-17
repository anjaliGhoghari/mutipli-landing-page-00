import React from "react";
import styles from "../../styles/style";
import logo1 from "../../assets/icons/scrolllogo-1.svg";
import logo2 from "../../assets/icons/scrolllogo-2.svg";
import logo3 from "../../assets/icons/scrolllogo-3.svg";
import logo4 from "../../assets/icons/scrolllogo-4.svg";
import logo5 from "../../assets/icons/scrolllogo-5.svg";
import logo6 from "../../assets/icons/scrolllogo-6.svg";
import logo7 from "../../assets/icons/scrolllogo-7.svg";
import logo8 from "../../assets/icons/scrolllogo-8.svg";
import logo9 from "../../assets/icons/scrolllogo-9.svg";
import logo10 from "../../assets/icons/scrolllogo-10.svg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];
function TestedBySection() {
  return (
    <section className="">
      <div className="line-container">
        <div className="border-x border-containerLine">
          <div className={`${styles.paddindY} bg-bgBlack  rounded-[16px]`}>
            <div className={`${styles.paddindX}`}>
              <h2 className={`${styles.darkheading3} text-[40px]  mb-3`}>
                Along with the best
              </h2>
              <p className={`${styles.darkparagraph} max-w-[426px] mb-[87px]`}>
                Leading blockchain networks, top DeFi protocols, and
                institutional players support Multipli’s xTokens
              </p>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex w-max animate-scroll">
                {[...Array(100)].map((_, repeatIdx) =>
                  logos.map((logo, idx) => (
                    <img
                      key={`loop-${repeatIdx}-${idx}`}
                      src={logo}
                      className="mr-2 flex-shrink-0"
                      alt={`logo-${idx}`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestedBySection;
