const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-green-200 flex flex-col-reverse lg:md:flex-row items-center justify-between  font-Lato mt-20 md:lg:mt-32">
      <div className="px-8 md:px-24 lg:px-32">
        <h1 className="text-lg py-2">Welcome to Acient Healing</h1>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold py-2 font-lora text-green-700">
          Offering a total & diverse range of
          <br /> Senior Care Services
        </h1>
        <p className="max-w-2xl py-2">
          Welcome to our Healthcare Website! Our commitment lies in providing
          exceptional Senior Care Services, ensuring your loved ones receive
          compassionate support for a fulfilling life. With a wide array of
          specialized offerings,
        </p>
        <div className="py-4">
          <button className="py-2 lg:md:py-4 px-6 lg:md:px-10 bg-green-600 rounded-full text-white uppercase">
            Book an Apointment
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 place-content-center gap-7 pt-4 lg:md:pt-0 lg:md:gap-14 px-0 md:px-24 lg:px-32">
        <div className="w-44 h-44 lg:md:w-64 lg:md:h-64 bg-yellow-500 relative rounded-tl-[2rem]">
          <img
            src="top1.jpg"
            alt="pexels"
            className="w-44 h-44 lg:md:w-64 lg:md:h-64 object-cover absolute -bottom-3 lg:md:-bottom-6 -right-3 lg:md:-right-6 rounded-br-[2rem] rounded-tl-[2rem]"
          />
        </div>
        <div className="w-44 h-44 lg:md:w-64 lg:md:h-64 bg-orange-500 relative rounded-tr-[2rem]">
          {" "}
          <img
            src="top2.jpg"
            alt="pexels"
            className="w-44 h-44 lg:md:w-64 lg:md:h-64 object-cover absolute -bottom-3 lg:md:-bottom-6 -left-3 lg:md:-left-6 rounded-bl-[2rem] rounded-tr-[2rem]"
          />
        </div>
        <div className="w-44 h-44 lg:md:w-64 lg:md:h-64 bg-green-500 relative rounded-bl-[2rem]">
          {" "}
          <img
            src="top3.jpg"
            alt="pexels"
            className="w-44 h-44 lg:md:w-64 lg:md:h-64 object-cover absolute -top-3 lg:md:-top-6 -right-3 lg:md:-right-6 rounded-tr-[2rem] rounded-bl-[2rem]"
          />
        </div>
        <div className="w-44 h-44 lg:md:w-64 lg:md:h-64 bg-lime-500 relative rounded-br-[2rem]">
          {" "}
          <img
            src="top1.jpg"
            alt="pexels"
            className="w-44 h-44 lg:md:w-64 lg:md:h-64 object-cover absolute -top-3 lg:md:-top-6 -left-3 lg:md:-left-6 rounded-tl-[2rem] rounded-br-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
