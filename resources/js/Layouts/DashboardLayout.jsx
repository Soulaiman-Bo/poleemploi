import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import DashboardLogo from "@/Components/dashboard/DashboardLogo";
import DashboardNav from "@/Components/dashboard/DashboardNav";
import DashboardSidebar from "@/Components/dashboard/DashboardSidebar";
import ProfileDropDown from "@/Components/dashboard/ProfileDropDown";
import React from "react";

const DashboardLayout = ({ user, role, header, children }) => {
    return (
        <div>
            <DashboardNav user={user} />
            <DashboardSidebar role={role} />

            <div className="p-8 sm:ml-64">{children}</div>
            
        </div>
    );
};

export default DashboardLayout;
