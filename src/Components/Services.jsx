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
              Lorem ipsum dolor sit amet, consectet uradip iscing elit. Eget
              amet pretium hendrerit tristiq ue nulla amet. Et lectus lacus
              nulla quis natoque dictum.
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
              Lorem ipsum dolor sit amet, consectet uradip iscing elit. Eget
              amet pretium hendrerit tristiq ue nulla amet. Et lectus lacus
              nulla quis natoque dictum.
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
            <p className="w-80 py-2">
              Lorem ipsum dolor sit amet, consectet uradip iscing elit. Eget
              amet pretium hendrerit tristiq ue nulla amet. Et lectus lacus
              nulla quis natoque dictum.
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
