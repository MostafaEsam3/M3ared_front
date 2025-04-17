import React, { useState } from "react";
import DashboardPage from "./../../Shared/DashboardPage/DashboardPage.jsx";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import exelImage from "./../../assets/Leading Icon11.svg";
import TestModal from "../../Shared/Modal/TestDynamicModal.jsx";

const AboutUs = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);
  };

  const breadcrumbItems = [
    { label: "لوحة التحكم", href: "#" },
    { label: "عن الهيئة", href: "#" },
  ];

  const tableHeaders = [
    { label: "عنوان البند باللغة العربية", key: "arabicTitle", width: "33%" },
    { label: "عنوان البند باللغة الإنجليزية", key: "englishTitle", width: "50%" },
    { label: "إجراء", key: "actions", width: "17%" },
  ];

  const tableData = [
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

  const extraButtons = [
    {
      label: "🖨️",
      className: "bg-gray-300 border p-2 rounded-full",
      onClick: () => console.log("Print"),
    },
    {
      icon: <img src={exelImage} alt="Excel" className="w-5 h-5" />,
      className: "bg-gray-300 p-2 rounded-full",
      onClick: () => console.log("Export to Excel"),
    },
  ];

  const formFields = [
    {
      id: "Address",
      label: "عنوان البند",
      type: "text",
      placeholder: "عنوان البند ",
      inputCss: "col-span-12 md:col-span-10",
    },
  ];

  return (
    <div>
      <DashboardPage
        breadcrumbItems={breadcrumbItems}
        title="عن الهيئة"
        searchPlaceholder="عنوان البند"
        tableHeaders={tableHeaders}
        tableData={tableData}
        onSearch={(value) => console.log("Search:", value)}
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