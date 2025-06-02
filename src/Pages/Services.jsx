import Banner from '@/Component/Banner';
import Service from '@/Component/Service';
import React from 'react'

const Services = () => {
  return (
    
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] ">
      <Banner
      title="Our Service"
      breadcrumbItems={[
        { label: "Home", path: "/" },
        { label: "Services" }
      ]}
    />
   <div className="mt-10  mb-5 px-4 md:px-8"><Service /></div>
    
</div>

)
};

export default Services
