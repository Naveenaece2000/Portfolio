"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "CI/CD Pipeline Automation",
        desc: "A complete DevOps pipeline project. Implemented automated testing, building, and deployment workflows using GitHub Actions to streamline software delivery.",
        tech: ["GitHub Actions", "CI/CD", "YAML", "Automation"],
        links: {
            github: "https://github.com/Naveenaece2000/hello-ci-cd",
            live: "#"
        }
    },
    {
        title: "CloudEats Delivery App",
        desc: "A scalable food delivery application deployed on the cloud. Features include real-time order tracking, secure user authentication, and a responsive frontend.",
        tech: ["React / Node", "Cloud Deployment", "REST API", "Database"],
        links: {
            github: "https://github.com/Naveenaece2000/CloudEats-Food-Delivery-App",
            live: "#"
        }
    },
    {
        title: "Library Management API",
        desc: "A robust backend system built with Python Flask for managing library inventories. Includes database integration for tracking books and user borrowing history.",
        tech: ["Python", "Flask", "SQL", "Backend API"],
        links: {
            github: "https://github.com/Naveenaece2000/flask_library",
            live: "#"
        }
    }
];

export default function Projects() {
    return (
        <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-green font-mono text-xl">03.</span>
                <h2 className="text-3xl font-bold text-white">Some Things I've Built</h2>
                <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="bg-lightNavy p-8 rounded shadow-lg hover:-translate-y-2 transition duration-300 group">
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-4xl text-green">📂</div>
                            <div className="flex gap-4 text-slate">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-green transition">
                                    <FaGithub size={20} />
                                </a>
                                {project.links.live !== "#" && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:text-green transition">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green transition">{project.title}</h3>
                        <p className="text-slate mb-6 text-sm">{project.desc}</p>
                        <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400">
                            {project.tech.map(t => <span key={t}>{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}