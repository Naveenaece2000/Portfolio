"use client";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "MongoDB", icon: <SiMongodb /> },
];

export default function Skills() {
    return (
        <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-green font-mono text-xl">02.</span>
                <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
                <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-lightNavy p-4 rounded hover:text-green hover:-translate-y-1 transition duration-300 flex items-center gap-3">
                        <span className="text-2xl text-green">{skill.icon}</span>
                        <span className="text-slate font-mono text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}