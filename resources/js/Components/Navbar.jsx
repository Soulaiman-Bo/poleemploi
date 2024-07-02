import { Link } from "@inertiajs/react";
import logoImage from "../assets/logo.png";

const Navbar = ({ user }) => (
    <nav className=" text-blue-900 p-4 px-12 md:px-12">
        <div className="container mx-auto flex justify-between items-center px-6 py-2 bg-[#ffffffa8] rounded-[50px]">
            <Link className="text-xl flex items-center font-bold" href="/">
                <img src={logoImage} alt="Logo" className="w-40" />
            </Link>
            <div className="flex gap-14 p-4 px-6  bg-[#ffffffa8] rounded-[50px]">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <a href="/jobs" className="hover:underline">
                    Jobs
                </a>

                {!user && (
                    <>
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                        <Link href="/register" className="hover:underline">
                            Register
                        </Link>
                    </>
                )}

                {user && (
                    <>
                        <Link
                            href={route("dashboard")}
                            className="hover:underline"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route("logout")}
                             method="post"
                            className="hover:underline"
                        >
                            Log Out
                        </Link>
                    </>
                )}
            </div>
        </div>
    </nav>
);

export default Navbar;
