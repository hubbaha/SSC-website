"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>(); // <-- Pass the form type here

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: RegisterFormInputs) => {
    setLoading(true);
    // Simulate an async request, then go to OTP page
    setTimeout(() => {
      router.push("/OTP");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold text-fixnix-lightpurple">
          Register SSC
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
  {/* Full Name Field */}
  <label className="relative block">
    <input
      {...register("name", { required: "Full name is required" })}
      type="text"
      placeholder=" "
      className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    />
    <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
      Full Name
    </span>
  </label>
  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

  {/* Email Field */}
  <label className="relative block">
    <input
      {...register("email", { required: "Email is required" })}
      type="email"
      placeholder=" "
      className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    />
    <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
      Email
    </span>
  </label>
  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

  {/* Password Field */}
  <label className="relative block">
    <input
      {...register("password", {
        required: "Password is required",
        minLength: { value: 6, message: "At least 6 characters" },
      })}
      type="password"
      placeholder=" "
      className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
    />
    <span className="absolute left-2 top-2 text-gray-500 transition-opacity transform scale-100 opacity-50 peer-placeholder-shown:opacity-50 peer-placeholder-shown:scale-100 peer-focus:opacity-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:-translate-x-1 peer-focus:text-fixnix-lightpurple peer-focus:bg-white">
      Password
    </span>
  </label>
  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}





          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-fixnix-lightpurple text-white py-2 rounded hover:bg-fixnix-darkpurple transition"
          >
            {loading ? "Processing..." : "Register"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/Login" className="text-fixnix-darkpurple font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
