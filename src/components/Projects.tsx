import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "Project One Name",
            desc: "A brief description of your project. What does it do? What technologies did you use? This is a great place to show off your skills.",
            tech: ["Next.js", "Tailwind", "Node.js"],
            github: "#",
            live: "#",
        },
        {
            title: "Project Two Name",
            desc: "Another amazing project description. Mention the features, such as authentication, database connection, or API integration.",
            tech: ["React", "Firebase", "API"],
            github: "#",
            live: "#",
        },
        {
            title: "Project Three Name",
            desc: "Description for a third project. Maybe something related to electronics or hardware interfacing if you have any.",
            tech: ["Python", "IoT", "C++"],
            github: "#",
            live: "#",
        }
    ];

    return (
        <section id="projects" className="py-20 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="text-cyan-400 mr-2">03.</span> Some Things I've Built
                <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div key={i} className="bg-slate-800 p-6 rounded-lg hover:shadow-xl hover:shadow-cyan-900/20 transition duration-300 border border-slate-700 group">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-cyan-400 text-4xl">📂</div>
                            <div className="flex gap-4">
                                <a href={project.github} className="text-slate-400 hover:text-cyan-400 text-xl"><FaGithub /></a>
                                <a href={project.live} className="text-slate-400 hover:text-cyan-400 text-xl"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{project.title}</h3>
                        <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, idx) => (
                                <span key={idx} className="text-xs font-mono text-cyan-400">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}