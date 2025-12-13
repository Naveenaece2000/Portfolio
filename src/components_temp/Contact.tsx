export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
            <p className="text-green font-mono mb-4">04. What's Next?</p>
            <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-slate text-lg mb-12 max-w-xl mx-auto">
                Although I’m not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a
                href="mailto:naveenaece2000@gmail.com"
                className="px-8 py-4 border border-green text-green rounded hover:bg-green/10 transition"
            >
                Say Hello
            </a>
        </section>
    );
}