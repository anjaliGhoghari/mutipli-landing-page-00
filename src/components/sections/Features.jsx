import React from "react";
import styles from "../../styles/style";

import logo_2_1 from "../../assets/icons/logo-2-1.svg";
import logo_2_2 from "../../assets/icons/logo-2-2.svg";
import logo_2_3 from "../../assets/icons/logo-2-3.svg";
import logo_3_1 from "../../assets/icons/logo-3-1.svg";
import logo_3_2 from "../../assets/icons/logo-3-2.svg";
import logo_4_1 from "../../assets/icons/logo-4-1.svg";
import logo_4_2 from "../../assets/icons/logo-4-2.svg";
import logo_4_3 from "../../assets/icons/logo-4-3.svg";

const cardDetail = [
  {
    title: "Best Risk Adjusted Yield in Market",
    description:
      "Targets a ~500-800 bps premium over U.S. Treasury yields on Stables, backed by overcollateralized assets, offering unmatched security in DeFi.",
    logo: (
    <svg className="mb-4 text-[#1D1D1D] group-hover:text-[#C48BEF] " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.33152 26.6641V18.6641C5.33152 15.8351 6.45533 13.122 8.45572 11.1216C10.4561 9.1212 13.1692 7.9974 15.9982 7.9974C18.8272 7.9974 21.5403 9.1212 23.5407 11.1216C25.541 13.122 26.6649 15.8351 26.6649 18.6641V26.6641H27.9982V29.3307H3.99819V26.6641H5.33152ZM7.99819 18.6641H10.6649C10.6649 17.2496 11.2268 15.893 12.227 14.8928C13.2271 13.8926 14.5837 13.3307 15.9982 13.3307V10.6641C13.8765 10.6641 11.8416 11.5069 10.3413 13.0072C8.84104 14.5075 7.99819 16.5423 7.99819 18.6641ZM14.6649 2.66406H17.3315V6.66406H14.6649V2.66406ZM26.3689 6.40806L28.2542 8.2934L25.4275 11.1214L23.5409 9.23606L26.3689 6.40806ZM3.74219 8.2934L5.62752 6.40806L8.45552 9.23473L6.57152 11.1227L3.74219 8.2934Z" fill="currentcolor"/>
</svg>
),
  },
  {
    title: "Extra Yield with No Additional Risk",
    description:
      "Tokenize your fund holdings with Multipli and deposit them via Multipli protected Defi protocols to earn extra yield, without taking on additional asset risk.",
    logo:  (
      <svg
        className="mb-4 text-[#1D1D1D] group-hover:text-[#C48BEF] "
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M12.4465 15.3385H15.3398C16.1278 15.3385 16.908 15.4937 17.6359 15.7953C18.3639 16.0968 19.0253 16.5387 19.5825 17.0959C20.1396 17.6531 20.5816 18.3145 20.8831 19.0424C21.1846 19.7704 21.3398 20.5506 21.3398 21.3385H12.0052V22.6719H22.6718V21.3385C22.6664 19.9202 22.2571 18.5327 21.4918 17.3385H25.3398C26.6003 17.3383 27.8351 17.6954 28.9008 18.3685C29.9666 19.0416 30.8197 20.003 31.3612 21.1412C28.2078 25.3012 23.1025 28.0065 17.3398 28.0065C13.6585 28.0065 10.5398 27.2199 8.00651 25.8399V13.4345C9.62848 13.6667 11.1602 14.3236 12.4465 15.3385Z"
          fill="currentColor"
        />
        <path
          d="M6.67318 25.3385C6.67318 25.6922 6.5327 26.0313 6.28265 26.2814C6.0326 26.5314 5.69347 26.6719 5.33984 26.6719H2.67318C2.31956 26.6719 1.98042 26.5314 1.73037 26.2814C1.48032 26.0313 1.33984 25.6922 1.33984 25.3385V13.3385C1.33984 12.9849 1.48032 12.6458 1.73037 12.3957C1.98042 12.1457 2.31956 12.0052 2.67318 12.0052H5.33984C5.69347 12.0052 6.0326 12.1457 6.28265 12.3957C6.5327 12.6458 6.67318 12.9849 6.67318 13.3385V25.3385Z"
          fill="currentColor"
        />
        <path
          d="M24.0065 6.67188C25.0674 6.67188 26.0848 7.0933 26.8349 7.84345C27.5851 8.59359 28.0065 9.61101 28.0065 10.6719C28.0065 11.7327 27.5851 12.7502 26.8349 13.5003C26.0848 14.2504 25.0674 14.6719 24.0065 14.6719C22.9456 14.6719 21.9282 14.2504 21.1781 13.5003C20.4279 12.7502 20.0065 11.7327 20.0065 10.6719C20.0065 9.61101 20.4279 8.59359 21.1781 7.84345C21.9282 7.0933 22.9456 6.67188 24.0065 6.67188Z"
          fill="currentColor"
        />
        <path
          d="M16.0016 5.60156C16.6381 5.60156 17.2485 5.85442 17.6986 6.30451C18.1487 6.75459 18.4016 7.36504 18.4016 8.00156C18.4016 8.63808 18.1487 9.24853 17.6986 9.69862C17.2485 10.1487 16.6381 10.4016 16.0016 10.4016C15.365 10.4016 14.7546 10.1487 14.3045 9.69862C13.8544 9.24853 13.6016 8.63808 13.6016 8.00156C13.6016 7.36504 13.8544 6.75459 14.3045 6.30451C14.7546 5.85442 15.365 5.60156 16.0016 5.60156Z"
          fill="currentColor"
        />
      </svg>
    ),
    companies: [
      { company: logo_2_1 },
      { company: logo_2_2 },
      { company: logo_2_3 },
    ],
  },
  {
    title: "One-Click Access",
    description:
      "Seamless entry into institutional-grade asset management, no minimums, no friction.",
    logo: (
      <svg className="mb-4 text-[#1D1D1D] group-hover:text-[#C48BEF]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M13.3331 14.6641H2.73047C3.3998 7.92673 9.0838 2.66406 15.9971 2.66406C23.3611 2.66406 29.3305 8.6334 29.3305 15.9974C29.3305 23.3614 23.3611 29.3307 15.9971 29.3307C9.0838 29.3307 3.3998 24.0681 2.73047 17.3307H13.3305V21.3307L19.9971 15.9974L13.3305 10.6641L13.3331 14.6641Z" fill="currentcolor"/>
</svg>
    ),
    companies: [{ company: logo_3_1 }, { company: logo_3_2 }],
  },
  {
    title: "Best in class Transparency and Audit",
    description:
      "Every strategy is both economically stress-tested and smart-contract audited.",
    logo: (
    <svg className="mb-4 text-[#1D1D1D] group-hover:text-[#C48BEF] " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.044 3.7706L16 1.33594L26.956 3.7706C27.2521 3.83642 27.5169 4.00122 27.7067 4.23781C27.8965 4.4744 27.9999 4.76863 28 5.07194V18.3879C27.9999 19.7049 27.6747 21.0015 27.0532 22.1626C26.4317 23.3237 25.5332 24.3135 24.4373 25.0439L16 30.6693L7.56267 25.0439C6.46703 24.3136 5.56861 23.3241 4.94713 22.1632C4.32565 21.0023 4.00032 19.706 4 18.3893V5.07194C4.00005 4.76863 4.10352 4.4744 4.29332 4.23781C4.48312 4.00122 4.74792 3.83642 5.044 3.7706ZM16 18.0026L19.9187 20.0626L19.1707 15.6999L22.34 12.6093L17.96 11.9719L16 8.0026L14.04 11.9719L9.66 12.6093L12.8293 15.6999L12.0827 20.0626L16 18.0026Z" fill="currentcolor"/>
</svg>
),
    companies: [
      { company: logo_4_1 },
      { company: logo_4_2 },
      { company: logo_4_3 },
    ],
  },
];
function Features() {
  return (
    <section className="">
      <div className="container ">
        <div className={`${styles.paddindX} ${styles.paddindY} font-saans`}>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="900"
            className={`${styles.heading3}  mb-3`}
          >
            Engineered to Protect. Designed to Perform.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="900"
            className={`${styles.paragraph} font-[380] max-w-[903px] sm:mb-14 mb-6`}
          >
            We bring together the world’s top investment banks offering
            delta-neutral strategies into a single access point, making it easy
            to tap into institutional-grade returns through one seamless
            tokenized platform.
          </p>
          <div className="flex flex-wrap gap-3 justify-between items-start">
            {cardDetail.map((card, idx) => (
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration={idx * 180}
                className="w-full sm:max-w-[577px] max-w-[465px] md:w-[calc(50%-0.5rem)] lg:max-h-[323px] max-h-[370px] h-auto mb-3 bg-white hover:bg-bgBlack transition-all duration-500 p-6 sm:p-7 md:p-8 lg:p-12 rounded-2xl group"
              >
                <div className="flex items-start flex-col justify-start">
                  {card.logo}
                  <p className="text-2xl font-[380] mb-2 group-hover:text-white">
                    {card.title}
                  </p>
                  <p className="sm:text-base text-sm font-[380] leading-[140%]  text-black_50 group-hover:text-white/50">
                    {card.description}
                  </p>

                  {card.companies && card.companies.length > 0 ? (
                    <div className="sm:mt-[54px] mt-6 flex items-center justify-center gap-6">
                      {card.companies.map((item, idx) => (
                        <img
                          key={idx}
                          src={item.company}
                          alt=""
                          className="flex items-center"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-2 sm:mt-[39px] mt-6 justify-start items-center">
                      <div className="bg-[#8E8E8E] items-center text-[#1d1d1d] text-xs sm:text-base leading-[22.4px] font-[380] font-saans rounded-[96px] py-2 px-3 ">
                        U.S APY-4%
                      </div>
                      <span className="leading-[22.4px] font-[380] font-saans text-xs sm:text-base group-hover:text-white">
                        VS
                      </span>
                      <div className="bg-[#C48BEF] text-[#1d1d1d] text-xs sm:text-base leading-[22.4px font-[380] font-saans rounded-[96px] py-2 px-3 ">
                        Multipli APY-12.19%
                      </div>
                    </div>
                  )}
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
