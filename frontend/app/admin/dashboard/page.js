"use client";
import AdminDashboard from "@/componets/admin/adminDashboard";
import React, { useState } from "react";
import HeaderAdmin from "@/componets/common/HeaderAdmin";

const Dashboard = () => {
  const [page, setPage] = useState("admin");
  return (
    <div>
      <HeaderAdmin keyValue={"dashboard"} />
      <AdminDashboard />
    </div>
  );
};

export default Dashboard;
