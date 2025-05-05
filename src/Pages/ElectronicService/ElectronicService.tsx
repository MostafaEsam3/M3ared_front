
import React from "react";
import DashboardPage from "../../Shared/DashboardPage/DashboardPage";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import { useCrud } from "../../Service/GeniricService/useCrud";
import exelImage from "./../../assets/exel.svg";
import print from "./../../assets/exel2.svg";
import activeicone from "./../../assets/Cell content.svg";
import deactiveicone from "./../../assets/deactive.svg";



const ElectronicService: React.FC = () => {
  //  const { getQuery, create, update, remove } = useCrud('/categories', undefined, {
  //         staleTime: 1000 * 30,        // 30 seconds
  //         refetchOnMount: true,
  //       });
  
  const breadcrumbItems: any[] = [
    { label: "لوحة التحكم", href: "#" },
    { label: "الخدمات الالكترونية", href: "#" },
  ];

  const tableHeaders: any[] = [
    { label: "نوع الخدمة باللغة العربية   ", key: "name", width: "20%" },
    { label: "نوع الخدمة باللغة الانجليزية", key: "englishTitle", width: "30%" },
    { label: "مفعل", key: "ActiveKey", width: "20%" },
    { label: "إجراء", key: "actions", width: "20%" },
  ];

  // console.log(getQuery.data, 'getQuery.data' );
// const tableData = mapTableData(getQuery?.data || [], tableHeaders, remove);

const tableData: any[] = [
  {
    name: "ترخيص معرض",
    englishTitle: "Exhibition License",
    ActiveKey:(
      <div className="flex gap-3">
      <button
        className="p-1"
        onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
      >
        <img src={activeicone} alt="edit" />
      </button>
    </div>
    ),
    actions: (
      <div className="flex  gap-3">
           <div className="px-3 py-[6px] font-bold rounded-3xl bg-[#F3F4F6]">
اضافة خدمات
        </div>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
        >
          <img src={editImage} alt="edit" />
        </button>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          // onClick={() => remove(1)}
        >
          <img src={deleteImage} alt="delete" />
        </button>
      </div>
    ),
  },
  {
    name: "ترخيص مؤتمر",
    englishTitle: "Conference License",
    ActiveKey:(
      <div className="flex gap-3">
     
      <button
        className=" p-1"
        onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
      >
        <img src={deactiveicone} alt="edit" />
      </button>
    </div>
    ),
    actions: (
    <div className="flex  gap-3">
         <div className="px-3 py-[6px] font-bold rounded-3xl bg-[#F3F4F6]">
اضافة خدمات
        </div>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
        >
          <img src={editImage} alt="edit" />
        </button>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          // onClick={() => remove(1)}
        >
          <img src={deleteImage} alt="delete" />
        </button>
      </div>
    ),
  },
   {
    name: "ترخيص اجتماع ",
    englishTitle: "Meeting License",
    ActiveKey:(
      <div className="flex gap-3">
      <button
        className=" p-1"
        onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
      >
        <img src={deactiveicone} alt="edit" />
      </button>
    </div>
    ),
    actions: (
   <div className="flex  gap-3">
       <div className="px-3 py-[6px] font-bold rounded-3xl bg-[#F3F4F6]">
اضافة خدمات
        </div>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          onClick={() => console.log("Edit", { id: 1, name: "Item 1" })}
        >
          <img src={editImage} alt="edit" />
        </button>
        <button
          className="bg-gray-300 border p-1 rounded-full"
          // onClick={() => remove(1)}
        >
          <img src={deleteImage} alt="delete" />
        </button>
      </div>
    ),
  },
];

  

    const extraButtons: any[] = [
   
    {
      icon: <img src={exelImage} alt="Excel"  />,
      className: " flex  bg-[#f3f4f6]  rounded-full" ,
      onClick: () => console.log("Export to Excel"),
    },
     {
      icon: <img src={print}  />,
      className: " flex  bg-[#f3f4f6]  rounded-full",
      onClick: () => console.log("Print"),
    },
  ];

  const formFields: any[] = [
    {
      id: "typeAr",
      label: "نوع الخدمة باللغة العربية ",
      type: "text",
      placeholder: " نوع الخدمة باللغة العربية ",
      inputCss: "col-span-12 md:col-span-3",
    },
    {
      id: "typeEn",
      label: "نوع الخدمة باللغة الانجليزيه ",
      type: "text",
      placeholder: " نوع الخدمة باللغة الانجليزيه ",
      inputCss: "col-span-12 md:col-span-3",
    },
    {
      id: "status",
      label: "حالة التفعيل",
      type: "text",
      placeholder: " حالة التفعيل",
      inputCss: "col-span-12 md:col-span-3",
    },
  ];

  return (
    <DashboardPage
      breadcrumbItems={breadcrumbItems}
      title="أنواع الخدمات الرئيسية "
      searchPlaceholder="عنوان البند"
      tableHeaders={tableHeaders}
      tableData={tableData}
      onSearch={(value: any) => console.log("Search:", value)}
      onReset={() => console.log("Reset")}
      onAddNew={() => console.log("Add New Item")}
      extraButtons={extraButtons}
      formFields={formFields}
    />
  );
};

export default ElectronicService;
