"use client";

import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { Cpu, Server, Users, Cog } from "lucide-react";

export default function Skills() {
  const technical = [
    "LTE / 4G / 5G Network Operations",
    "Alarm Management",
    "Incident Management",
    "Fault Management",
    "Network Performance Analysis",
    "Network Troubleshooting",
    "VoLTE",
    "TCP / IP",
  ];

  const operational = [
    "Network Operations Center (NOC)",
    "Ericsson RAN Network Monitoring",
    "O&M (Operation & Maintenance)",
    "Third Party Vendors (Huawei & Nokia)",
    "Escalation Handling",
    "Project Delivery",
    "SLA & KPI Tracking",
  ];

  const soft = [
    "Communication",
    "Teamwork",
    "Vendor Coordination",
    "Problem Solving",
  ];

  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl  md:text-3xl font-extrabold text-sky-900 mb-10 text-center"
        >
          Professional Skills
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-sky-600" size={22} />
              <h2 className="text-xl font-semibold text-sky-800">
                Technical Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technical.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sm text-sky-800 hover:bg-sky-100 transition-colors font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Operational Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-sky-600" size={22} />
              <h2 className="text-xl font-semibold text-sky-800">
                Operational & Network Management
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {operational.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sm text-sky-800 hover:bg-sky-100 transition-colors font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-sky-600" size={22} />
              <h2 className="text-xl font-semibold text-sky-800">
                Professional & Interpersonal Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {soft.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sm text-sky-800 hover:bg-sky-100 transition-colors font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
