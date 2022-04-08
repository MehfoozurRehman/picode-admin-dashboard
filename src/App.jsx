import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import OtpEmail from "./screens/OtpEmail";
import Sidebar from "./components/Sidebar";
import DashboardPanel from "./screens/DashboardPanel";
import ChangePassword from "./screens/ChangePassword";
import ForgotPassword from "./screens/ForgotPassword";
import DeleteConfirmation from "./components/DeleteConfirmation";
import Partners from "./screens/Partners";
import PartnersDetails from "./screens/PartnersDetails";
import CustomersDetails from "./screens/CustomersDetails";
import Customers from "./screens/Customers";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  return (
    <>
      {isDeleteConfirmation ? (
        <DeleteConfirmation
          onClose={setIsDeleteConfirmation}
          onSubmit={setIsDeleteConfirmation}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/otp_email" element={<OtpEmail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPanel />} />
          <Route path="partners" element={<Partners />} />
          <Route path="partners/details" element={<PartnersDetails />} />
          <Route
            path="customers"
            element={<Customers onDelete={setIsDeleteConfirmation} />}
          />
          <Route path="customers/details" element={<CustomersDetails />} />
        </Route>
      </Routes>
    </>
  );
}
