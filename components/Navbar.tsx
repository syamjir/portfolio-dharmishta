"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className=" fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-sky-100 shadow-sm">
      <div className="  max-w-6xl mx-auto px-5 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-800 grid place-items-center text-white font-bold shadow-sm"
          >
            DR
          </motion.div>
          <div className="hidden sm:block">
            <p className="font-bold text-sky-900 leading-tight group-hover:text-sky-700 transition-colors">
              Dharmishta R Nath
            </p>
            <p className="text-xs text-gray-500">Network Engineer</p>
          </div>
        </Link>

        {/* Desktop / Tablet Nav */}
        <div className="  hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const active = path === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-sm tracking-wide transition-colors ${
                  active ? "text-sky-700" : "text-gray-600 hover:text-sky-600"
                }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="active-link"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-sky-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="/Dharmishta's_Resume.pdf"
            download
            className="px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-md text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Tablet & Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className=" fixed inset-y-0 right-0 w-72 sm:w-80  backdrop-blur-xl border-l border-sky-200 shadow-2xl flex flex-col justify-between z-40 lg:hidden"
          >
            <div className=" bg-gradient-to-b from-sky-50 via-white to-sky-100 px-6 py-8 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-sky-800 text-lg">
                  Dharmishta R Nath
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 rounded-md hover:bg-sky-50"
                >
                  <X size={22} className="text-sky-700" />
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-medium text-gray-700 py-2 px-2 rounded-md hover:bg-sky-100 transition-colors ${
                    path === link.href && "text-sky-700 bg-sky-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="bg-gradient-to-b from-sky-100 via-white to-sky-200 px-6 pb-6">
              <a
                href="/Dharmishta's_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-md text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
