// Policy.jsx
import DashboardPage from "./../../Shared/DashboardPage/DashboardPage.jsx";
import editImage from "./../../assets/Leading Icon.svg";
import deleteImage from "./../../assets/Leading Icon (1).svg";
import exelImage from "./../../assets/Leading Icon11.svg";

const Policy = () => {
  const breadcrumbItems = [
    { label: "لوحة التحكم", href: "#" },
    { label: "سياسه الخصوصيه", href: "#" },
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
          src={exelImage}
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
      id: "Address",
      label: "عنوان البند",
      type: "text",
      placeholder: "عنوان البند ",
      // value: username,
      // onChange: (e) => setUsername(e.target.value),
      inputCss: "col-span-12 md:col-span-10",
    },
 
    
  ];
  return (
    <DashboardPage
      breadcrumbItems={breadcrumbItems}
      title="سياسه الخصوصيه"
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

export default Policy;