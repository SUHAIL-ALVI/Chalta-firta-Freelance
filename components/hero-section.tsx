"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Clock } from "lucide-react"
import { siteData } from "@/lib/data"
import Link from "next/link"

const statIcons = [Users, Award, Clock]

interface HeroSectionProps {
  onExploreClick: () => void
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const handleButtonClick = (href: string, text: string) => {
    if (text === "Explore Services") {
      onExploreClick()
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 
                 bg-gradient-to-br from-blue-50 via-white to-orange-50 
                 min-h-screen flex items-center mt-10"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* IMAGE → On top in mobile, left in desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src="/chalta-firta-logo.png"
                alt="Chalta Firta Jan Seva Kendra Logo"
                className="w-64 sm:w-80 ml-8 lg:w-96 mb-5 pb-5 h-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>

          {/* CONTENT → Below image on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
            >
              {siteData.hero.title}
              <span className="block bg-gradient-to-r text-xl sm:text-3xl from-blue-600 to-orange-600 bg-clip-text text-transparent">
                {siteData.hero.subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {siteData.hero.description}
            </motion.p>

            {/* Buttons */}
            {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
>
  {/* Primary Button */}
  <Link href="/csc">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 
                 hover:from-blue-700 hover:to-blue-800 text-white 
                 px-8 py-2 rounded-xl shadow-lg hover:shadow-2xl 
                 transition-all duration-300 font-medium"
    >
      हमारे बारे में
    </motion.button>
  </Link>

  {/* Secondary Button */}
  <Link href="/whyus">
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 237, 213, 0.4)" }} // light orange bg
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto border-2 border-orange-500 
                 text-orange-600 hover:bg-orange-50 
                 px-9 py-2 rounded-xl transition-all 
                 duration-300 font-bold bg-transparent"
    >
      हमें क्यों चुनें?
    </motion.button>
  </Link>
</motion.div>


            {/* Stats */}
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}