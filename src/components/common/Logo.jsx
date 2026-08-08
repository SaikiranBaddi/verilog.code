import React, { useState } from 'react';
import { siteConfig } from '../../config/site';

export const Logo = ({ className = "h-9 w-auto", showText = false, textClassName = "font-bold text-lg text-slate-900 dark:text-white" }) => {
  const [imgSrc, setImgSrc] = useState(siteConfig.logo);

  const handleError = () => {
    if (imgSrc !== siteConfig.logoFallback) {
      setImgSrc(siteConfig.logoFallback);
    }
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      <img
        src={imgSrc}
        alt={siteConfig.name}
        onError={handleError}
        className={`object-contain rounded-md transition-transform duration-200 hover:scale-105 ${className}`}
      />
      {showText && (
        <span className={`tracking-tight ${textClassName}`}>
          verilog<span className="text-blue-500 font-extrabold">.code</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
