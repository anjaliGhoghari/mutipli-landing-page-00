import React from "react";
import styles from "../../styles/style";
import logo from "../../assets/icons/logo.svg";
import footer from "../../assets/images/footer.png";
import Button from "../Button"


const footerLinks = [
  {
    name: "Terms and conditions",
    link: "https://docs.multipli.fi/legal/terms-of-use",
  },
  {
    name: "Privacy policy",
    link: "https://docs.multipli.fi/legal/privacy-policy",
  },
  {
    name: "X.com",
    link: "https://x.com/multiplifi",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/multipli-fi/",
  },
  {
    name: "Press",
    link: "https://blog.multipli.fi/",
  },
  {
    name: "Blog",
    link: "https://blog.multipli.fi/",
  },
  {
    name: "Docs",
    link: "https://docs.multipli.fi/",
  },
];
function Footer() {
  return (
    <footer id="contact" className="border-b border-containerLine bg-[#F5F5F5] ">
      <div className="container ">
        <div
          className={`${styles.paddindX} pt-[128px] border-x border-containerLine`}
        >
          <a href="#"><img src={logo}  alt="logo" className="max-w-[120px] mb-12" /></a>
          <h2
            className={`font-saans font-[570] text-black_90 text-[40px] leading-[48px]   max-w-[633px] mb-3`}
          >
            Yields from the world’s top asset managers made accessible.
          </h2>
          <p className={`${styles.paragraph} mb-[88px]`}>
            The smart gateway to institutional-grade,<br/> delta-neutral crypto
            yields.
          </p>
          <div className="flex items-center justify-between flex-col gap-2 lg:flex-row">
            <div className="flex flex-col ss:flex-row justify-end gap-6 sm:gap-8">
              {footerLinks.map((link, index) => {
                if (index % 4 === 0) {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-4 min-w-[250px]"
                    >
                      {footerLinks.slice(index, index + 4).map((item) => (
                        <div key={item.name} className="w-[200px] sm:w-[250px]">
                          <div className="relative w-full h-[1px] bg-black/10" />
                          <a href={item.link}><p className="mt-4 text-left hover:text-black cursor-pointer text-[#797979] text-[16px]">
                            {item.name}
                          </p>
                          </a>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div>
              <p className="text-left font-normal text-[#4A4A4A] mb-6 text-[20px]">
                How can we help you?
              </p>
              <form className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full border-b bg-transparent border-black/10 focus:outline-none  placeholder-[#B0B0B0] text-base pb-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border-b bg-transparent border-black/10 focus:outline-none  placeholder-[#B0B0B0] text-base pb-2"
                />
                <input
                  type="text"
                  placeholder="Organization"
                  required
                  className="w-full border-b bg-transparent border-black/10 focus:outline-none placeholder-[#B0B0B0] text-base pb-2"
                />
                <Button title="Sing up"/>
              </form>
              
            </div>
          </div>
          <div className="w-full px-4 sm:px-8 flex justify-center items-center">
          <img
            src={footer}
            alt="footer"
            className="w-full mr-[100px] max-w-[1167px] h-auto object-contain"
          />
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
