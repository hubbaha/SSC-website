"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";

export default function DonationForm() {
  const router = useRouter();

  // ---- State Definitions ----
  const [amount, setAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("");
  const [donationPool, setDonationPool] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  // Personal Info typed explicitly
  const [personalInfo, setPersonalInfo] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // ---- Donation Options ----
  const donationOptions = ["$10", "$20", "$50", "$100", "Custom Amount"];
  const donationPools = [
    "Donate to the Sufi Science Centre",
    "Sponsor a Sufi Scholar or Student",
    "Contribute to the Preservation of Sacred Art and Craft",
    "Sponsor Sacred Events and Gatherings",
  ];

  // ---- Handlers ----
  const handlePoolChange = (pool: string) => {
    setDonationPool((prev: string[]) =>
      prev.includes(pool)
        ? prev.filter((item) => item !== pool)
        : [...prev, pool],
    );
  };

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleDonationTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDonationType(e.target.value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => router.back()}
          className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-gray-100 px-4 py-2 rounded"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg my-4 rounded-xl">
        {/* Donation Amount Section */}
        <div className="mb-4">
          <label className="block text-fixnix-lightpurple text-xl font-bold">
            Donation Amount
          </label>
          <div className="mt-2 space-y-2">
            {donationOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="amount"
                  value={option}
                  onChange={handleAmountChange}
                  className="w-4 h-4"
                />
                <span>{option}</span>
              </label>
            ))}
            {amount === "Custom Amount" && (
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full p-2 border rounded mt-2"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            )}
          </div>
        </div>

        {/* Donation Type Section */}
        <div className="mb-4">
          <label className="block text-fixnix-lightpurple text-xl font-bold">
            Donation Type
          </label>
          <select
            className="w-full p-2 border rounded mt-2"
            value={donationType}
            onChange={handleDonationTypeChange}
          >
            <option value="">Choose a Donation Type</option>
            <option value="One-Time">One-Time</option>
            <option value="Monthly">Monthly</option>
            <option value="GeneralDonations">General Donations</option>
            <option value="SponsorshipDonations">Sponsorship Donations</option>
            <option value="PatronMembershipContributions">
              Patron Membership Contributions
            </option>
            <option value="Educational&ScholarshipDonations">
              Educational & Scholarship Donations
            </option>
            <option value="Legacy&PlannedGiving">
              Legacy & Planned Giving
            </option>
            <option value="Recurring">Recurring</option>
          </select>
        </div>

        {/* Donation Pool Section */}
        <div className="mb-4">
          <label className="block text-fixnix-lightpurple text-xl font-bold">
            Donation Pool
          </label>
          <div className="mt-2 space-y-2">
            {donationPools.map((pool) => (
              <label key={pool} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={pool}
                  checked={donationPool.includes(pool)}
                  onChange={() => handlePoolChange(pool)}
                  className="w-4 h-4"
                />
                <span>{pool}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Personal Information Section */}
        <h3 className="text-xl text-fixnix-lightpurple font-semibold mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={personalInfo.address}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded col-span-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={personalInfo.city}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={personalInfo.state}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={personalInfo.zip}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={personalInfo.country}
            onChange={handlePersonalInfoChange}
            className="border p-2 rounded col-span-2"
          />
        </div>

        {/* Payment Method Section */}
        <div className="mb-4">
          <label className="block text-fixnix-lightpurple text-xl font-bold">
            Payment Method
          </label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank Transfer"
                onChange={handlePaymentMethodChange}
                className="w-4 h-4"
              />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Paypal"
                onChange={handlePaymentMethodChange}
                className="w-4 h-4"
              />
              <span>Paypal Payment</span>
            </label>
          </div>
        </div>

        <button className="w-full bg-fixnix-lightpurple text-white p-3 rounded-lg font-semibold hover:bg-fixnix-darkpurple transition">
          Donate Now
        </button>
      </div>
    </Layout>
  );
}
