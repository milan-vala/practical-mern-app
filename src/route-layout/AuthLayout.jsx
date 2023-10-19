import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AuthLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AuthLayout;
