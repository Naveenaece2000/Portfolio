import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-8 text-center bg-navy pb-10">
            <div className="flex justify-center gap-6 mb-4 text-slate hover:text-green">
                <a href="#" className="hover:text-green hover:-translate-y-1 transition"><FaGithub size={20} /></a>
                <a href="#" className="hover:text-green hover:-translate-y-1 transition"><FaLinkedin size={20} /></a>
                <a href="#" className="hover:text-green hover:-translate-y-1 transition"><FaTwitter size={20} /></a>
            </div>
            <p className="text-slate text-sm font-mono hover:text-green transition cursor-pointer">
                Designed & Built by Kunal Das
            </p>
        </footer>
    );
}