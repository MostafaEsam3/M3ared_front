import React, { useState } from 'react';
import xImage from '../../assets/Icon.svg';

// Define props for the ModalTemplate
const ModalTemplate = ({
  isOpen = false,
  onClose = () => {},
  title = '',
  inputs = [],
  buttons = [],
  onSubmit = () => {},
}) => {
  // State to manage form data
  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Render nothing if modal is closed
  if (!isOpen) return null;

  return (
    <>
      <div
        className="relative z-10"
        style={{ direction: 'rtl' }}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Background Overlay */}
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Modal Container */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
              {/* Modal Content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Header with Icon */}
                <div className="sm:flex flex-row-reverse">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-5 sm:w-5">
                    <img src={xImage} alt="x" />
                  </div>
                </div>

                {/* Modal Title */}
                <h1 className="text-xl font-bold">{title}</h1>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="container-input mt-2">
                    <div className="grid grid-cols-12 gap-4">
                      {/* Dynamic Inputs */}
                      {inputs.map((input, index) => (
                        <div
                          key={index}
                          className="col-span-12 md:col-span-6"
                        >
                          <label className="font-normal text-sm">
                            {input.label}
                          </label>
                          {input.type === 'textarea' ? (
                            <textarea
                              name={input.name}
                              rows={input.rows || 4}
                              className="border border-[#9DA4AE] rounded-lg p-2 w-full mt-2 rounded-[1.375rem]"
                              placeholder={input.placeholder}
                              onChange={handleInputChange}
                              value={formData[input.name] || ''}
                            ></textarea>
                          ) : (
                            <input
                              type={input.type || 'text'}
                              name={input.name}
                              className="border border-gray-300 rounded-3xl p-2 w-full mt-2 h-[40px] rounded-[1.375rem]"
                              placeholder={input.placeholder}
                              onChange={handleInputChange}
                              value={formData[input.name] || ''}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Buttons */}
                  <div className="bg-gray-50 sm:flex sm:flex-row-reverse gap-2 mt-4">
                    {buttons.map((button, index) => (
                      <button
                        key={index}
                        type={button.type || 'button'}
                        className={button.className}
                        onClick={button.onClick}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTemplate;