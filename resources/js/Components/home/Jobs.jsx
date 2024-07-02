import { Link } from "@inertiajs/react";
import logoImage from "../../assets/Facebook.png";

const JobsSection = () => {
    const jobs = [
        {
            title: "Python developer",
            subtitle: "Cherche developer python",
            description:
                "A leading tech company is looking for a skilled software engineer...",
            imageUrl: "path-to-image.jpg",
            readMoreUrl: "#",
            tags: ["Python", "Django", "React"],
        },
        {
            title: "Nodejs developer",
            subtitle: "Cherche developer Nodejs",
            description:
                "A leading tech company is looking for a skilled software engineer...",
            imageUrl: "path-to-image.jpg",
            readMoreUrl: "#",
            tags: ["Nodejs", "AWS", "React"],
        },
        {
            title: "Nodejs developer",
            subtitle: "Cherche developer Nodejs",
            description:
                "A leading tech company is looking for a skilled software engineer...",
            imageUrl: "path-to-image.jpg",
            readMoreUrl: "#",
            tags: ["Nodejs", "AWS", "React"],
        },
        // Add more job listings here
    ];

    return (
        <section className="py-20 bg-gray-100 px-5">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Latest Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Example job listing */}

                    {jobs.map((job, index) => (
                        <Jobs job={job} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobsSection;

const Jobs = ({ job }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-7 flex gap-4 items-center">
                <img
                    class="w-12 h-12 rounded-full shadow-lg"
                    src={logoImage}
                    alt="Bonnie image"
                />
                <div>
                    <h3 className="text-lg font-semibold">Facebook</h3>
                    <p className="font-semibold text-sm text-gray-400">
                        Casablanca
                    </p>
                </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>

            {/* <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {job.subtitle}
            </h5> */}
            <p className="mb-4 text-gray-500">{job.description}</p>

            <div className="flex space-x-2 mb-8">
                {job.tags.map((tag) => (
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                        {tag}
                    </span>
                ))}
            </div>

            <Link
                href="#"
                class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
                Read More
            </Link>
        </div>
    );
};
