
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";


function LayoutComp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>

<div className="flex min-h-screen flex-col "style={{ direction: "rtl" }}>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1">
      <Sidebar isOpen={isSidebarOpen}  />

        <main className="flex-1  p-4">
          <Outlet />
        </main>
      </div>

    </div>

              
    </>
  );
}

export default LayoutComp;
