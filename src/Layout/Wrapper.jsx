import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-5 w-full ${className}`}>
      
      {children}
    </div>
  );
};

export default Wrapper;
