"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const links = ["About", "Experience", "Work", "Contact"];

    return (
        <nav className="fixed w-full top-0 z-50 bg-navy/90 backdrop-blur-md px-6 py-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-green font-bold text-2xl"
                >
                    &lt;KD /&gt;
                </motion.div>

                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link, index) => (
                        <motion.div
                            key={link}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`#${link.toLowerCase()}`} className="text-lightSlate hover:text-green text-sm font-mono">
                                <span className="text-green mr-1">0{index + 1}.</span>
                                {link}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.a
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        href="/resume.pdf"
                        className="border border-green text-green px-4 py-2 rounded text-sm hover:bg-green/10 transition"
                    >
                        Resume
                    </motion.a>
                </div>
            </div>
        </nav>
    );
}