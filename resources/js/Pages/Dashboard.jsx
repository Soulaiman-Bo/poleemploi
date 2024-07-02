import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const role = auth.roles;
    return (
        <DashboardLayout user={auth.user} role={role}>
            <div className="  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <h1 className="font-bold text-2xl">{role}'s Dashboard</h1>
            </div>
        </DashboardLayout>
    );
}
