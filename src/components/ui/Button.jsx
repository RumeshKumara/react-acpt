import React from "react";

function Button({ name, className, onClick }) {
  return (
    <div>
      <button
        className={`${className} bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointe transition-colors duration-300 ${
          className || ""
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
