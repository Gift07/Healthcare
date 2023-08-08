import { BsFillBuildingsFill } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-green-200 font-Lato pt-14">
      <div className="px-8 md:px-24 lg:px-32">
        <div className="w-full  flex flex-col lg:md:flex-row lg:md:items-center lg:md:justify-between">
          <div>
            <div className="py-1 pb-6">
              <img src="ancient.png" alt="ancient" className="h-16" />
            </div>
            <h1 className="max-w-xs">
              At Ancient Healign, we are committed to being your dedicated
              partner in achieving and maintaining optimal health
            </h1>
          </div>
          <div className="w-full lg:md:w-auto flex flex-col lg:md:flex-row items-center bg-yellow-500 gap-x-0 lg:md:gap-x-24">
            <div className="w-full ">
              <h1 className="py-6">Company</h1>
              <ul>
                <li className="py-1">Home</li>
                <li className="py-1">About us</li>
                <li className="py-1">Careers</li>
                <li className="py-1">Contact us</li>
                <li className="py-1">FAQ</li>
              </ul>
            </div>
            <div className="w-full">
              <h1 className="py-6">Company</h1>
              <ul>
                <li className="flex items-center gap-x-2 py-1">
                  <BsFillBuildingsFill />
                  Ancient Building
                </li>
                <li className="flex items-start gap-x-2 py-1">
                  <MdLocationPin />
                  Victoria Street,Virginia ,<br /> United States
                </li>
                <li className="flex items-center gap-x-2 py-1">
                  <IoCallSharp />
                  {`(202) 2224 456677`}
                </li>
                <li className="flex items-center gap-x-2 py-1">
                  <MdEmail />
                  info@ancient.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[.5px] w-full bg-green-300 mt-8" />
      <div className="w-full flex items-center justify-center py-8">
        <h1>@ 2023 ancient Health Care</h1>
      </div>
    </div>
  );
};

export default Footer;
