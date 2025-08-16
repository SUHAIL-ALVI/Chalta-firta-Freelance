"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ExploreSection } from "@/components/explore-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [showExplore, setShowExplore] = useState(false)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection onExploreClick={() => setShowExplore(true)} />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>

      <AnimatePresence>{showExplore && <ExploreSection onClose={() => setShowExplore(false)} />}</AnimatePresence>
    </>
  )
}
