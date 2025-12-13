export default function Contact() {
    return (
        <section id="contact" className="py-20 max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-cyan-400 font-mono mb-4">04. What's Next?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-slate-400 text-lg mb-10">
                I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <a href="mailto:your.email@example.com" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition">
                Say Hello
            </a>
        </section>
    );
}