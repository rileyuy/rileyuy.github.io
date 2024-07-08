import React from "react";

const ContentActionButton = ({ children, href }) => {
  return (
    <div className="relative flex items-center justify-center pr-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center px-5 py-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(128,128,128,1)] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_0px_0px_rgba(128,128,128,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
      >
        {children}
      </a>
    </div>
  );
};

export default ContentActionButton;
