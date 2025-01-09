import React, { useState } from "react";
import { assets } from "../assets/assets";

const Fund = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Show payment modal

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus(""); // Reset status before submitting

    // Simulate a form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowPaymentModal(true); // Show payment modal after form submission
      // Optionally, reset form fields after submission
      setName("");
      setAmount("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 2000);
  };

  const closeModal = () => {
    setShowPaymentModal(false); // Close the modal
  };

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 px-5 my-10">
        {/* Description Section */}
        <div className="container w-1/2 mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-[#b17457] mb-6 text-center">
            Fund Donations
          </h1>
          <p className="text-gray-700 text-lg text-center mb-8">
            Your financial support empowers us to assist those in need during
            challenging times. Together, we can rebuild lives and communities.
          </p>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Donate Funds?
            </h2>
            <p className="text-gray-600 mb-4">
              Donations enable us to provide food, shelter, and medical aid
              during disasters. Your contributions can help transform lives and
              provide hope to those in need.
            </p>
            <button className="bg-[#b17457] text-white py-2 px-4 rounded-md hover:bg-[#9c644a]">
              Learn More
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b17457] mb-6">
            Fund Collection
          </h2>
          {formStatus && (
            <p className="text-green-700 font-semibold mb-4">{formStatus}</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              placeholder="Donation Amount (NPR)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              min="1"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              pattern="[0-9]{10}"
              required
            />
            <textarea
              placeholder="Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#b17457] text-white rounded-lg hover:bg-[#9c644a] transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Pay Now"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal for Payment Options */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-bold text-[#b17457] mb-4">
              Choose Your Payment Method
            </h3>
            <div className="flex gap-4 justify-center">
              {/* eSewa Button with Logo */}
              <button
                className="p-2"
                onClick={() => alert("Redirecting to eSewa...")}
              >
                <img
                  src= {assets.esewalogo} // Replace with actual eSewa logo URL
                  alt="eSewa Logo"
                  className="w-16 h-auto rounded-full"
                />
              </button>
              
              {/* Khalti Button with Logo */}
              <button
                className="p-2"
                onClick={() => alert("Redirecting to Khalti...")}
              >
                <img
                  src={assets.khaltilogo} // Replace with actual Khalti logo URL
                  alt="Khalti Logo"
                  className="w-28 h-auto"
                />
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fund;