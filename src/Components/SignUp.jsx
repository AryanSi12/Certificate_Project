import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useForm } from "react-hook-form";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // State to hold the captcha token
  
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const manageLogin = async (data) => {
    console.log("Form data submitted:", data);
    if (!captchaToken) {
      console.error("Please complete the reCAPTCHA challenge.");
      return;
    }
    // Send form data and captcha Token to your backend for verification
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captchaToken }),
    });    

      const result = await response.json();
      // Handle the result of the verification
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const onChange = (token) => {
    console.log("reCAPTCHA token:", token);
    setCaptchaToken(token); // Store the token for verification
  };

  useEffect(() => {
    // Check if reCAPTCHA is loaded
    const handleLoad = () => {
      setIsCaptchaReady(true);
    };
  
    window.onload = handleLoad;
    return () => {
      window.onload = null; // Clean up the event listener
    };
  }, []);
  
  const validatePasswordMatch = (value) => {
    const password = watch('password');
    return value === password || 'Passwords do not match';
  };

  return (
    <section className="min-h-screen overflow-hidden">
    <div className="h-screen w-full flex items-stretch text-white">

      {/* Left Section with Background Image */}
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80")',
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-10 z-10 text-left">
          <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
          <p className="text-2xl my-4">Join us and enjoy exclusive features.</p>
        </div>
      </div>

      {/* Right Section with Form */}
      <div
      className="lg:w-1/2 w-full flex items-center justify-center text-center px-4 lg:px-16"
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
          <h1 className="my-6 text-3xl font-bold">Sign Up</h1>
          <p className="text-center text-md text-white-600 mt-2">Already have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>
          
          <p className="text-gray-100">or use your email account:</p>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit(manageLogin)} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
          <div className="pb-2 pt-4">

             {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 block mb-3 w-full p-4 text-mb rounded-lg bg-black"
              {...register("fullName", 
                { required: "Full name is required"
              })}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 block mb-3 w-full p-4 text-mb rounded-lg bg-black"
              {...register("email", {
                required: "Email is required",
                pattern:{
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            {/* Password */}
            <div className="relative mb-3">
            <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="px-4 py-2 block mb-3 w-full p-4 text-mb rounded-lg bg-black"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-4"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative mb-3">
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="px-4 py-2 block mb-3 w-full p-4 text-mb rounded-lg bg-black"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: validatePasswordMatch,
                    })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordConfirmVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-4"
                  >
                    {showPasswordConfirm ? "Hide" : "Show"}
                  </button>
                  {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>

            {/* reCAPTCHA */}
            <div className="pb-4 pt-3 flex items-center justify-center">
              <ReCAPTCHA sitekey="6LfZ2lIqAAAAACwrrNDbFJ9VFyzV2jQ8Z604HZEj" 
              onChange={onChange}
              />
            </div>
            <button 
            type= "submit" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-40 font-bold">
              Sign Up
              </button>
          </div>
          </form>
          <div className="flex items-center justify-between">
                        <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
                        <span className="mb-2 text-sm uppercase mx-6 text-gray-400">Or</span>
                        <div className="mb-3 w-full h-[1px] bg-gray-300"></div>
                    </div>
          <p className="mb-2 text-gray-100 font-bold">Sign up with</p>
          <div className="space-y-3">
            <a href="#" className="flex items-center justify-center text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-full w-48 mx-auto">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path>
                <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path>
                <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path>
                <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path>
              </svg>
              <span>Google</span>
            </a>
            <a href="#" className="flex items-center justify-center text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-full w-48 mx-auto">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 124.8 123.36">
                <defs>
                  <style>
                    {`.cls-1,.cls-2{fill:none;}.cls-1{clip-rule:evenodd;}.cls-3{clip-path:url(#clip-path);}.cls-4{clip-path:url(#clip-path-2);}.cls-5{fill:#fff;}`}
                  </style>
                  <clipPath id="clip-path" transform="translate(0.69 0.51)">
                    <path className="cls-1" d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path>
                  </clipPath>
                  <clipPath id="clip-path-2" transform="translate(0.69 0.51)">
                    <rect className="cls-2" width="122.88" height="122.31"></rect>
                  </clipPath>
                </defs>
                <g className="cls-3">
                  <g className="cls-4">
                    <image
                      width="260"
                      height="257"
                      transform="matrix(0.48, 0, 0, -0.48, 0, 123.36)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEBCAYAAACexdu5AAAACXBIWXMAABcRAAAXEQHKJvM/AAAEFUlEQVR4Xu3dwXEdIRBFUb4kZ+HwHJbDcxrSeAG+hctVJgDO2cyG9aumoYfX8zzP68evAdzr+fl9jDHG22EdcJGPMcZ4vV6ndcAFPubn+f8q4Aq2DEBmhWDLAAxbBmCzAkGFAKgQgM3qIRxWAVdwygBkVQhyAdBUBDZKAyCaikBmIDxfh2XADda0o50DUFNRhQBoKgIbgQBEIABx7AhEhQBEIACZW4a398My4AYqBCACAYhZBiCrh6BQAFQIwGZOO55WAVewVwDin4pAVlNRIACaisDG689ANBWBeLkJyOoheP0Z8Bw8sNFUBKJCAKKbCEQgAHHsCGQ99npaBtxAaQDEsSMQ045ANBWBqBCAKA2AeA4eiAoBiEAAIhCA6CEAUSEAWcNNcgEwywBs3FQEYpYBiAoByHr9WYUAqBCAzXqXwSkD4KEWYOPqMhDHjkBsGYCYZQCyjh1VCEAXk3QVAT0EYCMQgDh2BLIqBLMMQBXC+2EZcAPTjkD0EICsm4qnZcANlAZAjD8D0VQEoqkIxNVlIEoDIJqKQOY9hNMq4AoqBCB6CEDWL9RMOwIqBGDjbUcgq6noYhJglgHYaCoCWRXC52EZcIP1xyRNRaAK4bAKuIKry0D8IAWIl5uAqBCA+IUakFUh6CoCph2BzbqHYMsAuIcAbGwZgPhBChAVApA17XhaBtxAhQBEIAARCEAEAhCzDEBMOwKxZQAiEIAYbgJilgGILQOQOctwWgVcQQ8BiC0DkPUcvFwA+smql5sALzcBG8NNQGwZgKx/KtoyAO4hABulARBNRSCaikDcQwCiqQjElgHIqhDeD8uAG6xfqKkQADcVgY2mIhBNRSCaikBWhfB5WAbcwCwDEMcLQNax42kZcAMVAhCBAMTFJCDr5Sb3EAA3FYHNPGVQIQBDUxHYuLoMRFMRiKYiEBUCEBeTgDhlADLvIZxWAVfwgxQgtgxANBWBzED4clMR7vZtjOEeArBxUxGIHgIQ/0MAYvwZGLUTD6uAi8xY0EQAhqYisHEPAYimIjDGmEWB8Wcgxp+BOHYEoqkIRFMRGH82C7YMQAw3AfkYY4zH/xDgcnOzoEIAYpYBiKYiEIEAxJYBiAoBiGlHILYMQPxTEYiXm4Dx103F8aa3CDhlADa2DMCwZQD+oUIAxt/jz/9dCNzCb9iBaB4AEQhAzDIAUSEAEQhAnDIAUSEAcTEJiFMGIAIByBpuOqwCrqBCACIQgNgyAFEhAHExCYhAADJvKtoyAEOFAGwEAhCBAEQgAHEPAYgKAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCA/AafC2PbZ0osjAAAAABJRU5ErkJggg=="
                    />
                  </g>
                </g>
                <path className="cls-5" d="M85.36,78.92l2.72-17.76H71V49.63c0-4.86,2.38-9.59,10-9.59H88.8V24.92a94.45,94.45,0,0,0-13.75-1.2c-14,0-23.21,8.5-23.21,23.9V61.16H36.24V78.92h15.6v43.57H71V78.92Z" transform="translate(0.69 0.51)"></path>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center justify-center text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded-full w-48 mx-auto">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.31">
                <defs>
                  <style>
                    {`.cls-1{fill:#0a66c2;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#fff;}`}
                  </style>
                </defs>
                <title>linkedin-app</title>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect
                x="0"
                y="0"
                width="100"
                height="100"
                rx="28"
                className="cls-1"
                />
                </svg>

                <path className="cls-2" d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default SignUp;
