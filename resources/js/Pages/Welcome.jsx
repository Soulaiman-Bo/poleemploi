import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/home/Hero";
import AboutUs from "../Components/home/About";
import JobsSection from "../Components/home/Jobs";
import Footer from "../Components/home/Footer";
import { Link } from "@inertiajs/react";

import JobSearch from "../assets/search.png";

const App = ({ auth }) => {
    return (
        <div className="App">            
            <Hero user={auth.user}>
                <div
                    className={`container mx-auto flex flex-col md:flex-row items-center`}
                >
                    <div class="lg:w-2/3 w-full animate-fade-in-down">
                        <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
                            Pôle emploi
                        </h1>

                        <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
                            Find Your Dream job
                        </h1>

                        <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-2xl">
                            Explore thousands of job opportunities <br /> and
                            find the perfect fit for your career goals.
                        </p>

                        <Link
                            className="uppercase bg-white font-semibold text-teal-500 px-8 py-4 rounded mx-auto mr-4 hidden md:inline"
                            href="#contact-form"
                        >
                            Explore Jobs
                        </Link>
                        <Link
                            className="uppercase rounded bg-green-400 font-semibold text-white px-8 py-4 mx-auto hidden md:inline"
                            href="#about-me"
                        >
                            Post a Job
                        </Link>
                    </div>
                    <div className="md:w-1/2 hidden lg:block md:w-1/2">
                        <img
                            src={JobSearch}
                            alt="Job search"
                            className="w-full"
                        />
                    </div>
                </div>
            </Hero>

            <JobsSection />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default App;
