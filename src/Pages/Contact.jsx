import Banner from '@/Component/Banner'
import ShinyText from '@/components/ui/ShinyText'
import React from 'react'
import ContactForm from '@/Component/ContactForm'

const Contact = () => {
  return (
    <>
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] ">
  <Banner
  title="Our Contact"
  breadcrumbItems={[
    { label: "Home", path: "/" },
    { label: "Contact" }
  ]}
/>

</div>
 <div className="mt-10  mb-5 px-4 md:px-8 ">
      <div className="flex justify-center mb-6">
        <div className="bg-[#FFFFFF0F] w-[260px] md:w-[310px] rounded-[30px]">
          <ShinyText
            text="Our Contact"
            disabled={false}
            speed={3}
            className="pt-3 pb-3 text-center"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-7">Let's Work Together!</h1>
        <p className="mt-3 text-sm md:text-base text-left">
          Whether you're starting a new project or need help bringing your ideas to life, I'm here to collaborate and create something great. Let's connect and make it happen!
        </p>
      </div>
      <ContactForm/>
      </div>
</>
  )
}

export default Contact
