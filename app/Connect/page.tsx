"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Nios", logo: "/one.png" },
  { name: "HDFC", logo: "/two.png" },
  { name: "Sarkari Pariksha", logo: "/three.png" },
  { name: "Electicity Bill", logo: "/four.png" },
  { name: "CSC e Store", logo: "/five.png" },
  { name: "AXIS BANK", logo: "/six.png" },
  { name: "Star", logo: "/seven.png" },
  { name: "PM Kisaan", logo: "/eight.png" },
  { name: "NIELIT", logo: "/nine.png" },
  { name: "CSC", logo: "/ten.png" },
  { name: "IRCTC", logo: "/eleven.png" },
  { name: "Loan Bazar", logo: "/twelth.png" },
  { name: "e-Distt, UP", logo: "/thirtteen.png" },
  { name: "Aadhar", logo: "fourteen.png" },
  { name: "UTIITSL", logo: "/fifteen.png" },
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
      
    </section>
  );
}
