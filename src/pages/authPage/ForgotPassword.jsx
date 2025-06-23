import React from "react";
import AuthLeftPanel from "../../components/Auth/AuthLeftPanel";
import AuthRightPanel from "../../components/Auth/AuthRightPanel";
import { Link } from "react-router-dom";
import useDebouncedValue from "../../hooks/useDebounceValue";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

  const debouncedEmail = useDebouncedValue(email, 600);
   
  useEffect(() => {
    if (debouncedEmail) {
      console.log("Debounced Email:", debouncedEmail);
      // Optional: Validate email or call API here
    }
  }, [debouncedEmail]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <AuthLeftPanel />
      <AuthRightPanel>
        <h2 className="text-center text-xl font-semibold mb-1">
          Forgot password
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          please enter your email address
        </p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="demo@gmail.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#04254d] text-white py-2 rounded-full font-semibold hover:bg-[#0c1c5c]"
          >
            Request reset link
          </button>
          <div className="text-center mt-2">
            <Link
              to="/"
              className="text-[#04254d] font-semibold text-sm hover:underline"
            >
              Back to login
            </Link>
          </div>
        </form>
      </AuthRightPanel>
    </div>
  );
};

export default ForgotPassword;
