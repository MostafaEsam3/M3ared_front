// AuthPage.jsx
import React, { useState } from "react";
import AuthContainer from "./../../Shared/AuthContainer/AuthContainer.jsx";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formFields = [
    {
      id: "username",
      label: "اسم المستخدم",
      type: "text",
      placeholder: "اسم المستخدم",
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      id: "password",
      label: "كلمة المرور",
      type: "password",
      placeholder: "كلمة المرور",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const buttons = [
    {
      label: "تغيير كلمة المرور",
      type: "submit",
      className: "bg-[#1B8354] hover:bg-blue-700 text-white",
      onClick: () => console.log("Change Password clicked"),
    },
    {
      label: "رجوع",
      type: "button",
      className: "bg-gray-500 hover:bg-blue-700 text-white",
      onClick: () => console.log("Back clicked"),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, password });
  };

  return (
    <AuthContainer
      title="تسجيل الدخول"
      formFields={formFields}
      buttons={buttons}
      onSubmit={handleSubmit}
    />
  );
}