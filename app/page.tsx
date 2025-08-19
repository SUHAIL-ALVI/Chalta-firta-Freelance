"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { ExploreSection } from "@/components/explore-section"
import { Footer } from "@/components/footer"
import AssociatedCompanies from "./Connect/page"
import WeAreConnect from "@/components/We-are-connect"
import FooterSection from "@/components/Sub-about"



export default function Home() {
  const [showExplore, setShowExplore] = useState(false)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection onExploreClick={() => setShowExplore(true)} />
        <ServicesSection />
        <WeAreConnect />
        <ContactSection />      
        <Footer />
        <FooterSection />
       
      </main>

      <AnimatePresence>{showExplore && <ExploreSection onClose={() => setShowExplore(false)} />}</AnimatePresence>
    </>
  )
}
