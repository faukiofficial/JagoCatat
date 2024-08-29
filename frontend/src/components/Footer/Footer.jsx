import { Link, useLocation } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-white flex items-center justify-between px-2 md:px-6 py-4 drop-shadow shadow-sm fixed w-full bottom-0">
      <p className="text-xs md:text-sm text-gray-600">
        &copy; {new Date().getFullYear()} <a href="/" className="hover:underline">JagoCatat</a>.  All rights reserved.
      </p>

      <div className="text-xs md:text-sm text-gray-600">
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <span className="mx-2">|</span>
        <Link to="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
