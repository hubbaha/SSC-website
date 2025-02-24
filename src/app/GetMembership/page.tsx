"use client";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    nationality: "",
    state: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value as (typeof formData)[keyof typeof formData],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Membership Form
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-4">
          Personal Information
        </h3>
        <form onSubmit={handleSubmit} className="mt-4">
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              required: true,
            },
            {
              label: "Date of Birth",
              name: "dob",
              type: "date",
              required: true,
            },
            {
              label: "Email Address",
              name: "email",
              type: "email",
              required: true,
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "text",
              required: true,
            },
            { label: "Country", name: "country", type: "text" },
            {
              label: "Nationality",
              name: "nationality",
              type: "text",
              required: true,
            },
            { label: "State/Province", name: "state", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "Postal Code", name: "postalCode", type: "text" },
            { label: "Address", name: "address", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative mb-4">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required={field.required}
                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500">
                {field.label} {field.required && "*"}
              </label>
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-gray-700">Gender:</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                Female
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
