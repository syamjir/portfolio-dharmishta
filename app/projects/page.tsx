"use client";

import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { Cpu, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Smart Helmet & Bike Telemetry System",
      icon: <Zap className="text-sky-600" size={22} />,
      description:
        "An IoT-based system designed to detect accidents and instantly alert emergency contacts using real-time telemetry — improving road safety and emergency response time.",
      features: [
        "Crash detection using integrated sensors and microcontroller.",
        "Automatic SMS alerts to emergency contacts.",
        "Real-time telemetry data transmission.",
        "Prototype built with Arduino and GSM module.",
      ],
      tech: ["Arduino", "GSM Module", "Accelerometer", "C Programming"],
    },
    {
      title: "RFID-Based Bus Pass System",
      icon: <Cpu className="text-sky-600" size={22} />,
      description:
        "A smart RFID system for automatic bus fare deduction and student identification with high accuracy and fast processing.",
      features: [
        "RFID cards for contactless fare and attendance logging.",
        "Built using MFRC522 RFID Reader and Arduino UNO.",
        "99% identification accuracy in tests.",
        "Integrated LCD display for travel info.",
      ],
      tech: ["Arduino UNO", "MFRC522 RFID", "LCD Display", "Embedded C"],
    },
  ];

  return (
    <PageTransition>
      <motion.section
        className="max-w-6xl mx-auto py-12 px-5 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-2xl  md:text-3xl sm:text-4xl font-extrabold text-sky-900 mb-10 text-center"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient Glow Border (hover effect) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200 via-blue-100 to-white opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                {/* Title + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  {p.icon}
                  <h2 className="text-xl font-semibold text-sky-800 leading-snug">
                    {p.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Highlights */}
                <h3 className="font-semibold text-sky-700 mb-2 text-sm">
                  Highlights:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-[15px]">
                  {p.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-sky-700 mb-2 text-sm">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-sky-100 border border-sky-200 rounded-full text-sky-800 font-medium hover:bg-sky-200 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </PageTransition>
  );
}
