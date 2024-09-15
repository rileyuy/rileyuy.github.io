import React from "react";

const ContentButton = ({ children, href, hasShadow = true }) => {
  return (
    <div className="relative flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 flex items-center  justify-center w-fit h-fit bg-white border-4 border-black rounded-full ${
          hasShadow
            ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
            : ""
        } `}
      >
        {children}
      </a>
    </div>
  );
};

export default ContentButton;
