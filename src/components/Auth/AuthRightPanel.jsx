import React from "react";

const AuthRightPanel = ({ children }) => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md shadow-xl p-8 rounded-lg bg-white">
        {children}
      </div>
    </div>
  );
};

export default AuthRightPanel;
