import React from "react";

const Input = ({ value, onChange, placeholder, type = "text", style }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #d0d7e2",
        background: "#ffffff",
        fontSize: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        outline: "none",
        ...style
      }}
    />
  );
};

export default Input;
