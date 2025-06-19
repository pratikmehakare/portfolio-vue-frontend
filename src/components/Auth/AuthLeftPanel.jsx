import React from "react";

const AuthLeftPanel = () => {
  return (
    <div className="w-full lg:w-1/2 bg-[#04254d] flex flex-col items-center justify-center text-white px-8 py-10">
      <img
        src="/PortfolioVue_logo.png" 
        alt="PortfolioVue Logo"
        className="mb-6 w-52"
      />
      <p className="text-center text-lg leading-relaxed font-medium">
        Empowering cross-industry enterprises <br />
        to optimize delivery, maximize ROI, <br />
        and surface predictive insights <br />
        through role-based <br />
        AI dashboards.
      </p>
    </div>
  );
};

export default AuthLeftPanel;
