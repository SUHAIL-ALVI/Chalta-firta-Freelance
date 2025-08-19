"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { name: "About Us", href: "/csc" },
  { name: "Services", href: "/Connect" },
  { name: "Contact", href: "/whatsup" },

]



const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Chalta Firta</h3>
              <p className="text-primary font-medium text-lg mb-4">Digital Jan Seva Kendra</p>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to serving the community with transparent, efficient, and accessible public services for all
                citizens.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
         

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                   Pillar No 88 Chandi Mandir Chauraha Delhi Garh Road  
                    <br />
                   Pilkhuwa Hapur Uttar Pradesh (245304)
                    
                  
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  
                  <p className="text-muted-foreground">+91 9528232070</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">chaltafirta1420@gmail.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                   AllDays
                    <br />
                    8:00 AM - 11:00 PM
                    
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-12 pt-8"
        >
          
        </motion.div>

        {/** <section>
          <Image
            src="/Logo.png"
            alt="Footer Image"
            width={500}
            height={300}
            className="mt-8 mx-auto flex justify-center items-center"
          />
        </section>*/}

        {/**Chalta firta image text start */}

       <section className="relative w-full overflow-hidden bg-transparent">
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
            className="mx-auto"
          />
        </motion.div>

        {/* Large Fading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          animate={{ 
            y: [0, -5, 0], 
            opacity: [0.08, 0.12, 0.08] 
          }}
          
          className="mt-4 text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold tracking-wide text-gray-900 select-none pointer-events-none"
        >
          Chalta Firta
        </motion.h1>
      </motion.section>
    </section>

    {/** footerrrr */}


    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 Chalta Firta - Jan Seva Kendra. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
        
      </div>
    </footer>
  )
}
