import Link from 'next/link';

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-fixnix-lightpurple">Register</h2>
        
        <form className="space-y-6">
          {['email', 'password', 'confirm-password'].map((field, index) => (
            <div key={index} className="relative">
              <input
                type={field.includes('password') ? 'password' : 'email'}
                id={field}
                required
                className="peer block w-full px-4 pt-4 pb-2 border rounded-md focus:outline-none focus:ring focus:ring-fixnix-lightpurple placeholder-transparent"
                placeholder={field === 'email' ? 'Email' : field === 'password' ? 'Password' : 'Confirm Password'}
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-fixnix-lightpurple transition-all"
              >
                {field === 'email' ? 'Email' : field === 'password' ? 'Password' : 'Confirm Password'}
              </label>
            </div>
          ))}

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
