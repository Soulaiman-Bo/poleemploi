import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";

const AdminDashboard = () => {
    return <DashboardLayout user={auth.user}></DashboardLayout>;
};

export default AdminDashboard;
