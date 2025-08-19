"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* Main Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <Image
            src="/Logo.png"
            alt="Footer Logo"
            width={300}
            height={250}
            className="mx-auto ml-10"
          />
        </motion.div>

        {/* Large Animated Fading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{
            y: [0, -5, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          className="mt-4 text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold tracking-wide text-gray-900 select-none pointer-events-none"
        >
          Chalta Firta
        </motion.h1>
      </motion.section>

      {/* Footer */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center px-6 py-6 border-t border-gray-200">
        <p className="text-muted-foreground text-sm">
          © 2025 Chalta Firta - Jan Seva Kendra. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a
            href="#privacy"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#accessibility"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Accessibility
          </a>
        </div>
      </div>
    </section>
  );
}
