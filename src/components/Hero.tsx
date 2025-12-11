"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-green font-mono mb-5">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    Naveena.
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
                    I bridge the gap between development and operations..
                </h2>
                <p className="text-slate max-w-xl text-lg mb-12 leading-relaxed">
                    I’m a software engineer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on building accessible,
                    human-centered products.
                </p>

                <a href="#work" className="px-8 py-4 border border-green text-green rounded hover:bg-green/10 transition duration-300 font-mono">
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
}