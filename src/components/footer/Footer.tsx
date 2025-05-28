// components/Footer.tsx
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5 md:px-20 py-16 space-y-12">
      {/* Top Section */}
      <div className=" mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 border-b-1  border-white">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">LOGO</h2>
          <p className="text-gray-300 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-400 text-sm">@Logo</p>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Zeux</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <p className="text-gray-300 text-sm">
            Lorem Ipsum is simply dummy text
          </p>
          <p className="text-gray-300 text-sm">
            of the printing and typesetting
          </p>
          <p className="text-gray-300 text-sm">industry.</p>
          <p className="text-gray-300 text-sm mt-2">+908 89097 890</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-end">
          <div className="flex md:justify-start justify-center gap-4 items-start ">
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:opacity-80"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:opacity-80"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:opacity-80"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white text-black p-2 rounded-full hover:opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm py-5 px-4">
        Copyright © 2021 Lorem All rights reserved
      </div>
    </footer>
  );
}
