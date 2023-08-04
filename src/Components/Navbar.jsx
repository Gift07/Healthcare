import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative">
      <nav className="h-20 md:lg:h-32 bg-white first-letter shadow-lg font-Lato z-40 fixed w-screen top-0">
        <div className="h-0 hidden lg:md:h-10 border-b lg:md:flex items-center justify-between px-8 md:px-24 lg:px-32 text-xs text-gray-700">
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <BsFillTelephoneFill />
              {`(808)-7099085`}
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <MdEmail />
              {`info@ancient.com`}
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <AiOutlineTwitter />
              {`Twitter`}
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <AiFillInstagram />
              {`instagram`}
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <AiFillLinkedin />
              {`Linkedin`}
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(8rem-2.5rem)] flex items-center justify-between px-8 md:px-24 lg:px-32">
          <div>
            <img src="ancient.png" alt="ancient" className="lg:md:h-16 h-10" />
          </div>
          {/* shown in small screns */}
          <div
            onClick={() => setSidebar(!sidebar)}
            className="lg:md:hidden border rounded-lg p-3 border-green-500 bg-green-100 text-green-500"
          >
            <RxHamburgerMenu />
          </div>
          <div className="hidden lg:md:flex items-center gap-x-16">
            <ul className="flex items-center gap-x-6">
              <li>Home</li>
              <li>About us</li>
              <li>Appointments</li>
              <li>Services</li>
              <li>Help</li>
            </ul>
            <span>
              <button className="px-8 py-2 bg-green-700 text-white rounded-full">
                Book Appointment
              </button>
            </span>
          </div>
        </div>
      </nav>
      {sidebar && (
        <div className="w-full z-[1000] h-screen fixed top-0">
          <div className="w-full h-1/2 bg-white">
            <div className="w-full h-16 flex items-center justify-between px-8">
              <div>
                <img src="ancient.png" alt="ancient" className="h-10" />
              </div>
              <div
                onClick={() => setSidebar(!sidebar)}
                className="p-1 border rounded-full border-green-500 bg-green-200 text-green-500"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="w-full px-8">
              <ul className="">
                <li className="py-2">Home</li>
                <li className="py-2">About us</li>
                <li className="py-2">Appointments</li>
                <li className="py-2">Services</li>
                <li className="py-2">Help</li>
              </ul>
              <span>
                <button className="px-8 py-2 bg-green-700 text-white rounded-md">
                  Book Appointment
                </button>
              </span>
            </div>
          </div>
          <div className="w-full h-1/2 bg-green-100 bg-opacity-30 backdrop-blur-md" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
