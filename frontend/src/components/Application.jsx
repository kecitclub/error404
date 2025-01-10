import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";

const Application = () => {
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:4000/app/application/submission";
  const [applicationData, setApplicationData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    fundamount: "",
    reason: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(url, applicationData);
      console.log(response);
      toast.success("Application submitted successfully!", {
        position: "top-right",
      });
      setIsLoading(false);
      // Reset the form fields after successful submission
      setApplicationData({
        fullname: "",
        email: "",
        phonenumber: "",
        fundamount: "",
        reason: "",
        location: "",
      });
    } catch (error) {
      toast.error("Failed to submit the application. Please try again.", {
        position: "top-right",
      });
      setIsLoading(false);
    }
  };

  return (
    <section id="application" className="bg-gray-50 py-16 px-6">
      <ToastContainer />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5">
        {/* Description Section */}
        <div className="lg:w-5/12 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000080] mb-6">
            About Application
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            If you or someone you know is in need of assistance, please fill out
            the application form below. Our team will review your request and
            get back to you as soon as possible. Your details will remain
            confidential and used solely for the purpose of providing
            assistance.
          </p>
          <div className="flex justify-between items-center gap-8 py-10">
            <div className="flex flex-col justify-center items-center w-full lg:w-5/12">
              <img
                src={assets.form}
                alt="Image 1"
                className="w-20 h-auto rounded-lg p-2"
              />
              <p className="text-5xl p-2 text-[#007BFF]">1000+</p>
              <p className="text-2xl p-2">Beneficiaries Impacted</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-5/12">
              <img
                src={assets.money_bag}
                alt="Image 2"
                className="w-20 h-auto rounded-lg p-2"
              />
              <p className="text-5xl p-2 text-[#007BFF]">Rs 10000+</p>
              <p className="text-2xl p-2">Aid Distributed</p>
            </div>
          </div>
        </div>

        {/* Two Images Side by Side */}

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000080] mb-6">
            Apply for Assistance
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={applicationData.fullname}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={applicationData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="Reason for Assistance"
              name="reason"
              value={applicationData.reason}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <input
              type="number"
              placeholder="Fund Amount"
              name="fundamount"
              value={applicationData.fundamount}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={applicationData.location}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phonenumber"
              value={applicationData.phonenumber}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              pattern="[0-9]{10}"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Application;
