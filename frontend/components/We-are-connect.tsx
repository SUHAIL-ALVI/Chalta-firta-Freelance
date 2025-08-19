"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Nios", logo: "/one.png" },
  { name: "HDFC", logo: "/two.png" },
  { name: "Sarkari Pariksha", logo: "/three.png" },
  { name: "Electicity Bill", logo: "/four.png" },
  { name: "CSC e Store", logo: "/five.png" },
  { name: "AXIS BANK", logo: "/six.png" },
  { name: "Star Health Insurence", logo: "/seven.png" },
  { name: "PM Kisaan", logo: "/eight.png" },
  { name: "NIELIT", logo: "/nine.png" },
  { name: "CSC Academy", logo: "/ten.png" },
  { name: "IRCTC", logo: "/eleven.png" },
  { name: "Loan Bazar", logo: "/twelth.png" },
  { name: "e-Distt, UP", logo: "/thirtteen.png" },
  { name: "Aadhar", logo: "/fourteen.png" },
  { name: "UTIITSL", logo: "/fifteen.png" },
];

export default function WeAreConnect() {
  return (
    <section className="relative w-full bg-blue-50 py-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-6 md:mb-10 px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
          We Are Connected With
        </h2>
        <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
          Trusted Departments in India
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-10 md:gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15, // ⬅️ faster for mobile
            ease: "linear",
          }}
        >
          {[...companies, ...companies].map((company, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center flex-shrink-0 px-2"
              whileTap={{ scale: 0.95 }} // ⬅️ mobile tap feedback
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={80}
                height={40}
                className="object-contain drop-shadow-sm rounded-md bg-white p-2 sm:w-[100px] sm:h-[50px] md:w-[140px] md:h-[70px]"
              />
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 text-center">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
