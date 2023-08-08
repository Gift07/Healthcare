const Services = () => {
  return (
    <div className="w-full font-Lato pb-20">
      <div className="py-12 w-full flex flex-col items-center justify-center">
        <h1 className="text-xl">Enhanced Quality Care Service</h1>
        <h1 className="text-4xl font-lora font-semibold text-green-500 hidden lg:md:flex">
          Eldergarten Oldage Care Home
        </h1>
        <h1 className="text-4xl font-lora font-semibold text-green-500 lg:md:hidden flex text-center pt-2">
          Eldergarten Oldage Care Home
        </h1>
      </div>
      <div className="flex flex-col lg:md:flex-row items-center justify-center gap-x-8">
        <div className="py-4 lg:md:py-0">
          <img
            src="service1.webp"
            alt="pexels"
            className="h-[27rem] w-80 rounded-3xl object-cover"
          />
          <span className="bg-green-100 rounded-tl-3xl rounded-br-3xl">
            <h1 className="text-2xl font-medium pt-2">
              Regular Health Monitoring
            </h1>
            <p className="w-80 py-2">
              we offer comprehensive regular health monitoring services. Our
              dedicated team of healthcare professionals uses advanced
              technologies and expertise to keep a close eye on your health,
              ensuring early detection of any potential issues.
            </p>
            <h1 className="underline text-sky-500 cursor-pointer">
              Learn More
            </h1>
          </span>
        </div>
        {/* sexond card */}
        <div>
          <img
            src="service2.webp"
            alt="pexels"
            className="h-[27rem] w-80 rounded-3xl object-cover"
          />
          <span>
            <h1 className="text-2xl font-medium pt-2">
              Physiotherapy Services
            </h1>
            <p className="w-80 py-2">
              {`At our healthcare facility, we understand the significance of 
              mobility and rehabilitation in restoring health and enhancing lives. 
              That's why we offer a range of specialized physiotherapy
               services delivered by skilled professionals. `}
            </p>
            <h1 className="underline text-sky-500 cursor-pointer">
              Learn More
            </h1>
          </span>
        </div>
        {/* third card */}
        <div>
          <img
            src="service3.webp"
            alt="pexels"
            className="h-[27rem] w-80 rounded-3xl object-cover"
          />
          <span className="bg-red-500">
            <h1 className="text-2xl font-medium pt-2">
              Geriatrics & Nursing Care
            </h1>
            <p className="w-80 py-2 text-ellipsis">
              {` We recognize the significance of specialized care for seniors, 
                  and our geriatrics and nursing services are designed to provide the utmost comfort and support 
                  during this stage of life with Our team of compassionate and skilled caregivers`}
            </p>
            <h1 className="underline text-sky-500 cursor-pointer">
              Learn More
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
