"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, FileText } from "lucide-react"
import { siteData } from "@/lib/data"
import ContactCTA from "@/app/whatsup/page"
import WhatsUp from "./WhatsUp"


export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <WhatsUp />

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h4>
            <p className="text-gray-600 mb-4">Speak directly with our support team</p>
            <p className="text-sm text-gray-700 font-medium mb-2">{siteData.contact.phone}</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Call Now
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600 mb-4">Send us your queries and documents</p>
            <p className="text-sm text-gray-700 font-medium mb-2">{siteData.contact.email}</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Send Email
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h4>
            <p className="text-gray-600 mb-4">Come to our office for in-person assistance</p>
            <p className="text-sm text-gray-700 font-medium mb-2">{siteData.contact.address}</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Get Directions
            </Button>
          </motion.div>
        </motion.div>

        {/* Extra Components */}
        
     
      
      </div>
         
    </section>
  )
}

