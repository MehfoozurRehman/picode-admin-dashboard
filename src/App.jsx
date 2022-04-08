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
import Banners from "./screens/Banners";
import Headlines from "./screens/Headlines";
import PartnersForm from "./screens/PartnersForm";
import BannersForm from "./screens/BannersForm";
import HeadlinesForm from "./screens/HeadlinesForm";
import CustomersForm from "./screens/CustomersForm";

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
          <Route
            path="ads_management/banners"
            element={<Banners onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="ads_management/banners/add"
            element={<BannersForm heading="Add" />}
          />
          <Route
            path="ads_management/banners/edit"
            element={<BannersForm heading="Edit" />}
          />
          <Route
            path="ads_management/headlines"
            element={<Headlines onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="ads_management/headlines/add"
            element={<HeadlinesForm heading="Add" />}
          />
          <Route
            path="ads_management/headlines/edit"
            element={<HeadlinesForm heading="Edit" />}
          />
          <Route
            path="partners"
            element={<Partners onDelete={setIsDeleteConfirmation} />}
          />
          <Route path="partners/add" element={<PartnersForm heading="Add" />} />
          <Route
            path="partners/edit"
            element={<PartnersForm heading="Edit" />}
          />
          <Route path="partners/details" element={<PartnersDetails />} />
          <Route
            path="customers"
            element={<Customers onDelete={setIsDeleteConfirmation} />}
          />
          <Route
            path="customers/add"
            element={<CustomersForm heading="Add" />}
          />
          <Route
            path="customers/edit"
            element={<CustomersForm heading="Edit" />}
          />
          <Route path="customers/details" element={<CustomersDetails />} />
        </Route>
      </Routes>
    </>
  );
}
