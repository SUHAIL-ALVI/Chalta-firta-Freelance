"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/data"
import { ArrowLeft, Shield, Users, Zap, Award, Lock, Heart } from "lucide-react"

const iconMap = {
  "Our Services": Users,
  "Digital Transformation": Zap,
  "Citizen Support": Heart,
  "Quality Assurance": Award,
  "Privacy & Security": Lock,
  "Community Impact": Shield,
}

interface ExploreSectionProps {
  onClose: () => void
}

export function ExploreSection({ onClose }: ExploreSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mb-8"
          >
            <Button variant="ghost" onClick={onClose} className="mr-4 hover:bg-blue-100">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          </motion.div>

          {/* Title Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">{siteData.explore.title}</h1>
           
          </motion.div>

          {/* Content Sections */}
          <div className="grid gap-8">
            {siteData.explore.sections.map((section, index) => {
              const Icon = iconMap[section.title as keyof typeof iconMap]
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-orange-600 mb-4">{section.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
                          
                        </div>
                        
                      </div>
                      
                    </CardContent>
                  </Card>
                  
                </motion.div>
                
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Thanks For Choosing Us</h3>
                <p className="text-xl mb-8 opacity-90">
                  चलता फिरता - डिजिटल जन सेवा केंद्र की ओर से धन्यवाद
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => {
                      onClose()
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View Our Services
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                    onClick={() => {
                      onClose()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
