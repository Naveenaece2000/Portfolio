export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A dark-themed portfolio built with Next.js and Tailwind CSS.",
            tech: ["Next.js", "Tailwind", "React"],
        },
        {
            title: "E-Commerce App",
            description: "A full-stack shopping platform with payment integration.",
            tech: ["React", "Node.js", "MongoDB"],
        },
        {
            title: "IoT Dashboard",
            description: "Real-time data visualization for electronics sensors.",
            tech: ["Python", "React", "MQTT"],
        },
        {
            title: "Task Manager",
            description: "A productivity tool to manage daily tasks efficiently.",
            tech: ["TypeScript", "Firebase"],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                    Recent Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl border border-white/10 bg-neutral-900/50 p-8 hover:border-purple-500/50 transition duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10">{project.title}</h3>
                            <p className="text-neutral-400 mb-6 relative z-10">{project.description}</p>

                            <div className="flex gap-3 relative z-10">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}