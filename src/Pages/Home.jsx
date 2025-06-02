import React from "react";
import Hero from "@/Component/Hero";
import Service from "@/Component/Service";
import ClientLogos from "@/Component/ClientLogos";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <div className="w-full">
        <ClientLogos />
      </div>
    </>
  );
};

export default Home;
