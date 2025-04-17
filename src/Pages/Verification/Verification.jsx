// AuthPage.jsx
import React, { useState } from "react";
import AuthContainer from "./../../Shared/AuthContainer/AuthContainer.jsx";

export default function Verification() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formFields = [
    {
      id: "code",
      label: "  كود التحقق",
      type: "text",
      placeholder: "  كود التحقق",
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    
  ];

  const buttons = [
    {
      label:"التالي",
      type: "submit",
      className: "bg-[#1B8354] hover:bg-blue-700 text-white",
      onClick: () => console.log("Change Password clicked"),
    },
    {
      label: "رجوع",
      type: "button",
      className: " hover:bg-blue-700 text-[#161616] mt-2",
      onClick: () => console.log("Back clicked"),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, password });
  };

  return (
    <AuthContainer
      title=" كود التحقق"
      formFields={formFields}
      buttons={buttons}
      onSubmit={handleSubmit}
    />
  );
}