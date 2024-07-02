import Navbar from "@/Components/Navbar";
import BackgroundImage from "../assets/test.png";
import Footer from "@/Components/home/Footer";
import logoImage from "../assets/Facebook.png";

const Jobs = ({ auth }) => {
    return (
        <>
            <JobsHeader user={auth.user} />
            <JobsBody />
            <Footer />
        </>
    );
};

export default Jobs;

const JobsHeader = ({ user }) => {
    return (
        <div className="relative bg-custom-image bg-cover bg-center flex flex-col gap-5 justify-center p-5 overflow-hidden">
            <div className="absolute inset-0 bg-green-900 opacity-60"></div>{" "}
            {/* Dark overlay */}
            <div className="relative z-10">
                <Navbar user={user} />
                <div className="container mx-auto p-5">
                    <h1 className="text-3xl text-white mb-2 font-extrabold tracking-tight leading-tight">
                        Find Your Dream Job
                    </h1>
                    <p className="text-xl mb-2 font-medium text-gray-100 tracking-tight leading-tight">
                        Looking for jobs? Browse our latest job openings to view
                        & apply to the best jobs today!
                    </p>
                </div>
            </div>
        </div>
    );
};

const JobsBody = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex p-4 gap-2">
                <div className="p-4 border border-gray-300 rounded-lg w-80 dark:border-gray-700">
                    <div className="border-b pb-4 flex justify-between">
                        <p className="font-bold">Filters</p>
                        <a
                            href="#"
                            class="font-medium text-red-600 underline dark:text-red-500 hover:no-underline"
                        >
                            Clear All
                        </a>
                    </div>
                    <div className="border-b py-4">
                        <p className="font-bold mb-3">Job Type</p>

                        <div className="flex flex-wrap gap-3">
                            <div className="">
                                <div className="flex mb-3 tems-center me-4">
                                    <input
                                        id="inline-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Full-time
                                    </label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="inline-2-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-2-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Freelance
                                    </label>
                                </div>
                            </div>

                            <div>
                                <div className=" mb-3 flex items-center me-4">
                                    <input
                                        id="inline-checked-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-checked-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Internship
                                    </label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="inline-checked-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-checked-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Volunteer
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b py-4">
                        <p className="font-bold mb-3">Mobility</p>

                        <div className="flex flex-wrap gap-3">
                            <div className="">
                                <div className="flex mb-3 tems-center me-4">
                                    <input
                                        id="inline-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Office
                                    </label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input
                                        id="inline-2-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-2-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remote
                                    </label>
                                </div>
                            </div>

                            <div>
                                <div className=" mb-3 flex items-center me-4">
                                    <input
                                        id="inline-checked-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="inline-checked-checkbox"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Hybred
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b py-4">
                        <p className="font-bold mb-3">Salary</p>

                        <div className="flex flex-col gap-2">
                            <div className="flex  tems-center me-4">
                                <input
                                    id="inline-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="inline-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    0 - 3000 MAD
                                </label>
                            </div>
                            <div className="flex items-center me-4">
                                <input
                                    id="inline-2-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="inline-2-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    3000 - 6000 MAD
                                </label>
                            </div>
                            <div className="  flex items-center me-4">
                                <input
                                    id="inline-checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="inline-checked-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    6000 - 9000 MAD
                                </label>
                            </div>
                            <div className="  flex items-center me-4">
                                <input
                                    id="inline-checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="inline-checked-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    9000 - 12000 MAD
                                </label>
                            </div>
                            <div className=" flex items-center me-4">
                                <input
                                    id="inline-checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="inline-checked-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    + 12000 MAD
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="px-4  border-gray-300  rounded-lg dark:border-gray-700">
                        <form class="max-w-full mx-auto mb-4">
                            <label
                                for="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                    placeholder="Search Job Titles"
                                    required
                                />
                                <button
                                    type="submit"
                                    class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col gap-4">
                            <div className="border flex flex-col gap-4 shadow p-4 rounded-xl">
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            class="w-12 h-12 rounded-full shadow-lg"
                                            src={logoImage}
                                            alt="Bonnie image"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Full Stack Web Developer
                                            </h3>
                                            <p className="font-semibold text-sm text-gray-500">
                                                Facebook
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-right">
                                            <h3 className="text-xl font-semibold">
                                                Casablanca, Morocco
                                            </h3>
                                            <p className="font-medium text-sm text-gray-400">
                                                Posted 5 mn Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Remote
                                    </span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        Full-time
                                    </span>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                        6000 MAD/Month
                                    </span>
                                </div>

                                <div className="max-w-[70%]">
                                    <p className="font-medium text-base text-gray-600">
                                        A leading tech company is looking for a
                                        skilled software engineer, Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Quasi, quibusdam? Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Sunt odio nostrum officiis quam
                                        voluptate corrupti,
                                    </p>
                                </div>
                            </div>

                            <div className="border flex flex-col gap-4 shadow p-4 rounded-xl">
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            class="w-12 h-12 rounded-full shadow-lg"
                                            src={logoImage}
                                            alt="Bonnie image"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Full Stack Web Developer
                                            </h3>
                                            <p className="font-semibold text-sm text-gray-500">
                                                Facebook
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-right">
                                            <h3 className="text-xl font-semibold">
                                                Casablanca, Morocco
                                            </h3>
                                            <p className="font-medium text-sm text-gray-400">
                                                Posted 5 mn Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Remote
                                    </span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        Full-time
                                    </span>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                        6000 MAD/Month
                                    </span>
                                </div>

                                <div className="max-w-[70%]">
                                    <p className="font-medium text-base text-gray-600">
                                        A leading tech company is looking for a
                                        skilled software engineer, Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Quasi, quibusdam? Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Sunt odio nostrum officiis quam
                                        voluptate corrupti,
                                    </p>
                                </div>
                            </div>

                            <div className="border flex flex-col gap-4 shadow p-4 rounded-xl">
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            class="w-12 h-12 rounded-full shadow-lg"
                                            src={logoImage}
                                            alt="Bonnie image"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Full Stack Web Developer
                                            </h3>
                                            <p className="font-semibold text-sm text-gray-500">
                                                Facebook
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-right">
                                            <h3 className="text-xl font-semibold">
                                                Casablanca, Morocco
                                            </h3>
                                            <p className="font-medium text-sm text-gray-400">
                                                Posted 5 mn Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Remote
                                    </span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        Full-time
                                    </span>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                        6000 MAD/Month
                                    </span>
                                </div>

                                <div className="max-w-[70%]">
                                    <p className="font-medium text-base text-gray-600">
                                        A leading tech company is looking for a
                                        skilled software engineer, Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Quasi, quibusdam? Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Sunt odio nostrum officiis quam
                                        voluptate corrupti,
                                    </p>
                                </div>
                            </div>

                            <div className="border flex flex-col gap-4 shadow p-4 rounded-xl">
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            class="w-12 h-12 rounded-full shadow-lg"
                                            src={logoImage}
                                            alt="Bonnie image"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Full Stack Web Developer
                                            </h3>
                                            <p className="font-semibold text-sm text-gray-500">
                                                Facebook
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-right">
                                            <h3 className="text-xl font-semibold">
                                                Casablanca, Morocco
                                            </h3>
                                            <p className="font-medium text-sm text-gray-400">
                                                Posted 5 mn Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Remote
                                    </span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        Full-time
                                    </span>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                        6000 MAD/Month
                                    </span>
                                </div>

                                <div className="max-w-[70%]">
                                    <p className="font-medium text-base text-gray-600">
                                        A leading tech company is looking for a
                                        skilled software engineer, Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Quasi, quibusdam? Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Sunt odio nostrum officiis quam
                                        voluptate corrupti,
                                    </p>
                                </div>
                            </div>

                            <div className="border flex flex-col gap-4 shadow p-4 rounded-xl">
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            class="w-12 h-12 rounded-full shadow-lg"
                                            src={logoImage}
                                            alt="Bonnie image"
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Full Stack Web Developer
                                            </h3>
                                            <p className="font-semibold text-sm text-gray-500">
                                                Facebook
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-right">
                                            <h3 className="text-xl font-semibold">
                                                Casablanca, Morocco
                                            </h3>
                                            <p className="font-medium text-sm text-gray-400">
                                                Posted 5 mn Ago
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Remote
                                    </span>
                                    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        Full-time
                                    </span>
                                    <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                        6000 MAD/Month
                                    </span>
                                </div>

                                <div className="max-w-[70%]">
                                    <p className="font-medium text-base text-gray-600">
                                        A leading tech company is looking for a
                                        skilled software engineer, Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Quasi, quibusdam? Lorem ipsum
                                        dolor sit amet consectetur adipisicing
                                        elit. Sunt odio nostrum officiis quam
                                        voluptate corrupti,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
