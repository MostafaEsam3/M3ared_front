import React, { useState } from 'react';
import Modal from './Modal';
import ModalTemplate from './ModalTemplate';

const TestModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputs = [
    {
      label: 'عنوان البند باللغة العربيه',
      placeholder: 'عنوان البند باللغة العربيه',
      type: 'text',
      name: 'titleAr',
      
    },
    {
      label: 'عنوان البند باللغة الانجليزية',
      placeholder: 'عنوان البند باللغة الانجليزية',
      type: 'text',
      name: 'titleEn',
    },
    {
        label: 'عنوان البند باللغة الانجليزية',
        placeholder: 'عنوان البند باللغة الانجليزية',
        type: 'text',
        name: 'titleEn',
      },
      {
        label: 'عنوان البند باللغة الانجليزية',
        placeholder: 'عنوان البند باللغة الانجليزية',
        type: 'text',
        name: 'titleEnnn',
      },
    {
      label: 'وصف البند باللغة العربية',
      placeholder: 'وصف البند باللغة العربية',
      type: 'textarea',
      name: 'descriptionAr',
      rows: 4,
    },
    {
      label: 'وصف البند باللغة الانجليزية',
      placeholder: 'وصف البند باللغة الانجليزية',
      type: 'textarea',
      name: 'descriptionEnn',
      rows: 4,
    }, {
        label: 'وصف البند باللغة الانجليزية',
        placeholder: 'وصف البند باللغة الانجليزية',
        type: 'textarea',
        name: 'descriptionEn',
        rows: 4,
      },
  ];

  const buttons = [
    {
      text: 'تعديل',
      type: 'submit',
      className:
        'inline-flex w-full justify-center rounded-3xl bg-[#1B8354] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:w-auto m-0',
      onClick: () => {}, // Optional: handled by form submit
    },
    {
      text: 'الغاء',
      type: 'button',
      className:
        'mt-3 inline-flex w-full justify-center rounded-3xl bg-[#F3F4F6] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto m-0',
      onClick: () => setIsModalOpen(false),
    },
  ];

  const handleSubmit = (formData) => {
    console.log('Form Data:', formData);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
      <ModalTemplate
        isOpen={isOpen}
        onClose={() => setIsModalOpen(false)}
        title="أضافة بند جديد"
        inputs={inputs}
        buttons={buttons}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default TestModal;