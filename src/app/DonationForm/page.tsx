'use client'
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DonationForm() {
    const router = useRouter();
  const [amount, setAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("");
  const [donationPool, setDonationPool] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const donationOptions = ["$10", "$20", "$50", "$100", "Custom Amount"];
  const donationPools = [
    "Donate to the Sufi Science Centre",
    "Sponsor a Sufi Scholar or Student",
    "Contribute to the Preservation of Sacred Art and Craft",
    "Share Our Message",
    "Sponsor Sacred Events and Gatherings",
    "Offer a Prayers and Blessings Contribution"
  ];

  const handlePoolChange = (pool: string) => {
    setDonationPool((prev: string[]) =>
      prev.includes(pool) ? prev.filter((item) => item !== pool) : [...prev, pool]
    );
  };

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
            {/* Back Button */}
            <div className="container mx-auto px-4 py-4">
                <button 
                    onClick={() => router.back()} 
                    className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-gray-100 px-4 py-2 rounded">
                    ← Back
                </button>
            </div>
    
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg my-4 rounded-xl">
       
      <h2 className="text-3xl font-bold text-center mb-4">Donation Form</h2>
      <div className="mb-4">
        <label className="block text-fixnix-lightpurple text-lg font-bold">Donation Amount</label>
        <div className="mt-2 space-y-2">
          {donationOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value={option}
                onChange={(e) => setAmount(e.target.value)}
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
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-fixnix-lightpurple text-lg font-bold">Donation Type</label>
        <select
          className="w-full p-2 border rounded mt-2"
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
        >
          <option value="">Choose a Donation Type</option>
          <option value="One-Time">One-Time</option>
          <option value="Recurring">Recurring</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-fixnix-lightpurple text-lg font-bold">Donation Pool</label>
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
      <div className="mb-4">
        <label className="block text-fixnix-lightpurple text-lg font-bold">Payment Method</label>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank Transfer"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 text-fixnix-lightpurple"
            />
            <span>Direct Bank Transfer</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
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
