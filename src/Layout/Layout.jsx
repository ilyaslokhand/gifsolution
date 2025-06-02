import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "./Wrapper";
import Navbar from "@/Component/Navbar";
import Abstract from "../Images/Abstract.jpg";

const Layout = ({ children }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className="w-full min-h-screen"
      style={
        isHomePage
          ? {
              backgroundImage: `url(${Abstract})`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </div>
  );
};

export default Layout;
