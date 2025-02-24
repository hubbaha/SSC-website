"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleVerify = () => {
    if (otp.length === 6) {
      router.push("/Dashboard"); // Redirect after OTP verification
    } else {
      setError("Enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          Enter OTP
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          We've sent a 6-digit OTP to your email
        </p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-2 mt-4 border rounded text-center"
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          onClick={handleVerify}
          className="w-full bg-fixnix-lightpurple text-white py-2 rounded mt-4 hover:bg-fixnix-darkpurple transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
