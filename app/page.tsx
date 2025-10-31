"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, LinkedinIcon, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center  text-gray-800 px-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
        {/* LEFT — INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex-1 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-900 leading-tight">
            Hi, I'm <span className="text-sky-600">Dharmishta R Nath</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A <span className="font-semibold">Network Engineer</span> with
            experience in telecom network operations, ITSM, and incident
            management. I focus on maintaining network reliability, improving
            uptime, and ensuring seamless global connectivity.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/experience"
              className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium shadow transition"
            >
              View Experience
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-gray-300 hover:bg-gray-100 rounded-lg font-medium transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center flex-1 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group"
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-[length:300%_300%] bg-gradient-to-r from-sky-400 via-blue-500 to-sky-700 animate-gradient-flow"></div>

            {/* Inner card */}
            <div className="relative bg-white/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              {/* Floating initials */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-sky-700 flex items-center justify-center text-white font-bold text-3xl mx-auto shadow-md"
              >
                DR
              </motion.div>

              <h2 className="mt-4 text-xl font-semibold text-sky-900">
                Network Engineer
              </h2>

              {/* Email */}
              <div className="mt-3 flex items-center justify-center gap-2 text-sky-700 font-medium text-sm sm:text-base">
                <Mail size={16} /> nathdharmishta@gmail.com
              </div>

              {/* Locations */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* India */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition">
                  <p className="font-semibold text-sky-800 mb-1 text-sm">
                    🇮🇳 India
                  </p>
                  <p className="text-gray-700 leading-snug text-sm">
                    <MapPin className="inline mr-1" size={14} />
                    Bangalore, India
                    <br />
                    <Phone className="inline mr-1" size={14} />
                    +91 86188 09171
                  </p>
                </div>

                {/* UAE */}
                <div className="border border-gray-200 rounded-lg p-4 hover:border-sky-300 transition flex flex-col items-center justify-center">
                  <p className="font-semibold text-sky-800 mb-1 text-sm">
                    🇦🇪 UAE
                  </p>
                  <p className="text-gray-700 leading-snug text-sm text-center">
                    <MapPin className="inline mr-1" size={14} />
                    Al Karama, UAE
                    <br />
                    <Phone className="inline mr-1" size={14} />
                    +971 58 209 4191
                  </p>
                  <a
                    href="https://wa.me/971582094191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 text-xs font-medium transition"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/dharmishta-r-nath"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sky-600 hover:underline text-sm font-medium"
              >
                <LinkedinIcon size={16} /> LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
