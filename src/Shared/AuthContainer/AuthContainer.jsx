// AuthContainer.jsx
import React from "react";
import "./AuthContainer.css"; // Add your styles here

const AuthContainer = ({
  title,
  formFields,
  buttons,
  backgroundImage = "bg-cover bg-center h-screen", // Default background style
  containerClass = "text-right rounded-lg shadow-lg p-8 max-w-lg w-full bg-white", // Default container style
  onSubmit,
}) => {
  return (
    <>

    <div className={`background-image ${backgroundImage} flex items-center justify-center`}>
      <div className={containerClass}>
        <h2 className="text-2xl font-bold mb-10">{title}</h2>
        <form onSubmit={onSubmit}>
          {formFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ))}
          {buttons.map((button, index) => (
            <button
              key={index}
              type={button.type || "button"}
              className={`${button.className} font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </form>
      </div>
    </div>
    <div className="copyright ">
    <h1>
    جميع الحقوق محفوظة للهيئة العامة للمعارض والمؤتمرات © 2025
    </h1>
  </div>
  </>
  );
};

export default AuthContainer;