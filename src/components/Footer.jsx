import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#A48082] dark:bg-[#1a1a1a] text-white dark:text-white/70">
      <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-4 mx-auto-5 flex flex-col md:flex-row justify-between gap-5 items-center text-sm">
        <Link to="/">
          <img
            src="https://i.ibb.co/GPQ47j1/glow-lounge-beauty-store-logo-white.png"
            alt="Glow Lounge Beauty Store"
            className="w-32"
          />
        </Link>
        <aside className="text-center">
          <p>Copyright ©2023. All right reserved.</p>
        </aside>
        <nav className="grid grid-cols-3 justify-self-center md:justify-self-end gap-5 items-center text-xl">
          <a className="hover:text-white/80">
            <FaFacebook />
          </a>
          <a className="hover:text-white/80">
            <FaInstagram />
          </a>
          <a className="hover:text-white/80">
            <FaTwitter />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
