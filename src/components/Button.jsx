function Button({title}) {
  

  return (
    <button className="text-white transition-all duration-500 hover:scale-110 bg-[#1d1d1d] py-[6px] flex items-center pr-[6px] leading-[20px] pl-3 rounded-[32px] tracking-[-0.16px] text-base font-[550] font-saans"
      
    >
      <span>
       {title}
        <svg
          className={`inline font-saans transition-all duration-700 fill-white
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

export default Button;