const Trust = () => {
  return (
    <div className="font-Lato bg-green-200">
      <div className="w-full flex flex-col items-center justify-center py-12">
        <h1 className="text-xl text-green-500">Get to know about us </h1>
        <h1 className="font-lora text-3xl font-semibold">
          Why you should trust us?
        </h1>
      </div>
      <div className="w-full flex flex-col lg:md:flex-row items-center justify-center pb-12 pt-16 gap-x-8">
        {/* card one */}
        <div className="relative pb-16 lg:md:py-0">
          <div className="absolute w-full flex justify-center -top-16">
            <img src="assistant-white-1.webp" alt="picture" className="h-36" />
          </div>
          <div className="w-80 h-80 shadow-lg bg-white rounded-[2rem] p-3 pt-20">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-2xl font-Lato font-semibold text-center py-2">
                Team of experieced Health Experts
              </h1>
            </div>
            <p className="w-full text-center text-lg">
              Lorem ipsum dolor sit not the amet, consectet uradip were iscing
              elit. Eget amet pretium hendrerit tristiq ue nulla amet iot lectus
              lacus.
            </p>
          </div>
        </div>
        {/* card two */}
        <div className="relative py-16 lg:md:py-0">
          <div className="absolute w-full flex justify-center -top-4 lg:md:-top-16">
            <img
              src="surgery-room-white-1.webp"
              alt="picture"
              className="h-36"
            />
          </div>
          <div className="w-80 h-80 shadow-lg bg-white rounded-[2rem] p-3 pt-20">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-2xl font-Lato font-semibold text-center py-2">
                Fully equiped with equipments
              </h1>
            </div>
            <p className="w-full text-center text-lg">
              Lorem ipsum dolor sit not the amet, consectet uradip were iscing
              elit. Eget amet pretium hendrerit tristiq ue nulla amet iot lectus
              lacus.
            </p>
          </div>
        </div>
        {/* card three */}
        <div className="relative pt-16 lg:md:py-0">
          <div className="absolute w-full flex justify-center -top-4 lg:md:-top-16">
            <img src="24-hours-white-1.webp" alt="picture" className="h-36" />
          </div>
          <div className="w-80 h-80 shadow-lg bg-white rounded-[2rem]  p-3 pt-20">
            <div className="w-full flex items-center justify-center">
              <h1 className="text-2xl font-Lato font-semibold text-center py-2">
                24/7 old age nursing care service
              </h1>
            </div>
            <p className="w-full text-center text-lg">
              Lorem ipsum dolor sit not the amet, consectet uradip were iscing
              elit. Eget amet pretium hendrerit tristiq ue nulla amet iot lectus
              lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
