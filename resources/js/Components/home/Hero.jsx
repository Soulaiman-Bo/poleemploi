import { Link } from "@inertiajs/react";
import JobSearch from "../../assets/search.png";
import BackgroundImage from "../../assets/test.png";
import Navbar from "../Navbar";
import { Children } from "react";

const Hero = ({ user, children }) => (
    <section className="h-screen relative bg-custom-image bg-cover bg-center  p-5 overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>{" "}
        <div className="flex flex-col gap-14 relative z-10">
            <Navbar user={user} />

            {children}
        </div>
    </section>
);

export default Hero;
