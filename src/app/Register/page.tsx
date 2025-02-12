import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-fixnix-lightpurple">Register</h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm sm:text-md md:text-md lg:text-md xl:text-[15px] 2xl:text-[15px] font-bold text-fixnix-lightpurple">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-fixnix-lightpurple"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm sm:text-md md:text-md lg:text-md xl:text-[15px] 2xl:text-[15px] font-bold text-fixnix-lightpurple">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-fixnix-lightpurple"
              placeholder="********"
            />
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="block text-sm sm:text-md font-bold md:text-md lg:text-md xl:text-[15px] 2xl:text-[15px] text-fixnix-lightpurple">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              required
              className="block w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-fixnix-lightpurple"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-3 text-white bg-fixnix-lightpurple rounded-md hover:bg-fixnix-darkpurple transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-sm sm:text-md text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/Login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
