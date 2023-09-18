import Link from "next/link";

const SignupForm = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-sky-50 ">
          <div className=" bg-white rounded-lg shadow  border md:mt-0 sm:max-w-md xl:p-0  bg-white  border-gray-700  lg:max-w-2xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight    md:text-2xl text-black">
                Sign Up
              </h1>

              <p className="text-sm font-light text-gray-500  text-gray-400">
                Already have an account ?{" "}
                <Link
                  href="/login"
                  className="font-medium text-sm text-primary-600 hover:underline  text-blue-500"
                >
                  Login
                </Link>
              </p>

              <form className="space-y-4 md:space-y-6" action="#">
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 h-12   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600  placeholder-gray-400    focus:ring-blue-500  focus:border-blue-500"
                    placeholder="Email"
                    required=""
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-bold text-black"
                  >
                    Email
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 h-12   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600  placeholder-gray-400    focus:ring-blue-500  focus:border-blue-500"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>

                {/* //Password */}
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm   text-black font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" border border-gray-300    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      border-gray-600 h-12  placeholder-gray-400  text-black  focus:ring-blue-500  focus:border-blue-500"
                    required=""
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm   text-black font-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="password"
                    placeholder="••••••••"
                    className=" border border-gray-300    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      border-gray-600 h-12  placeholder-gray-400  text-black  focus:ring-blue-500  focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold bg-blue-600 hover:bg-blue-700 focus:ring-4 h-12 focus:outline-black focus:ring-primary-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center      focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>

              <p className="text-sm text-center font-light text-black">
                or sign in with
              </p>

              <button
                type="submit"
                className="w-full border border-black text-black font-bold hover:bg-blue-700 focus:ring-4 h-12 focus:outline-black focus:ring-primary-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-700 focus:ring-primary-800"
              >
                Sign In With Google
              </button>

              <p className="text-xs text-center text-black">
                By creating an account, you agree to our Terms of Service and
                Privacy Statement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
