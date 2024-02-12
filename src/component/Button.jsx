import React from "react";

const Button = ({
  children,
  type = "submit",
  textcolor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button type={type} className={`${className} ${textcolor}
    w-full py-2 px-3 bg-cyan-900 font-semibold text-[20px]
    rounded cursor-pointer hover:bg-gray-800
    `} {...props}>
      {children}
    </button>
  );
};

export default Button;
