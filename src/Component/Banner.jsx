import React from 'react';
import banner from "../Images/banner.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banner = ({ title, breadcrumbItems }) => {
  return (
    <div
      className="w-full h-[300px] flex flex-col justify-center items-center text-center text-white px-4"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <div key={index} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-white font-semibold">{item.label}</span>
                ) : (
                  <>
                    <Link to={item.path} className="text-lime-400 font-semibold hover:underline">
                      {item.label}
                    </Link>
                    <FaArrowRight className="text-white" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
