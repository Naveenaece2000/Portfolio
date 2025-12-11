"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <span className="text-green font-mono text-xl">01.</span>
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 text-slate text-lg leading-relaxed">
                    <p className="mb-4">
                        Hello! My name is Kunal and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2018 when I decided to try editing
                        custom Tumblr themes — turns out hacking together HTML & CSS is fun!
                    </p>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at an
                        <span className="text-green"> advertising agency</span>, a
                        <span className="text-green"> start-up</span>, and a
                        <span className="text-green"> huge corporation</span>.
                    </p>
                </div>

                {/* Simple Image Placeholder Box */}
                <motion.div
                    whileHover={{ y: -5, x: -5 }}
                    className="relative w-64 h-64 mx-auto border-2 border-green rounded hover:bg-transparent"
                >
                    <div className="absolute top-4 left-4 w-full h-full bg-lightNavy rounded hover:bg-transparent transition-all"></div>
                    {/* You can replace this div with an <Image /> tag later */}
                </motion.div>
            </div>
        </section>
    );
}