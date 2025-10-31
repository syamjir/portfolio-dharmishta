"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:nathdharmishta@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl  md:text-3xl font-extrabold text-sky-900 mb-10 text-center"
        >
          Get in Touch
        </motion.h1>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* India Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-sky-800 mb-3">
              🇮🇳 India
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="text-sky-600" size={18} />{" "}
                nathdharmishta@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-sky-600" size={18} /> +91 86188 09171
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="text-sky-600" size={18} /> Bangalore, India
              </p>
            </div>
          </motion.div>

          {/* UAE Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-sky-800 mb-3">🇦🇪 UAE</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="text-sky-600" size={18} />{" "}
                nathdharmishta@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-sky-600" size={18} /> +971 58 209 4191
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="text-sky-600" size={18} /> Al Karama, UAE
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendMail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 space-y-4"
        >
          <h2 className="text-xl font-semibold text-sky-800 mb-2">
            Send a Message
          </h2>
          <input
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-sky-300 outline-none"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-sky-300 outline-none"
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="border border-gray-300 rounded-md p-3 w-full min-h-[120px] focus:ring-2 focus:ring-sky-300 outline-none"
            placeholder="Your message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors"
          >
            <Send size={18} /> Send Message
          </button>
        </motion.form>
      </section>
    </PageTransition>
  );
}
