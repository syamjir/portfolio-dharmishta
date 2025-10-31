"use client";

import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { Briefcase, CalendarDays, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Assistant Engineer",
      company: "Ericsson Telecommunications",
      duration: "May 2023 – Nov 2023",
      details: [
        "Managed and closed 90% of incidents via ticketing tool or customer inquiries, meeting performance targets.",
        "Assisted onsite engineers with equipment issues, reducing downtime by 20%.",
        "Made decisions to minimize downtime and ensure quick resolutions.",
        "Tools used: ITSM, FSM, ADC Build, Cellnex (Agora), CellCM, Wireless Infrastructure Tool.",
        "Coordinated with ISPs and vendors to address client infrastructure issues.",
        "Analyzed OSLA tickets and provided action plans for further improvements.",
        "Supported UK field engineers via on-call technical assistance.",
        "Oversaw First Time Fix (FTF) performance and ensured quick issue resolution.",
        "Handled project planning, scheduling, and vendor coordination to ensure timely execution.",
      ],
    },
    {
      role: "MS Automated Operations Engineer",
      company: "NR Switch N Radio",
      duration: "Sep 2022 – May 2023",
      details: [
        "Migration: Converted 100% of FSM database to ITSM for seamless integration.",
        "Service Monitoring: Managed service alarms and tickets using Telco IN platforms.",
        "Incident Management: Resolved 95% of incidents within SLA targets.",
        "Supported onsite engineers, improving performance and reducing resolution time by 15%.",
        "Dispatched onsite fault remedies, maintaining a 99% SLA/KPI adherence rate.",
        "Managed incident, service, and change requests using BMC Remedy and Ericsson OSS.",
      ],
    },
  ];

  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl  md:text-3xl sm:text-4xl font-extrabold text-sky-900 mb-12 text-center"
        >
          Professional Experience
        </motion.h1>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group bg-white rounded-2xl shadow-md border border-sky-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10 p-6 sm:p-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-sky-800 flex items-center gap-2">
                      <Briefcase size={22} className="text-sky-600" />
                      {exp.role}
                    </h2>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <CalendarDays size={16} /> {exp.duration}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                    <Award size={18} className="text-sky-500" /> Achievements &
                    Tasks
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 leading-relaxed">
                    {exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
