// Terms.jsx
import DashboardPage from "./../../Shared/DashboardPage/DashboardPage.jsx";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";

const TypeOfEvents = () => {
  const breadcrumbItems = [
    { label: "لوحة التحكم", href: "#" },
    { label: "أنواع الفعاليات", href: "#" },
  ];

  const tableHeaders = [
    { label: "عنوان البند باللغة العربية", key: "arabicTitle", width: "33%" },
    { label: "عنوان البند باللغة الإنجليزية", key: "englishTitle", width: "50%" },
    { label: "إجراء", key: "actions", width: "17%" },
    
  ];

  const tableData = [
    {
      arabicTitle: "أنواع الفعاليات",
      englishTitle: "Our List of events",
      actions: (
        <div className="flex justify- gap-3">
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

  const extraButtons = [
    {
      label: "🖨️",
      className: "bg-gray-300 border p-2 rounded-full",
      onClick: () => console.log("Print"),
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Excel_2013_logo.svg"
          alt="Excel"
          className="w-5 h-5"
        />
      ),
      className: "bg-gray-300 p-2 rounded-full",
      onClick: () => console.log("Export to Excel"),
    },
  ];
  const formFields = [
    {
      id: "typeAr",
      label: "نوع الخدمة باللغة العربية ",
      type: "text",
      placeholder: " نوع الخدمة باللغة العربية ",
      // value: username,
      // onChange: (e) => setUsername(e.target.value),
      inputCss: "col-span-12 md:col-span-3",
    },
    // {
    //     id: "typeEn",
    //     label: "نوع الخدمة باللغة الانجليزيه ",
    //     type: "text",
    //     placeholder: " نوع الخدمة باللغة الانجليزيه ",
    //     // value: username,
    //     // onChange: (e) => setUsername(e.target.value),
    //     inputCss: "col-span-12 md:col-span-3",
    //   },
      {
        id: "statusDate",
        label: " تاريخ الفعاليه",
        type: "date",
        placeholder: "تاريخ الفعاليه",
        // value: username,
        // onChange: (e) => setUsername(e.target.value),
        inputCss: "col-span-12 md:col-span-3",
      },
      {
        id: "status",
        label: "حالة التفعيل",
        type: "text",
        placeholder: " حالة التفعيل",
        // value: username,
        // onChange: (e) => setUsername(e.target.value),
        inputCss: "col-span-12 md:col-span-3",
      },
  ];

  return (
    <DashboardPage
      breadcrumbItems={breadcrumbItems}
      title="أنواع الفاعليه"
      searchPlaceholder="عنوان البند"
      tableHeaders={tableHeaders}
      tableData={tableData}
      onSearch={(value) => console.log("Search:", value)}
      onReset={() => console.log("Reset")}
      onAddNew={() => console.log("Add New Item")}
      extraButtons={extraButtons}
      formFields={formFields}
    />
  );
};

export default TypeOfEvents;