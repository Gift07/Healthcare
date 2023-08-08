import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Modal = ({ modal, setModal }) => {
  const [formData, setFormData] = useState({
    product: "",
    lastname: "",
    name: "",
    email: "",
    care: "",
    other_notes: "",
  });
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submitting logic
  };
  console.log(formData.care);

  return (
    <div className="w-full h-full bg-green-600 bg-opacity-30 backdrop-blur-md fixed">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-3/5 py-3 bg-white rounded-xl">
          <div className="w-full flex items-center justify-end px-8 py-2 text-xl">
            <div
              onClick={() => setModal(!modal)}
              className="p-1 border-2 border-green-500 bg-green-200 text-green-500 rounded-full border-opacity-70 cursor-pointer"
            >
              <IoClose />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="text-3xl font-lora text-green-500 font-semibold">
              Fill out Our Form{" "}
            </h1>
          </div>
          <div className="w-full px-16">
            <form onSubmit={(e) => handleSubmit(e)} className="w-full">
              <div className="w-full flex items-center gap-x-4">
                <div className="w-1/2 mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={(e) => handleChange(e)}
                    className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                    placeholder="John"
                  />
                </div>
                <div className="w-1/2 mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Lastname
                  </label>
                  <input
                    name="quantity"
                    value={formData.lastname}
                    onChange={(e) => handleChange(e)}
                    className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-x-4">
                <div className="w-1/2 mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                    placeholder="1202345869"
                  />
                </div>
                <div className="w-1/2 mb-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                    placeholder="johndoe@email.com"
                  />
                </div>
              </div>
              <div className="w-full mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Care for
                </label>
                <select
                  name="care"
                  value={formData.care}
                  onChange={(e) => handleChange(e)}
                  className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                >
                  <option value="my self" className="bg-green-100 py-2">
                    My Self
                  </option>
                  <option value="other" className="bg-green-100 py-2">
                    Other
                  </option>
                </select>
              </div>
              {formData.care === "other" && (
                <div>
                  {" "}
                  <div className="w-1/2 mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                      placeholder="johndoe@email.com"
                    />
                  </div>
                  <div className="w-1/2 mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      className=" outline-none border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-green-100"
                      placeholder="johndoe@email.com"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Other notes
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="other_notes"
                  value={formData.other_notes}
                  onChange={(e) => handleChange(e)}
                  className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 "
                  placeholder="Write other notes about the product"
                ></textarea>
              </div>

              <div className="py-6 w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="py-2 uppercase bg-green-500 text-white rounded-md px-14"
                >
                  Book an Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
