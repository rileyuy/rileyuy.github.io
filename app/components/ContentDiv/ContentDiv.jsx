import React from "react";

const ContentDiv = ({ children, customStyles }) => {
  return (
    <div className={`relative ${customStyles}`}>
      <div className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default ContentDiv;
