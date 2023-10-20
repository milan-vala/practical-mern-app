import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";

const AuthLayout = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthLayout;
