import React, { useState } from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";

const ProfilePage = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1 style={{ marginBottom: "25px", color: "#2A9D8F" }}>Profile</h1>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email 🌿"
          />

          <Button
            label="Save Profile"
            onClick={() => alert("Saved ✔")}
            bgColor="#A8DADC"
            textColor="#1D3557"
            style={{ marginTop: "20px" }}
          />
        </div>

        <Card
          title="Profile Information"
          content="You can reuse components with custom pastel styles!"
          bgColor="#D8F3DC"
          textColor="#1B4332"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
