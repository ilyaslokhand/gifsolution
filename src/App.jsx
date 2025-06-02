import React from "react";
import BlobCursor from "./components/ui/BlobCursor";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen w-full relative">
      <BlobCursor
        blobType="circle"
        fillColor="#DDFF00"
        trailCount={3}
        sizes={[40, 60, 50]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
