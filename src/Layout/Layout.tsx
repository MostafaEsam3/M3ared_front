import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar.jsx";

const LayoutComp: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen flex-col" style={{ direction: "rtl" }}>
      <div className="flex flex-1 !bg-[#F3F4F6]">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onItemClick={() => setIsSidebarOpen(true)}
        />
        <div className="ps-[256px] w-[100%]">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 ">
          <Outlet />
        </main>

        </div>
      </div>
    </div>
  );
}

export default LayoutComp;
