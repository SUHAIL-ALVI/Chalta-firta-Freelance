"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Web Development – Modern and scalable websites tailored to your needs.",
  "Cloud Solutions – Secure, reliable, and scalable infrastructure.",
  "Training & Workshops – Upskill your team with expert-led sessions.",
  "Consulting – Strategic guidance to transform your digital presence.",
  "Cybersecurity – Enterprise-grade solutions to safeguard your systems.",
  "24/7 Support – Always-on assistance for smooth operations.",
];

export default function WhatWeProvide() {
  return (
    <section className="relative w-full bg-transparent py-12 md:py-16">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          What We Provide
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          A quick look at the value and services we bring to our clients.
        </p>
      </div>

      {/* Points List */}
      <div className="max-w-3xl mx-auto px-6 md:px-0 space-y-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {service}
            </p>
          </motion.div>
        ))}
      </div>
      <FooterSection />
    </section>
  );
}
