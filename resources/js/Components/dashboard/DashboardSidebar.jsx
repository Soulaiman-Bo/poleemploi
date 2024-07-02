import React from "react";
import SVGIcons from "../SVGIcons";
import { Link } from "@inertiajs/react";

const DashboardSidebar = ({ role }) => {
    const links = {
        admin: [
            { title: "dashboard", icon: "dashoard" },
            { title: "candidates", icon: "candidate" },
            { title: "recruters", icon: "business" },
            { title: "Jobs", icon: "jobs" },
        ],
        recruteur: [
            { title: "My Jobs", icon: "jobs" },
            { title: "Applications", icon: "candidate" },
        ],
        candidate: [{ title: "My Applications", icon: "application" }],
    };
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {links[role].map((elm) => (
                        <li key={elm}>
                            <Link
                                href={route("dashboard")}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <SVGIcons name={elm.icon} />
                                <span className="ms-3">{elm.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
