"use client";

import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-sky-50 via-white to-white border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-semibold text-sky-900">
              Dharmishta R Nath
            </h3>
            <p className="text-sm text-gray-600">
              Network Engineer | Telecom Operations | ITSM | NOC
            </p>
          </div>

          {/* Center — Contact */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-600 text-sm items-center">
            <a
              href="mailto:nathdharmishta@gmail.com"
              className="flex items-center gap-2 hover:text-sky-700 transition-colors"
            >
              <Mail size={16} /> nathdharmishta@gmail.com
            </a>
            <a
              href="tel:+971582094191"
              className="flex items-center gap-2 hover:text-sky-700 transition-colors"
            >
              <Phone size={16} /> +918618809171
            </a>
          </div>

          {/* Right — Social */}
          <div className="flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/dharmishta-r-nath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:text-sky-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nathdharmishta@gmail.com"
              className="text-sky-700 hover:text-sky-900 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sky-100 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-sky-800">Dharmishta R Nath</span>.{" "}
          Built with ❤️
        </div>
      </div>
    </footer>
  );
}
