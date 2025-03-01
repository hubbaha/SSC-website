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
          Login SSC
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
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
            {loading ? "Processing..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/Register" className="text-fixnix-darkpurple font-bold">
            Register
          </Link>
        </p>

        {/* Social Login Buttons */}
        <p className="text-sm sm:text-md text-center text-gray-600 mt-4">
          - Or Sign In With -
        </p>
        <div className="flex items-center justify-center py-2 space-x-3 text-center">
          <Link
            href="#"
            className="flex items-center justify-center h-9 w-9 bg-fixnix-lightpurple text-white rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
          >
            <i className="fab fa-google"></i>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center h-9 w-9 bg-fixnix-lightpurple text-white rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
          >
            <i className="fab fa-facebook"></i>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center h-9 w-9 bg-fixnix-lightpurple text-white rounded-full text-sm transition-all duration-300 hover:bg-fixnix-lightpurple hover:text-fixnix-white"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      {/* <div className="flex items-center justify-center space-x-4 mt-2">
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200">
            <FontAwesomeIcon icon={faFacebookF} className="text-lg sm:text-xl" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200">
            <FontAwesomeIcon icon={faGoogle} className="text-lg sm:text-xl" />
          </button>
        </div> */}
    </div>
  );
}
