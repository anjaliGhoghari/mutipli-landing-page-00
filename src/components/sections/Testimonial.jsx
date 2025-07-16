import React from "react";
import styles from "../../styles/style";
import person_1 from "../../assets/images/person-1.png";
import person_2 from "../../assets/images/person-2.png";
import person_3 from "../../assets/images/person-3.png";
import person_4 from "../../assets/images/person-4.png";
import person_5 from "../../assets/images/person-5.png";
import person_6 from "../../assets/images/person-6.png";
import person_7 from "../../assets/images/person-7.png";

const testimonials = [
  {
    id: 1,
    size: "normal",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_1,
  },
  {
    id: 2,
    size: "normal",
    content:"The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_2,
  },
  { 
    id: 3, size: "large",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_3,
  },
  { 
    id: 4, size: "large",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_4,
  },
  {
    id: 5,
    size: "normal",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_5,
  },
  {
    id: 6,
    size: "normal",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_6,
  },
  {
    id: 7,
    size: "normal",
    content:
      "The Multipli team is glad to be a part of onboarding the next wave of institutional capital into DeFi. Projected yields of 25-30% are no joke.",
    name: "Shaaran",
    post: "CEO / Multipli",
    profile: person_7,
  },
];
function Testimonial() {
  return (
    <section className="border-b border-containerLine ">
      <div className="container ">
        <div
          className={`${styles.paddindX} ${styles.paddindY} border-x border-containerLine`}
        >
          <h2 className={`${styles.heading3} max-w-[426px] leading-[32px]  mb-14`}>
            Trusted by startups and the world's largest companies
          </h2>
          
          <div className="grid font-saans grid-cols-3 gap-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`
            rounded-2xl
             ${item.size==="large"?"bg-[#FAF7FF] border border-[#E5D4FC]":"bg-white"}
            p-8 
            ${
              item.size === "large"
                ? "col-span-1 row-span-2 lg:col-span-1 lg:row-span-2 text-xl"
                : ""
            }
          `}
              >
                <p className={`max-w-[316px] tracking-wide font-[380] text-[#4A4A4A] ${item.size==="large"?"mb-[270px] text-2xl tracking-wide font-[570]":"mb-[68px] text-base"}`}>
                  {item.content}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-black/70 text-base font-[380]">
                      {item.name}
                    </p>
                    <p className="text-black/70 text-xs font-[380]">
                      {item.post}
                    </p>
                  </div>
                  <div>
                    <img className="rounded-lg" src={item.profile} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
