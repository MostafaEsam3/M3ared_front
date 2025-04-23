import React, { useState } from "react";
import AuthContainer from "../../Shared/AuthContainer/AuthContainer";

const Verification: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formFields: any[] = [
    {
      id: "code",
      label: "  كود التحقق",
      type: "text",
      placeholder: "  كود التحقق",
      value: username,
      onChange: (e: any) => setUsername(e.target.value),
    },
  ];

  const buttons: any[] = [
    {
      label: "التالي",
      type: "submit",
      className: "bg-[#1B8354] hover:bg-blue-700 text-white",
      onClick: () => console.log("Change Password clicked"),
    },
    {
      label: "رجوع",
      type: "button",
      className: "hover:bg-blue-700 text-[#161616] mt-2",
      onClick: () => console.log("Back clicked"),
    },
  ];

  const handleSubmit = (e: any) => {
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
};

export default Verification;
