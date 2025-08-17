"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
];

export default function AssociatedCompanies() {
  return (
    <section className="relative w-full min-h-screen justify-center content-center bg-blue-50  py-8 md:py-12">
      {/* Title */}
      <div className="text-center mb-8 md:mb-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          We Are Connected With
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Trusted Companies In India
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...companies, ...companies].map((company, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={50}
                className="object-contain drop-shadow-md rounded-lg bg-white p-2 md:w-[140px] md:h-[70px]"
              />
              <p className="mt-2 text-xs md:text-sm font-medium text-gray-600 text-center">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <FooterSection />
    </section>
  );
}
