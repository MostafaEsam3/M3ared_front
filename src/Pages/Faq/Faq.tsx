import React, { useState } from 'react';
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import ModalTemplate from '../../Shared/Modal/ModalTemplate';
import arrow from "./../../assets/arrow-left.svg";
import pagination from "../../assets/_PaginationItem.svg";


interface FaqProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InputField {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  rows?: number;
}

interface ButtonConfig {
  text: string;
  type: 'submit' | 'button';
  className: string;
  onClick: () => any;
}

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  inputCss: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Faq: React.FC<FaqProps> = ({ isOpen, onClose }) => {
  const breadcrumbItems = [
    { label: "لوحة التحكم", href: "#" },
    { label: "أجوبتنا", href: "#" },
  ];

  const formFields: FormField[] = [
    {
      id: "Address",
      label: "عنوان البند",
      type: "text",
      placeholder: "عنوان البند ",
      inputCss: "col-span-12 md:col-span-10",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const inputs: InputField[] = [
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
    },
    {
      label: 'وصف البند باللغة الانجليزية',
      placeholder: 'وصف البند باللغة الانجليزية',
      type: 'textarea',
      name: 'descriptionEn',
      rows: 4,
    },
  ];

  const buttons: ButtonConfig[] = [
    {
      text: 'تعديل',
      type: 'submit',
      className:
        'inline-flex w-full justify-center rounded-3xl bg-[#1B8354] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:w-auto m-0',
      onClick: () => { },
    },
    {
      text: 'الغاء',
      type: 'button',
      className:
        'mt-3 inline-flex w-full justify-center rounded-3xl bg-[#F3F4F6] px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto m-0',
      onClick: () => setIsModalOpen(false),
    },
  ];

  const handleSubmit = (formData: Record<string, any>) => {
    console.log('Form Data:', formData);
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        className="dashboard p-6"
        style={{ backgroundColor: "#F3F4F6", direction: "rtl", overflow: "auto" }}
      >
        {/* Breadcrumb Section header */}
         <div className="rounded-2xl">
        <div className="head p-6 bg-white rounded-lg ">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="inline-flex gap-1 items-center">
                  {index > 0 && (
                    <img src={arrow} alt="" />
                  )}
                  <a
                    href={item.href}
                    className={`text-sm font-medium ${
                      index === breadcrumbItems.length - 1
                        ? "text-[#9DA4AE]"
                        : "text-[#384250]"
                    } hover:text-[#384250]`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="font-bold text-[#161616] text-3xl pt-6">{"أجوبتنا"}</h1>
        </div>
      </div>

        <div className="bg-[#FFFFFF] mt-5 Wrap-search-Table rounded-2xl">
          <div className=" p-5">
            <div className="head p-8 bg-[#F3F4F6] rounded-2xl  mt-1">
              <h1 className="font-bold text-[#161616] text-xl pt-5">تصفية البحث</h1>
              <div className="mt-4">

                {/* new form dynamic */}
                <form>
                  <div className="grid grid-cols-12 gap-3 items-end">
                    {formFields.map((field, index) => (
                      <div key={index} className={`col-span-12 lg:col-span-9 md:col-span-6`}>
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
                          className=" shadow appearance-none border rounded-3xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </div>
                    ))}

                    {/* Search Button */}
                    <div className="col-span-12 lg:col-span-1 md:col-span-3 flex flex-col justify-end h-full">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        type="submit"
                        className="bg-[#0D121C] text-white rounded-3xl p-2 w-full h-[40px]"
                      >
                        بحث
                      </button>
                    </div>

                    {/* Reset Button */}
                    <div className="col-span-12 lg:col-span-2 md:col-span-3 flex flex-col justify-end h-full">
                      <button
                        type="button"
                        className="bg-[#D2D6DB] text-black rounded-3xl p-2 w-full  "
                      // onClick={onReset}
                      >
                        إعادة تعيين
                      </button>
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className=" mt-7">
            <div className="head p-3 bg-white rounded-2xl  mt-5">
              <div className="grid grid-cols-12 items-center rounded px-4 py-2">
                <div className="col-span-6 text-right font-bold text-2xl">
                  {"قائمة الاسئلة الشائعة"}
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-end gap-2">
                  <button
                    className="bg-[#1B8354] text-[#FFFFFF] px-4 py-1 rounded-full text-base" >
                    إضافة سؤال جديد
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="p-4  text-sm">

                <div className='grid grid-cols-12 gap-2 p-2 '>
                  <div className='col-span-12 md:col-span-3 border border-gray-300 p-5 rounded-lg'>
                    <h1 className='text-[#1F2A37] font-bold text-lg'>مجلس الوزراء يوافق على الترتيبات التنظيمية للهيئة العامة للمعارض والمؤتمرات</h1>
                    <div className="flex mt-3 gap-5">
                      <button
                        className="bg-gray-300 border p-1 rounded-full"
                      // onClick={handleEditClick} // Trigger modal
                      >
                        <img src={editImage} alt="edit" />
                      </button>
                      <button className="bg-gray-300 border p-1 rounded-full">
                        <img src={deleteImage} alt="delete" />
                      </button>
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-3 border border-gray-300 p-5 rounded-lg'>
                    <h1 className='text-[#1F2A37] font-bold text-lg'>مجلس الوزراء يوافق على الترتيبات التنظيمية للهيئة العامة للمعارض والمؤتمرات</h1>
                    <div className="flex mt-3 gap-3">
                      <button
                        className="bg-gray-300 border p-1 rounded-full"
                      // onClick={handleEditClick} // Trigger modal
                      >
                        <img src={editImage} alt="edit" />
                      </button>
                      <button className="bg-gray-300 border p-1 rounded-full">
                        <img src={deleteImage} alt="delete" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Pagination (Optional) */}
                <div className="flex items-center justify-center gap-4 mt-4 text-gray-600 text-sm">
                  <button className="hover:text-black">{"<"}</button>
                  <button className="text-green-600 font-semibold underline">1</button>
                  <button className="hover:text-black">2</button>
                  <button className="hover:text-black">3</button>
                   <button className="hover:text-black"><img src={pagination} alt="" /></button>

                  <span>999</span>
                  <button className="hover:text-black">{">"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalTemplate
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="أضافة بند جديد"
        inputs={inputs}
        buttons={buttons}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Faq;
