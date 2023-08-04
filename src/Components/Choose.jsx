import { AiFillCheckCircle } from "react-icons/ai";

const Choose = () => {
  return (
    <div className="w-full py-12 font-Lato">
      <div className="w-full flex flex-col-reverse lg:md:flex-row items-center justify-center gap-x-0 lg:md:gap-x-16">
        <div className="bg-lime-500 h-[42rem] w-5/6 lg:md:w-[30rem] relative rounded-tl-3xl">
          <img
            src="last.jpg"
            alt="pexel"
            className="h-[42rem]  w-full lg:md:w-[30rem] object-cover absolute -bottom-6 lg:md:-bottom-8 -right-6 lg:md:-right-8 rounded-tl-3xl rounded-br-3xl"
          />
        </div>
        <div className="w-5/6 lg:md:w-[30rem]">
          <div>
            <h1 className="text-green-700 text-lg">Why Choose Us</h1>
            <h1 className="text-3xl font-semibold font-lora text-green-500 py-2">
              Use Our Services For Your Health
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorpe. Consectetur adipiscing elit. Lorem
              ipsum dolor sit amet ut elit tellus, luctus nec ullamcorpe.{" "}
            </p>
            <ul>
              <li className="flex items-center gap-x-2 py-1">
                <AiFillCheckCircle className="text-green-500 text-xl" />
                Professionals Doctor and Nurse
              </li>
              <li className="flex items-center gap-x-2 py-1">
                <AiFillCheckCircle className="text-green-500 text-xl" />
                Professionals Doctor and Nurse
              </li>
              <li className="flex items-center gap-x-2 py-1">
                <AiFillCheckCircle className="text-green-500 text-xl" />
                Professionals Doctor and Nurse
              </li>
            </ul>
            <div className="py-2">
              <button className="uppercase text-white bg-green-500 rounded-lg px-6 py-3">
                Book apointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full font-Lato flex items-center justify-center pt-20">
        <div className="w-5/6 lg:md:w-4/6 lg:md:h-[30rem] border-2 border-green-500 rounded-tl-2xl rounded-br-2xl flex flex-col-reverse lg:md:flex-row">
          <div className="w-full lg:md:w-1/2 h-full flex flex-col justify-center pl-12">
            <h1 className="text-3xl font-lora font-semibold text-green-500">
              Get Your Free Medical Checkup
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="py-2">
              <button className="uppercase text-white bg-green-500 rounded-lg px-6 py-3">
                Book apointment
              </button>
            </div>
          </div>
          <div className="w-full lg:md:w-1/2 h-full relative">
            <img
              src="nurse.png"
              alt="nurse"
              className="h-96 lg:md:h-[30rem] lg:md:absolute lg:md:-top-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
