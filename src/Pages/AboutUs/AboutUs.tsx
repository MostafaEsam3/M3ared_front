import React, { useState } from "react";
import DashboardPage from "../../Shared/DashboardPage/DashboardPage";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
 import TestModal from "../../Shared/Modal/TestDynamicModal";
import exelImage from "./../../assets/exel.svg";
import print from "./../../assets/exel2.svg";

const AboutUs: React.FC = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to open the modal
  const handleEditClick = (): void => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };

  const breadcrumbItems: any[] = [
    { label: "لوحة التحكم", href: "#" },
    { label: "عن الهيئة", href: "#" },
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
          <button
            className="bg-gray-300 border p-1 rounded-full"
            onClick={handleEditClick} // Trigger modal
          >
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
      inputCss: "lg:col-span-9 md:col-span-6",
    },
  ];

  return (
    <div>
      <DashboardPage
        breadcrumbItems={breadcrumbItems}
        title="عن الهيئة"
        titleTable="بنود نبذة عنا"
        searchPlaceholder="عنوان البند"
        tableHeaders={tableHeaders}
        tableData={tableData}
        onSearch={(value: any) => console.log("Search:", value)}
        onReset={() => console.log("Reset")}
        onAddNew={() => console.log("Add New Item")}
        extraButtons={extraButtons}
        formFields={formFields}
      />
      {/* Render TestModal */}
      <TestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AboutUs;