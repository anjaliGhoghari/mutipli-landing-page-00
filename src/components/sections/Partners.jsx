import blackrock from "../../assets/icons/blackrock.svg";
import Brewanhoward from "../../assets/icons/Brewanhoward.svg";
import Edgecapital from "../../assets/icons/Edgecapital.svg";
import Fasanara from "../../assets/icons/Fasanara.svg";
import Nomura from "../../assets/icons/Nomura.svg";
import Rockaway from "../../assets/icons/Rockaway.svg";


 const partners = [
    {
      id: "partner-1",
      logo: Edgecapital,
    },
    {
      id: "partner-2",
      logo: Nomura,
    },
    
    {
      id: "partner-3",
      logo: Fasanara,
    },
    {
      id: "partner-4",
      logo: blackrock,
    },
    { 
      id: "partner-5",
      logo: Rockaway
    },
    { 
      id: "partner-6",
      logo: Brewanhoward
    },
    
  ];
  

function Partners() {
  return (
    <div className="flex flex-wrap items-center justify-between w-full mt-[86px] ">
                {partners.map((partners) => (
                  <div
                    key={partners.id}
                    className="flex justify-start items-start flex-1 mr-3 min-w-[120px]"
                  >
                    <img
                      src={partners.logo}
                      alt={`Logo of ${partners.id}`}
                      className="min-w-[118px]"
                    />
                  </div>
                ))}
              </div>
  )
}

export default Partners