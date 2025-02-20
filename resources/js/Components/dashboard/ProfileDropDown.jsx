import React from "react";
import ResponsiveNavLink from "../ResponsiveNavLink";

const ProfileDropDown = ({user}) => {
    return (
        <div className="flex items-center">
            <div className="flex items-center ms-3">
                <div>
                    <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                    >
                        <span className="sr-only">Open user menu</span>
                        <div className="w-8 h-8 rounded-full"></div>
                    </button>
                </div>
                <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                >
                    <div className="px-4 py-3" role="none">
                        <p
                            className="text-sm text-gray-900 dark:text-white"
                            role="none"
                        >
                            {user.name}
                        </p>
                        <p
                            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                            role="none"
                        >
                            {user.email}
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route("profile.edit")}>
                            Profile
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropDown;
