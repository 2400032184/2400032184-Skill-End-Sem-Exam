import React from "react";

const Card = ({ title, content, bgColor = "#FFC8DD", textColor = "#3A0CA3", style }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: bgColor,
        color: textColor,
        padding: "24px",
        borderRadius: "14px",
        minHeight: "180px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        ...style
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
