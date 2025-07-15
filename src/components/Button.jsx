function Button({ variant = "black" }) {
  const isWhite = variant === "white";

  return (
    <button
      className={`new-button border group transition-all duration-700
        ${isWhite ? "border-white text-white" : "border-black text-black"}
      `}
    >
      <span>
        Deploy assets{" "}
        <svg
          className={`inline font-saans transition-all duration-700
            ${isWhite ? "fill-white group-hover:fill-white" : "fill-black group-hover:fill-black"}
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