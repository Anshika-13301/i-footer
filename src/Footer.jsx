import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-blue-900 px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Column 1: Contact */}
        <div>
          <h2 className="text-xl font-bold mb-2">Renu Sharma Foundation</h2>
          <p><strong>Head Office:</strong> Lorem ipsum lorem ipsum lorem ipsum</p>
          <p><strong>Phone:</strong> +91-111-111-1111</p>
          <p><strong>Fax:</strong> 022-2222222</p>
          <p><strong>Email:</strong> info@renusharmafoundation.com</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/lorem" className="hover:underline">Lorem Ipsum</Link></li>
            <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
            <li><Link to="/employeer" className="hover:underline">Employeer</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Others */}
        <div>
          <h2 className="text-lg font-bold mb-2">Others</h2>
          <ul className="space-y-1">
            <li><Link to="/how-it-works" className="hover:underline">How it works</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* Column 4: About Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <ul className="space-y-1">
            <li><Link to="/milestone" className="hover:underline">Milestone</Link></li>
            <li><Link to="/webmail" className="hover:underline">Web Mail</Link></li>
            <li><Link to="/board" className="hover:underline">Board of Directors</Link></li>
            <li><Link to="/management" className="hover:underline">Senior Management</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
        <p className="text-sm mb-2 md:mb-0">©2024 All rights reserved</p>

        {/* Social Icons */}
        <div className="flex gap-4 text-blue-700 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
