export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
            <div className="space-y-4 max-w-3xl">
                <p className="text-cyan-400 font-medium tracking-wide">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                    Naveena.
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-400">
                    I build things for the web.
                </h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto py-4">
                    I am an Electronics & Communication Engineer passionate about building software and web applications. I specialize in React, Next.js, and modern web technologies.
                </p>
                <div>
                    <a href="#projects" className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition font-medium">
                        Check out my work
                    </a>
                </div>
            </div>
        </section>
    );
}