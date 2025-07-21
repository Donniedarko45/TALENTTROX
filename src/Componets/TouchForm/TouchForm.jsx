import { useState } from "react";
import "./TouchForm.css";

// A simple spinner component for loading state
const Spinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

function TouchForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    domain: "",
    details: "",
  });

  // State to manage submission status (e.g., loading, success, error)
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setStatus({ loading: true, error: null, success: false }); // Set loading state

    // Map frontend state to the API's expected field names
    const apiPayload = {
      full_name: formData.fullName,
      phone_number: formData.phone,
      email: formData.email,
      user_type: formData.role, // The API expects 'user_type'
      domain: formData.domain,
      message: formData.details, // The API expects 'message'
    };

    try {
      // Use environment variable or fallback to local development


      
      const response = await fetch(
        `https://tera-1fnk.onrender.com/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiPayload),
        },
      );

      const result = await response.json();
      console.log("Response status:", response.status);
      console.log("Response result:", result);

      if (!response.ok) {
        // If the server response is not OK, throw an error with the message from the server
        throw new Error(
          result.message || `HTTP error! status: ${response.status}`,
        );
      }

      // Handle successful submission
      console.log("Success:", result);
      setStatus({ loading: false, error: null, success: true });
      // Optionally, reset the form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        role: "",
        domain: "",
        details: "",
      });
    } catch (error) {
      // Handle errors during submission
      console.error("Submission Error:", error);
      setStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <div className="touchForm bg-gray-100 p-4 sm:p-8">
      <div className="touchForm__container max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <h1 className="touchForm__title text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Get in Touch with US!
        </h1>
        <p className="touchForm__subtitle text-gray-600 text-center mt-2 mb-8">
          Looking to hire or get hired? Let's make it happen
        </p>

        <form className="touchForm__form" onSubmit={handleSubmit}>
          <div className="touchForm__row grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="touchForm__group">
              <label
                htmlFor="fullName"
                className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="touchForm__input w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="touchForm__group">
              <label
                htmlFor="phone"
                className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="touchForm__input w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="touchForm__group mt-6">
            <label
              htmlFor="email"
              className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="touchForm__input w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="touchForm__group mt-6">
            <label
              htmlFor="role"
              className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
            >
              Who are you?
            </label>
            <select
              id="role"
              className="touchForm__select w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                I am a...
              </option>
              <option value="Individual">Individual</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Agency">Agency</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="touchForm__group mt-6">
            <label
              htmlFor="domain"
              className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
            >
              Select your domain
            </label>
            <select
              id="domain"
              className="touchForm__select w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.domain}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Eg. Business Management
              </option>
              <option value="Business Management">Business Management</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Real Estate">Real Estate</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="touchForm__group mt-6">
            <label
              htmlFor="details"
              className="touchForm__label block text-sm font-medium text-gray-700 mb-1"
            >
              Tell us what you're looking for
            </label>
            <textarea
              id="details"
              className="touchForm__textarea w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="“I'm looking to hire 3 content writers.” or “I'm searching for full-time design roles.”"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="touchForm__button inline-flex justify-center items-center py-3 px-12 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
              disabled={status.loading}
            >
              {status.loading && <Spinner />}
              {status.loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* --- Submission Status Messages --- */}
        {status.success && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        )}
        {status.error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
            <p>Something went wrong: {status.error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TouchForm;

