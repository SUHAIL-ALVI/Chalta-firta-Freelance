"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Zap, Award, Lock, Heart } from "lucide-react"
import FooterSection from "./Sub-about"

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
  // ✅ Moved explore data inside this component
  const explore = {
    title: "What We Do",
    subtitle: "Comprehensive Government Services Under One Roof",
    description:
      "Chalta Firta Jan Seva Kendra serves as your one-stop destination for all government-related services and documentation needs.",
    sections: [
      {
        title: "चलता फिरता - डिजिटल जन सेवा केंद्र के बारे में,",
        content:
          "चलता फिरता - डिजिटल जन सेवा केंद्र, CSC द्वारा अप्रूव एक जन सेवा केंद्र है, और इस चलता फिरता - डिजिटल जन सेवा केंद्र को सुचारू रूप से चलाना हमारा कार्य है और हम एक CSC Vle हैं, जो CSC - कॉमन सर्विस सेंटर द्वारा अप्रूव है।",
      },
      {
        title: "(A)",
        content:
          "चलता फिरता - डिजिटल जन सेवा केंद्र ज़्यादातर ऑनलाइन/ऑफ़लाइन, सरकारी, गैर-सरकारी क्षेत्र के कार्यों व उनसे जुड़ी समस्याओं का समाधान ज्यादातर घर बैठे करता है, और आपको घर बैठे स्टेशनरी, अन्य घरेलू उपयोग की वस्तुएँ और शिक्षा सुविधाएँ भी प्रदान करता है।",
      },
      {
        title: "(B)",
        content:
          "इसके अलावा, चलता फिरता - डिजिटल जन सेवा केंद्र, ऑनलाइन/ऑफ़लाइन, सरकारी, गैर-सरकारी क्षेत्र से संबंधित आपकी समस्याओं और कार्यों के समाधान के लिए होम-सर्विस की सुविधा भी प्रदान करता है। सभी प्रकार की शिक्षा - प्रवेश फॉर्म व परीक्षा फॉर्म और सरकारी/निजी नौकरियों के लिए ऑनलाइन/ऑफलाइन फॉर्म भरना, सरकारी योजनाएँ, आधार, पैन, बैंकिंग, प्रमाणपत्र आदि।",
      },
      {
        title: "(C)",
        content:
          "किसी भी क्षेत्र से संबंधित कार्य और उनसे जुड़ी समस्याओं के समाधान के लिए, आप वॉयस कॉल - वीडियो कॉल और व्हाट्सएप चैट के माध्यम से संपर्क कर सकते हैं और होम - सर्विस की सुविधा प्राप्त करने के लिए, आप चलता फिरता - डिजिटल जन सेवा केंद्र के विशेषज्ञों की टीम से संपर्क करके अपॉइंटमेंट बुक करा सकते हैं।",
      },
    ],
  }

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
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{explore.title}</h1>
            <p className="text-xl text-blue-600 mb-6">{explore.subtitle}</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{explore.description}</p>
          </motion.div>

          {/* Content Sections */}
          <div className="grid gap-8">
            {explore.sections.map((section, index) => {
              const Icon = iconMap[section.title as keyof typeof iconMap] || Users
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
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
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
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Experience the convenience of digital government services today.
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
      <FooterSection/>
    </motion.section>
  )
}
