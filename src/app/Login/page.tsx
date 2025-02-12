import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-fixnix-lightpurple">Login</h2>
        
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

          <p className="text-xs sm:text-sm text-right">
            <Link href="/forgot-password" className="text-fixnix-darkpurple hover:underline">
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-full py-2 mt-3 text-white bg-fixnix-lightpurple rounded-md hover:bg-fixnix-darkpurple transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm sm:text-md text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link href="/Register" className="text-blue-600 hover:underline">
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
        
        {/* <div className="flex items-center justify-center space-x-4 mt-2">
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200">
            <FontAwesomeIcon icon={faFacebookF} className="text-lg sm:text-xl" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200">
            <FontAwesomeIcon icon={faGoogle} className="text-lg sm:text-xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
