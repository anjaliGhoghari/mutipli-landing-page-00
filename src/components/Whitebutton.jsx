function Whitebutton() {
  

    return (
      <button data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800" className="hover:text-[#141414] hover:bg-white hover:border hover:border-[#141414] group  text-white group  transition-all duration-500  bg-transparent border border-white py-[6px] flex items-center pr-[6px] leading-[20px] pl-3 rounded-[32px] tracking-[-0.16px] sm:text-base text-sm font-[570] font-saans"
        
      >
        <span>
          Deploy assets{" "}
          <svg
            className={`inline font-saans  fill-white group-hover:fill-black
            `}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.4793 9.16396L9.00927 4.69396L10.1876 3.51562L16.6693 9.99729L10.1876 16.479L9.00927 15.3006L13.4793 10.8306H3.33594V9.16396H13.4793Z" />
          </svg>
        </span>
      </button>
    );
  }
  
  export default Whitebutton;