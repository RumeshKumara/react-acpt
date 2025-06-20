import React from "react";

const TextInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 border rounded-md ${className}`}
    />
  );
};

export default TextInput;
