import React, { useEffect, useState } from "react";
import styles from "../../styles/style";
import highlightloader_1 from "../../assets/icons/highlightloader-1.svg";
import highlightloader_2 from "../../assets/icons/highlightloader-2.svg";
import highlightloader_3 from "../../assets/icons/highlightloader-3.svg";
const steps = [
  {
    image: highlightloader_1,
    title: "Institutional Grade Asset Management",
    description:
      "Earn reliable, high quality yield backed by the largest and safest delta-neutral funds in crypto.",
  },
  {
    image: highlightloader_2,
    title: "Proprietary Predictive Engine for Smart Fund Allocation",
    description:
      "AlphaIQ™, our patented intelligence engine, dynamically allocates capital to top-performing funds using predictive analytics.",
  },
  {
    image: highlightloader_3,
    title: "Borrow, Lend & Instantly Redeem through Tokenization",
    description:
      "The First Protocol for Aggregation and Tokenization of Liquid Delta-Neutral Funds.",
  },
];

const StepText = ({ title, description, active }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        active ? "text-black/90" : "text-black/10"
      }`}
    >
      <div className="relative max-w-[426px]">
        <h2 className="max-w-[403px] font-saans font-[570] tracking-[-0.64px] text-xl sm:text-[32px] sm:leading-[35px] leading-[24px]">
          {title}
        </h2>
        {active && (
          <p className="font-saans tracking-[-0.2px] text-base sm:leading-[115%] leading-[120%] text-[#4A4A4A] mt-2 ">
            {description}
          </p>
        )}
        {active && (
          <div className="absolute left-0 sm:bottom-[-20px] bottom-[-16px] h-[2px] w-full overflow-hidden bg-[#EBEBEB]">
            <div className="h-full loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const HighlightLoaderSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.paddindY}`}>
      <div className="container">
        <div data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="900"  className="flex flex-col sm:flex-row  items-center justify-between">
          {/* Left Section: Text Steps */}
          <div  className="flex  flex-col gap-11 w-full sm:w-[55%]">
            {steps.map((step, idx) => (
              <StepText
                key={idx}
                title={step.title}
                description={step.description}
                active={currentStep === idx}
              />
            ))}
          </div>

           <div className="flex  justify-center mt-14 sm:mt-0">
            <img
              key={currentStep}
              src={steps[currentStep].image}
              alt={`Diagram ${currentStep + 1}`}
              className="animate-pixelSwap"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightLoaderSection;
