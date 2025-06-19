import React from "react";

const AuthLeftPanel = () => {
  return (
    <div className="w-full lg:w-1/2 bg-[#04254d] flex flex-col items-center justify-center text-white px-4 py-8 lg:px-8 lg:py-10">
      <img
        src="/PortfolioVue_logo.png"
        alt="PortfolioVue Logo"
        className="mb-4 w-40 lg:w-62"
      />
      <p className="text-center text-base lg:text-lg leading-relaxed font-medium">
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
