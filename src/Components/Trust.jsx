import Aos from "aos";
import { useEffect } from "react";

const Trust = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="w-full lg:md:h-[40rem] h-auto">
      <div className="w-full h-full relative">
        <div>
          <img
            src="helping.jpg"
            alt="helping"
            className="w-full lg:md:h-[38rem] h-full absolute object-cover"
          />
        </div>
        <div className="font-Lato bg-green-200 absolute lg:md:h-[38rem] h-full z-20 w-full bg-opacity-80 backdrop-blur-md">
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
                <img
                  src="assistant-white-1.webp"
                  alt="picture"
                  className="h-36"
                />
              </div>
              <div className="w-80 h-80 shadow-lg bg-white rounded-[2rem] p-3 pt-20">
                <div className="w-full flex items-center justify-center">
                  <h1 className="text-2xl font-Lato font-semibold text-center py-2">
                    Team of experieced Health Experts
                  </h1>
                </div>
                <p className="w-full text-center text-lg">
                  At our healthcare center, we take immense pride in assembling
                  a team of highly skilled and passionate health experts who are
                  committed to your well-being.
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
                  At our healthcare center, we take great pride in equipping our
                  facilities with the latest advancements in medical technology
                  and equipment.
                </p>
              </div>
            </div>
            {/* card three */}
            <div className="relative pt-16 lg:md:py-0">
              <div className="absolute w-full flex justify-center -top-4 lg:md:-top-16">
                <img
                  src="24-hours-white-1.webp"
                  alt="picture"
                  className="h-36"
                />
              </div>
              <div className="w-80 h-80 shadow-lg bg-white rounded-[2rem]  p-3 pt-20">
                <div className="w-full flex items-center justify-center">
                  <h1 className="text-2xl font-Lato font-semibold text-center py-2">
                    24/7 old age nursing care service
                  </h1>
                </div>
                <p className="w-full text-center text-lg">
                  We understand the unique needs of seniors and the importance
                  of providing round-the-clock care to ensure their safety,
                  comfort, and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
