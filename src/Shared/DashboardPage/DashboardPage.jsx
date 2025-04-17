// DashboardPage.jsx
import React, { useState } from "react";

const DashboardPage = ({
  breadcrumbItems,
  title,
  searchPlaceholder,
  tableHeaders,
  tableData,
  onSearch,
  onReset,
  onAddNew,
  extraButtons = [],
  formFields = [],
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section
      className="dashboard p-5"
      style={{ backgroundColor: "#F3F4F6", direction: "rtl", overflow: "auto" }}
    >
      {/* Breadcrumb Section header */}
      <div className=" rounded-2xl">
        <div className="head p-3 bg-white h-[130px] rounded-lg  mt-5">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 space-x-reverse">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <svg
                      className="rtl:rotate-90 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m5 9-4-4 4-4"
                      />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    className={`text-sm font-medium ${index === breadcrumbItems.length - 1
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
          <h1 className="font-bold text-[#161616] text-3xl pt-5">{title}</h1>
        </div>
      </div>

      {/* Search Filter Section AND Table container  */}
      <div className="bg-[#FFFFFF] mt-10  Wrap-search-Table rounded-2xl">
        <div className=" p-5">
          <div className="head p-3 pb-5 bg-[#F3F4F6] rounded-2xl  mt-1">
            <h1 className="font-bold text-[#161616] text-xl pt-5">تصفية البحث</h1>
            <div className="mt-4">
              {/* <label className="font-normal text-sm">عنوان البند</label> */}
              {/* old grid */}
              {/* <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-10">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-2xl p-2 w-full mt-2 h-[40px] rounded-[1.375rem]"
                    placeholder={searchPlaceholder}
                    onChange={(e) => onSearch && onSearch(e.target.value)}
                  />
                </div>
                <div className="col-span-12 md:col-span-1">
                  <button className="bg-[#0D121C] text-white rounded-3xl p-2 w-full mt-2 h-[40px]">
                    بحث
                  </button>
                </div>
                <div className="col-span-12 md:col-span-1">
                  <button
                    className="bg-[#D2D6DB] text-black rounded-3xl p-2 w-full mt-2 h-[40px]"
                    onClick={onReset}
                  >
                    إعادة تعيين
                  </button>
                </div>
              </div> */}
              {/* new form dynamic */}
              <form>
                <div className="grid grid-cols-12 gap-3 items-end">
                  {formFields.map((field, index) => (
                    <div key={index} className={`col-span-12  ${field.inputCss}`}>
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

                  {/* Search Button */}
                  <div className="col-span-12 md:col-span-1  flex flex-col justify-end h-full">
                    <button
                      type="submit"
                      className="bg-[#0D121C] text-white rounded-3xl p-2 w-full h-[40px]"
                    >
                      بحث
                    </button>
                  </div>

                  {/* Reset Button */}
                  <div className="col-span-12 md:col-span-2   flex flex-col justify-end h-full">
                    <button
                      type="button"
                      className="bg-[#D2D6DB] text-black rounded-3xl p-2 w-full  "
                      onClick={onReset}
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
                {title}
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-end gap-2">
                {extraButtons.map((btn, index) => (
                  <button
                    key={index}
                    className={btn.className}
                    onClick={btn.onClick}
                  >
                    {btn.icon || btn.label}
                  </button>
                ))}
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded-full"
                  onClick={onAddNew}
                >
                  إضافة بند جديد
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="p-4 bg-white text-sm">
              <table className="w-full  text-right border border-gray-200">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th
                        key={index}
                        className="border border-gray-200 p-2"
                        style={{ width: header.width }}
                      >
                        {header.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-200">
                      {tableHeaders.map((header, colIndex) => (
                        <td key={colIndex} className="p-2 text-center">
                          {row[header.key] || row.actions}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination (Optional) */}
              <div className="flex items-center justify-center gap-4 mt-4 text-gray-600 text-sm">
                <button className="hover:text-black">{"<"}</button>
                <span>999</span>
                <button className="hover:text-black">3</button>
                <button className="hover:text-black">2</button>
                <button className="text-green-600 font-semibold underline">1</button>
                <button className="hover:text-black">{">"}</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;