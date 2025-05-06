import React, { useState, FC } from "react";
import arrow from "../../assets/arrow-left.svg";
import pagination from "../../assets/_PaginationItem.svg";

// All interfaces replaced with type aliases using `any`
type BreadcrumbItem = any;
type TableHeader = any;
type TableData = any;
type ExtraButton = any;
type FormField = any;

type DashboardPageProps = {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  titleTable?:string;
  searchPlaceholder: string;
  tableHeaders: TableHeader[];
  tableData: TableData[];
  onSearch: (value: string) => void;
  onReset: () => void;
  onAddNew: () => void;
  extraButtons?: ExtraButton[];
  formFields?: FormField[];
};

const DashboardPage: FC<DashboardPageProps> = ({
  breadcrumbItems,
  title,
  titleTable,
  searchPlaceholder,
  tableHeaders,
  tableData,
  onSearch,
  onReset,
  onAddNew,
  extraButtons = [],
  formFields = [],
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <section
      className="dashboard p-6 bg-red-600"
      style={{ backgroundColor: "#F3F4F6", direction: "rtl",  }}
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
          <h1 className="font-bold text-[#161616] text-3xl pt-6">{title}</h1>
        </div>
      </div>

      {/* Search Filter Section AND Table container */}
      <div className="bg-[#FFFFFF] mt-5 Wrap-search-Table rounded-2xl">
        <div className="p-5">
          <div className="head p-8  bg-[#F3F4F6] rounded-2xl mt-1">
            <h1 className="font-bold text-[#161616] text-xl ">تصفية البحث</h1>
            <div className="mt-4">
              <form>
                <div className="grid grid-cols-12 gap-3 items-end">
                  {formFields.map((field, index) => (
                    <div key={index} className={`col-span-12 ${field.inputCss}`}>
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
                  <div className="col-span-12 lg:col-span-1 md:col-span-3 flex flex-col justify-end h-full">
                    <button
                      type="submit"
                      className="bg-[#0D121C] text-white rounded-3xl p-2 w-full"
                    >
                      بحث
                    </button>
                  </div>

                  {/* Reset Button */}
                  <div className="col-span-12 lg:col-span-2 md:col-span-3 flex flex-col justify-end h-full">
                    <button
                      type="button"
                      className="border border-[#d2d6db]   text-black rounded-3xl p-2 w-full "
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
        {/* <div className="table-head mb-4  rounded-lg py-4 px-8 flex gap-4 flex-col lg:flex-row justify-between items-start lg:items-center">
              <h3 className="text-[#161616] font-bold text-[24px]">
                قائمة حركات الحضور و الانصراف للموظفين
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <img src={"excel"} alt="" />
                <img src={"print"} alt="" />
                <button className="px-4 py-2 flex gap-1 items-center bg-[#1b8354] text-white rounded-full">
                  <img src={"add"} alt="" />
                  إضافة حركة جديدة
                </button>
              </div>
            </div> */}

        {/* Table Section */}
        <div className="mt-7">
          <div className="head p-3 bg-white rounded-2xl mt-5">
            <div className="grid grid-cols-12 items-center rounded px-4 py-2">
              <div className="col-span-6 text-right font-bold text-2xl">
                {titleTable}
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-end gap-2 items-center">
                {extraButtons.map((btn, index) => (
                  // <button
                  //   key={index}
                  //   className={btn.className}
                  //   onClick={btn.onClick}
                  // >
                  //   {btn.icon || btn.label }
                  // </button>
                  <div  key={index}
                    className={btn.className}
                    onClick={btn.onClick}>
                    {btn.icon}

                 </div>
                ))}
                <button className="px-4 py-2 flex gap-1 items-center bg-[#1B8354] text-white rounded-full">
                  <img src={"add"} alt="" />
إضافة نوع خدمة جديد                </button>
              </div>
            </div>

            {/* Table */}
            <div className="p-4 bg-white text-sm">
              <table className="w-full text-right border border-gray-200">
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
                        <td key={colIndex} className="p-2 text-right text-[16px]">
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
              <button className="text-green-600 font-semibold underline">1</button>
              <button className="hover:text-black">2</button>
              <button className="hover:text-black">3</button>
              <button className="hover:text-black"><img src={pagination} alt="" /></button>
              <span>999</span>
              <button className="hover:text-black">{">"}</button>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className=" mt-[100px] pb-5">
                        <h1 className=" text-[#161616] font-bold text-sm">
                            جميع الحقوق محفوظة للهيئة العامة للمعارض والمؤتمرات © 2025
                        </h1>
                    </div>
    </section>

  );
};

export default DashboardPage;
