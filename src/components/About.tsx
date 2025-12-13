export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
        <span className="text-cyan-400 mr-2">01.</span> About Me
        <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-4">
          <p>
            Hello! My name is Naveena and I enjoy creating things that live on the internet. My interest in web development started back when I decided to combine my engineering logic with creativity.
          </p>
          <p>
            Fast-forward to today, I have learnt diverse technologies and built several projects. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p>
            I am currently looking for new opportunities where I can apply my skills in <span className="text-cyan-400">Electronics & Communication</span> and <span className="text-cyan-400">Software Development</span>.
          </p>
        </div>
        
        {/* Profile Image Placeholder */}
        <div className="relative group">
          <div className="w-full h-64 bg-cyan-400 rounded absolute top-4 left-4 -z-10 group-hover:top-2 group-hover:left-2 transition-all"></div>
          <div className="w-full h-64 bg-slate-700 rounded flex items-center justify-center border-2 border-cyan-400 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
             {/* Replace src below with your actual photo URL later */}
             <span className="text-slate-500">Your Photo Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}