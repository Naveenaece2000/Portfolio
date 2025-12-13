export default function Hero() {
    return (
        <div className="h-[40rem] w-full bg-black bg-grid-white relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="relative z-20 text-center py-8">
                <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mx-auto mb-4 bg-blue-900/40 border border-blue-800 rounded-full py-2">
                    Based in India
                </h2>

                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
                    Naveena <br /> building the web.
                </h1>

                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
                    I am an Electronics & Communication Engineer turning ideas into functional software. I build accessible, pixel-perfect, and performant web applications.
                </p>

                <div className="mt-8">
                    <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:opacity-80 transition shadow-lg shadow-purple-500/30">
                        See my work
                    </a>
                </div>
            </div>
        </div>
    );
}