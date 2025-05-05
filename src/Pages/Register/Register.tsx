import React from 'react';
import HeaderLogo from "../../assets/Header.svg";

const Register: React.FC = () => {
  return (
    <>
      <div className="background-image bg-cover bg-center h-screen flex items-center justify-center text-right">
        <div className="register">
          <div>
            <img src={HeaderLogo} alt="Logo" />
          </div>
          <form className="bg-white shadow-md rounded px-14 pt-6 pb-8 mb-4 w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                اسم المستخدم
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                كلمه المرور
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row justify-between">
              <div>
                <button
                  type="submit"
                  className="text-black font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full text-x"
                >
                  نسيت كلمه المرور
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#1B8354] text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full sm:mt-2 md:mt-0"
                >
                  دخول الان
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="copyright">
        <h1>
          جميع الحقوق محفوظة للهيئة العامة للمعارض والمؤتمرات © 2025
        </h1>
      </div>
    </>
  );
};

export default Register;
