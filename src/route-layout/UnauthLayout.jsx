import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import NotFound from "../pages/NotFound";

const UnauthLayout = () => {
  return (
    <Routes>
      <Route path={"/login"}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/signup">
        <Route index element={<Signup />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UnauthLayout;
