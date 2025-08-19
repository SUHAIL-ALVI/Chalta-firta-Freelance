"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsUp() {
  const phoneNumber = "+919528232070";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <section className="relative w-full justify-center content-center px-4 py-16 sm:py-20 overflow-hidden">
      {/* Background with gradient + texture */}
      <div className="absolute inset-0 bg-blue-50" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)", // dotted texture
          backgroundSize: "24px 24px",
        }}
      />

      {/* Connection-like gradient lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(225deg, rgba(249,115,22,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800"
        >
          Get in Touch With Us
        </motion.h2>

        {/* Phone Number */}
        <motion.a
          href={`tel:${phoneNumber}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-lg sm:text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Phone className="w-6 h-6 text-blue-600" />
          <span>{phoneNumber}</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 
                         bg-green-500 hover:bg-green-600 text-white 
                         px-8 py-4 rounded-2xl text-lg sm:text-xl font-semibold 
                         shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.button>
          </Link>
        </motion.div>
      </div>
     
    </section>
  );
}
