
import React from "react";
import DashboardPage from "../../Shared/DashboardPage/DashboardPage";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import exelImage from "./../../assets/exel.svg";
import print from "./../../assets/exel2.svg";


const ListOfEvents: React.FC = () => {
  const breadcrumbItems: any[] = [
    { label: "لوحة التحكم", href: "#" },
    { label: "قائمة الفعاليات", href: "#" },
  ];

  const tableHeaders: any[] = [
    { label: "عنوان البند باللغة العربية", key: "arabicTitle", width: "33%" },
    { label: "عنوان البند باللغة الإنجليزية", key: "englishTitle", width: "50%" },
    { label: "إجراء", key: "actions", width: "17%" },
  ];

  const tableData: any[] = [
    {
      arabicTitle: "قائمة الفعاليات",
      englishTitle: "Our List of events",
      actions: (
        <div className="flex justify-center gap-3">
          <button className="bg-gray-300 border p-1 rounded-full">
            <img src={editImage} alt="edit" />
          </button>
          <button className="bg-[#fef3f2] border p-1 rounded-full ">
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
      inputCss: " xl:col-span-3 lg:col-span-3 md:col-span-6",
    },
    {
      id: "statusDate",
      label: " تاريخ الفعاليه",
      type: "date",
      placeholder: "تاريخ الفعاليه",
      inputCss: " xl:col-span-3 lg:col-span-3 md:col-span-6",
    },
    {
      id: "status",
      label: "حالة التفعيل",
      type: "text",
      placeholder: " حالة التفعيل",
      inputCss: " xl:col-span-3 lg:col-span-3 md:col-span-6",
    },
  ];

  return (
    <DashboardPage
      breadcrumbItems={breadcrumbItems}
      title="قائمة الفعاليات"
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

export default ListOfEvents;
