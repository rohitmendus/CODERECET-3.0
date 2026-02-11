import React, { useEffect } from "react";
import devfolioLogo from "../assets/Devfolio/Devfolio_Logo-White.png";

export default function RefreshReboot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-custom-black px-8 lg:px-32 py-16 lg:py-24 border-b border-custom-gray">
      <h1 className="font-thomeo text-custom-white text-5xl sm:text-6xl lg:text-8xl text-left leading-tight">
        REFRESH <span style={{ color: "#E6F85A" }}>IDEAS.</span>
        <br />
        REBOOT <span style={{ color: "#E6F85A" }}>SOLUTIONS.</span>
      </h1>

      {/* Devfolio Apply Button */}
      <div className="flex flex-col items-center justify-center mt-12">
        <img src={devfolioLogo} alt="DEVFOLIO LOGO" className="h-8 mb-6" />
        <div
          className="apply-button"
          data-hackathon-slug="code-recet-3"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        ></div>
      </div>
    </div>
  );
}
