import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
                    Naveena.
                </h1>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
                        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href="#about">About</Link></li>
                        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href="#skills">Skills</Link></li>
                        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href="#projects">Projects</Link></li>
                        <li className="hover:text-cyan-400 transition cursor-pointer"><Link href="#contact">Contact</Link></li>
                    </ul>

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" className="text-xl text-slate-400 hover:text-white transition"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" className="text-xl text-slate-400 hover:text-white transition"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}