import React from "react";
import DashboardPage from "../../Shared/DashboardPage/DashboardPage";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import exelImage from "./../../assets/exel.svg";
import print from "./../../assets/exel2.svg";

const Terms: React.FC = () => {
  const breadcrumbItems: any[] = [
    { label: "لوحة التحكم", href: "#" },
    { label: "الشروط والاحكام", href: "#" },
  ];

  const tableHeaders: any[] = [
    { label: "عنوان البند باللغة العربية", key: "arabicTitle", width: "33%" },
    { label: "عنوان البند باللغة الإنجليزية", key: "englishTitle", width: "50%" },
    { label: "إجراء", key: "actions", width: "17%" },
  ];

  const tableData: any[] = [
    {
      arabicTitle: "سياسة الخصوصية",
      englishTitle: "Our Privacy Policy",
      actions: (
        <div className="flex justify-center gap-3">
          <button className="bg-gray-300 border p-1 rounded-full">
            <img src={editImage} alt="edit" />
          </button>
          <button className="bg-gray-300 border p-1 rounded-full">
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
      id: "Address",
      label: "عنوان البند",
      type: "text",
      placeholder: "عنوان البند ",
      inputCss: "col-span-12 md:col-span-10",
    },
  ];

  return (
    <DashboardPage
      breadcrumbItems={breadcrumbItems}
      title="الشروط والاحكام"
      titleTable="بنود الشروط والاحكام"
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

export default Terms;
