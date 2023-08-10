const Story = () => {
  return (
    <div className="w-full font-Lato pb-16">
      <div className="py-12 flex flex-col items-center justify-center">
        <h1
          data-aos="zoom-in"
          data-aos-duration="950"
          className="text-4xl font-lora font-medium text-green-500 hidden lg:md:flex"
        >
          We believe in focussing on the person
          <br /> as much as the clinical condition.
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1250"
          className="text-2xl md:text-3xl lg:text-4xl font-lora font-medium text-green-500 flex text-center lg:md:hidden px-4"
        >
          We believe in focussing on the person as much as the clinical
          condition.
        </h1>
        <hr
          data-aos="zoom-in"
          data-aos-duration="1350"
          className="w-28 h-2 bg-green-500 my-6"
        />
      </div>
      <div className="flex flex-col lg:md:flex-row items-center justify-center gap-x-14">
        <div className="flex flex-col lg:md:flex-row items-center gap-x-4">
          <div className="py-3 lg:md:py-0">
            <img
              data-aos="zoom-in"
              data-aos-duration="800"
              src="story1.webp"
              alt="pexels"
              className="h-[27rem] w-96 rounded-3xl object-cover"
            />
          </div>
          <div className="py-3 lg:md:py-0">
            <img
              data-aos="zoom-in"
              data-aos-duration="1150"
              src="story2.webp"
              alt="pexels"
              className="h-[27rem] w-96 rounded-3xl object-cover"
            />
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1350" className="w-[25rem]">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1350"
            className="text-green-600 text-xl py-2 px-4 lg:md:px-0"
          >
            Our Story
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1350"
            className="px-4 lg:md:px-0 text-green-500 text-2xl font-lora font-semibold"
          >
            Making a difference with senior living
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1350"
            className="text-lg pb-2 px-4 lg:md:px-0"
          >
            Our story began with a simple yet powerful vision - to transform
            healthcare by placing compassion and excellence at its core. Founded
            by a team of dedicated professionals, our healthcare center embarked
            on a journey to make a difference in the lives of individuals and
            families.
          </p>
          <div className=" text-white py-2 px-4 lg:md:px-0">
            <button
              data-aos="zoom-in"
              data-aos-duration="1350"
              className="bg-green-600 uppercase rounded-md px-5 py-2"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
