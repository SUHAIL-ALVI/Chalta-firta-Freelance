"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, ExternalLink } from "lucide-react"

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
    <footer className="relative  bg-gradient-to-b from-[#F37321] via-[#FF7C45] to-[#3B6BB0] text-gray-100">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to- from-[#F37321] via-[#FF7C45] to-[#3B6BB0] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <h3 className="text-2xl font-bold mb-2">Chalta Firta</h3>
              <p className="text-blue-600 font-medium text-lg mb-4">Digital Jan Seva Kendra</p>
              <p className="text-slate-200 leading-relaxed">
                Dedicated to serving the community with transparent, efficient, and accessible public services for all citizens.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-500 hover:text-white hover:border-blue-400 transition-all duration-300 bg-transparent border-gray-600 text-gray-300"
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
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-200 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4 text-slate-3S00">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>
                  Pillar No 88 Chandi Mandir Chauraha Delhi Garh Road  
                  <br />
                  Pilkhuwa Hapur Uttar Pradesh (245304)
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p>+91 9528232070</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p>chaltafirta1420@gmail.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>
                  All Days
                  <br />
                  8:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
