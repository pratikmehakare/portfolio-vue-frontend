import React from "react";
import AuthLeftPanel from "../../components/Auth/AuthLeftPanel";
import AuthRightPanel from "../../components/Auth/AuthRightPanel";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <AuthLeftPanel />
      <AuthRightPanel>
        <h2 className="text-center text-xl font-semibold mb-6">
          Sign in your account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="******"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#04254d] text-white py-2 rounded-full font-semibold hover:bg-[#0c1c5c]"
          >
            Sign In
          </button>
          <div className="text-center mt-2">
            <Link
              to="/forgot-password"
              className="text-[#04254d] font-semibold text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </AuthRightPanel>
    </div>
  );
};

export default Login;
