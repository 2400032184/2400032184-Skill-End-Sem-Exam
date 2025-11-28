import React, { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";

const DashboardPage = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1 style={{ marginBottom: "25px", color: "#457B9D" }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          width: "100%"
        }}
      >
        <div>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something… ✨"
          />

          <Button
            label="Show Text"
            onClick={() => alert(text)}
            bgColor="#F6BD60"
            textColor="#4a3728"
            style={{ marginTop: "20px" }}
          />
        </div>

        <Card
          title="Dashboard Card"
          content="Reusable pastel components working beautifully!"
          bgColor="#FFC8DD"
          textColor="#3A0CA3"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
