import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
            <nav className="relative rounded-full border border-white/[0.2] bg-black/50 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-4 flex justify-between items-center">

                {/* Links */}
                <div className="flex gap-6 text-sm font-medium text-neutral-300">
                    <Link href="#about" className="hover:text-white transition">About</Link>
                    <Link href="#projects" className="hover:text-white transition">Projects</Link>
                    <Link href="#contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 items-center">
                    <Link href="https://github.com/Naveenaece2000" target="_blank" className="text-neutral-300 hover:text-purple-500 transition">
                        <FaGithub size={20} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-neutral-300 hover:text-blue-500 transition">
                        <FaLinkedin size={20} />
                    </Link>
                </div>
            </nav>
        </div>
    );
}