import React from 'react'
import { publicRoutesWithLayout, publicRoutesWithoutLayout } from './Routes/PrivateRoutes/PrivateRoutes';
import LayoutComp from './Layout/Layout';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <Routes>
                <Route element={<LayoutComp />}>
                    {publicRoutesWithLayout.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Route>

                {/* Routes without layout */}
                {publicRoutesWithoutLayout.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
            </Routes>



        </>
    )
}
