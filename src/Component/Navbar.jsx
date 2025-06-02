import React from "react";
import GooeyNav from "../components/ui/GooeyNav";
import { Navigate, useNavigate } from 'react-router-dom'


const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/Service" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {

  const navigate = useNavigate();

  const handleItemClick =(item)=>{
    if (item.href) {
      navigate(item.href)
    }
  }

  return (
    <nav className="flex justify-center relative">
  
      <GooeyNav
        items={items}
        particleCount={15}
        onItemClick={handleItemClick}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </nav>
  );
};

export default Navbar;
