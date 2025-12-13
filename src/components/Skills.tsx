import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
    return (
        <section id="skills" className="py-20 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="text-cyan-400 mr-2">02.</span> My Skills
                <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { name: "React", icon: <FaReact className="text-blue-400" /> },
                    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
                    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
                    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                ].map((skill, index) => (
                    <div key={index} className="bg-slate-800 p-4 rounded hover:-translate-y-2 transition duration-300 border border-slate-700 hover:border-cyan-400 group">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition">{skill.icon}</div>
                        <p className="text-slate-300 font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}