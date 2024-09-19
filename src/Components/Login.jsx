import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-stretch text-white">
      {/* Left Section with Background Image */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")',
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </span>
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </span>
          <span>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Right Section with Form */}
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")',
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6">
            <svg viewBox="0 0 247 31" className="w-auto h-7 sm:h-8 inline-flex">
              <path
                fill="rgba(99,102,241, .8)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.055-3.382 12.758-10.146-2.553 3.382-5.531 4.65-8.931 3.805-1.943-.482-3.33-1.882-4.867-3.432C34.733 4.417 31.836 1.496 25.517 1.496zm19.338 10.221C39.998 10.371 37.74 8.775 36.96 7.34l-5.09-8.38H4.64V1.496h1.288l3.5 5.8c.748 1.242 1.496 1.741 2.493 1.82 1.345.089 1.79-1.483 1.79-1.832 0-.569-1.035-1.071-1.349-.76l-5.88-5.96h1.28c.706 0 .999-.392.878-.982-.121-.594-.794-.963-1.29-.963H2.5c-.497 0-.854.367-.854.86 0 .576.407 1.065.854 1.073h1.288L0 10.644v2.566c0 .574.407 1.066.854 1.074h1.292c.497 0 .854-.393.854-.866v-5.4l3.707 4.838c1.593 1.643 3.923 2.494 5.855 2.494 2.683 0 4.19-1.549 4.19-4.208 0-2.193-.881-3.525-1.514-4.207z"
              />
            </svg>
          </h1>
          <p className="text-gray-100">Login with your social media account</p>
          <div className="flex justify-center space-x-4 my-3">
            {/* Social Media Icons */}
            <button className="bg-white text-black px-4 py-2 rounded-lg">Facebook</button>
            <button className="bg-white text-black px-4 py-2 rounded-lg">Twitter</button>
            <button className="bg-white text-black px-4 py-2 rounded-lg">Instagram</button>
          </div>
          <p className="text-gray-100">or use your email account:</p>
          {/* Login Form */}
          <div className="mt-5">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 mb-3 w-full bg-gray-900 text-white rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 mb-3 w-full bg-gray-900 text-white rounded-lg"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg w-full">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
