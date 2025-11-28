import React from "react";

const Button = ({ label, onClick, bgColor = "#F6BD60", textColor = "#1D3557", style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        backgroundColor: bgColor,
        color: textColor,
        fontSize: "16px",
        fontWeight: "500",
        transition: "0.3s ease",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        ...style
      }}
    >
      {label}
    </button>
  );
};

export default Button;
