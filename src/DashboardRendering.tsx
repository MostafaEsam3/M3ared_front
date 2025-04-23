import React from 'react';
// import { publicRoutesWithLayout, publicRoutesWithoutLayout } from './Routes/PrivateRoutes/PrivateRoutes';
import LayoutComp from './Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutesWithLayout, publicRoutesWithoutLayout } from './Routes/PrivateRoutes/PrivateRoutes';

// interface RouteConfig {
//   path: string;
//   name: string;
//   component: React.ComponentType<any>;
// }

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route element={<LayoutComp />}>
        {publicRoutesWithLayout.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>

      {publicRoutesWithoutLayout.map((route: any) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default Dashboard;
