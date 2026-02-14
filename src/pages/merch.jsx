import React from "react";
import isThatAll from "../assets/isthatall.png";
import merchMask from "../assets/merch_mask.png";
import nopeImg from "../assets/NOPE.png";
import FigmaRegisterButton from "../components/FigmaRegisterButton";
import "../App.css";

export default function MerchSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-custom-black py-16 px-4 overflow-hidden">
      {/* isthatall.png and NOPE.png overlay */}
      <div className="relative flex flex-col items-center mb-4" style={{ zIndex: 2 }}>
        <img src={isThatAll} alt="Is That All?" className="w-56 sm:w-72 md:w-80 drop-shadow-lg" style={{ marginBottom: '-1.5rem' }} />
        <img src={nopeImg} alt="NOPE!" className="w-40 sm:w-56 md:w-64 drop-shadow-lg" style={{ marginTop: '-1.5rem' }} />
      </div>
      {/* Text */}
      <div className="z-10 w-full flex flex-col items-center">
        <p className="text-custom-white text-center text-base sm:text-lg md:text-xl mb-8 max-w-xl" style={{ fontFamily: 'TacticSans' }}>
          Every one who gets selected gets Goodies!<br/>
          T-Shirts, stickers, you name it!
        </p>
      </div>
      {/* merch_mask.png full width as background */}
      <img src={merchMask} alt="Merch Mask" className="absolute left-0 right-0 mx-auto w-full h-auto" style={{ top: '18%', transform: 'translateY(-60%)', maxHeight: '60vh', objectFit: 'cover', opacity: 0.85, zIndex: 0, pointerEvents: 'none', userSelect: 'none', position: 'absolute' }} />
      {/* Devfolio Button and text */}
      <div className="relative z-10 w-full flex flex-col items-center mt-32">
        <div className="w-full max-w-xs mb-4">
          <FigmaRegisterButton />
        </div>
        <p className="text-custom-white text-center text-base sm:text-lg mt-2" style={{ fontFamily: 'TacticSans' }}>
          If haven’t already!
        </p>
      </div>
    </div>
  );
}
