import React from "react";

function Button({ children, onClick, bgColor, textColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
