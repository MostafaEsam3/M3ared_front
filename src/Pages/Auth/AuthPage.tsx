import React, { useState } from "react";
import AuthContainer from "../../Shared/AuthContainer/AuthContainer.jsx";

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formFields: any[] = [
    {
      id: "username",
      label: "اسم المستخدم",
      type: "text",
      placeholder: "اسم المستخدم",
      value: username,
      onChange: (e: any) => setUsername(e.target.value),
    },
    {
      id: "password",
      label: "كلمة المرور",
      type: "password",
      placeholder: "كلمة المرور",
      value: password,
      onChange: (e: any) => setPassword(e.target.value),
    },
  ];

  const buttons: any[] = [
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

  const handleSubmit = (e: any) => {
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
};

export default AuthPage;