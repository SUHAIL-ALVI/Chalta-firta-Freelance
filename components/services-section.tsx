"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, CreditCard, Shield, Phone, MapPin } from "lucide-react"
import { ServiceModal } from "./service-modal"

{/**const services = [
  {
    icon: FileText,
    title: "Document Services",
    description:
      "Birth certificates, death certificates, income certificates, and other essential document processing.",
    href: "#documents",
    image: "/placeholder-altkm.png",
    details:
      "Our document services provide comprehensive assistance for all your essential paperwork needs. We handle birth certificates, death certificates, income certificates, caste certificates, domicile certificates, and various other government-issued documents with complete accuracy and efficiency.",
    requirements: [
      "Valid Photo ID (Aadhaar/Voter ID/Passport)",
      "Address Proof (Utility Bill/Bank Statement)",
      "Relevant supporting documents",
      "Passport size photographs (2 copies)",
      "Application form (duly filled)",
    ],
    processingTime: "1-2 working days",
    fees: "₹... Depends on document type",
    steps: [
      "Submit application with required documents",
      "Document verification by our team",
      "Processing at government office",
      "Quality check and review",
      "Document ready for collection",
    ],
  },
  {
    icon: Users,
    title: "Citizen Registration",
    description: "Voter ID registration, Aadhaar enrollment, and other citizen identification services.",
    href: "#registration",
    image: "/voter-aadhaar-registration.png",
    details:
      "Complete citizen registration services including new voter ID applications, Aadhaar enrollment and updates, PAN card applications, and other essential identification document services. Our trained staff ensures accurate data entry and smooth processing.",
    requirements: [
      "Age proof document",
      "Address proof (recent)",
      "Identity proof",
      "Passport size photographs",
      "Mobile number for OTP verification",
    ],
    processingTime: "15-30 days",
    fees: "₹25 - ₹100",
    steps: [
      "Fill registration form with personal details",
      "Biometric data capture (fingerprints, photo)",
      "Document verification and submission",
      "Application processing at respective offices",
      "Receive registration confirmation and tracking ID",
    ],
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    description: "Banking assistance, pension schemes, insurance enrollment, and financial aid applications.",
    href: "#financial",
    image: "/financial-services-counter.png",
    details:
      "Comprehensive financial services including bank account opening assistance, pension scheme enrollment, insurance policy applications, loan documentation support, and various government financial aid program applications.",
    requirements: [
      "Income proof documents",
      "Bank statements (if applicable)",
      "Identity and address proof",
      "Nominee details and documents",
      "Employment/business proof",
    ],
    processingTime: "7-21 days",
    fees: "₹100 - ₹500",
    steps: [
      "Consultation for suitable financial products",
      "Document collection and verification",
      "Application form completion",
      "Submission to respective financial institutions",
      "Follow-up and status updates until approval",
    ],
  },
  {
    icon: Shield,
    title: "Government Schemes",
    description: "Information and enrollment for various government welfare schemes and benefits.",
    href: "#schemes",
    image: "/welfare-info-center.png",
    details:
      "Access to various government welfare schemes including PM-KISAN, Ayushman Bharat, housing schemes, education scholarships, employment programs, and other central and state government benefit programs.",
    requirements: [
      "Eligibility documents as per scheme",
      "Income certificate",
      "Caste certificate (if applicable)",
      "Bank account details",
      "Family composition proof",
    ],
    processingTime: "10-45 days",
    fees: "Free - ₹50",
    steps: [
      "Scheme eligibility assessment",
      "Required document compilation",
      "Online/offline application submission",
      "Verification by concerned authorities",
      "Benefit activation and confirmation",
    ],
  },
  {
    icon: Phone,
    title: "Digital Services",
    description: "Online application assistance, digital payments, and e-governance support.",
    href: "#digital",
    image: "/digital-services-center.png",
    details:
      "Complete digital services support including online government portal navigation, digital payment assistance, e-governance service applications, digital document downloads, and technology support for senior citizens.",
    requirements: [
      "Mobile number for OTP",
      "Email ID (if available)",
      "Relevant documents for online applications",
      "Bank details for digital payments",
      "Basic identification proof",
    ],
    processingTime: "Instant - 5 days",
    fees: "₹20 - ₹100",
    steps: [
      "Service requirement assessment",
      "Portal registration/login assistance",
      "Online form filling and document upload",
      "Payment processing (if required)",
      "Application tracking and status updates",
    ],
  },
  {
    icon: MapPin,
    title: "Local Services",
    description: "Property registration, local permits, and community-specific administrative services.",
    href: "#local",
    image: "/local-gov-office.png",
    details:
      "Local administrative services including property registration assistance, trade license applications, building permits, NOC certificates, local tax payments, and other municipality/panchayat related services.",
    requirements: [
      "Property documents (if applicable)",
      "Business registration proof",
      "Local address proof",
      "Tax payment receipts",
      "NOC from relevant authorities",
    ],
    processingTime: "5-30 days",
    fees: "₹100 - ₹1000",
    steps: [
      "Service type identification and consultation",
      "Document preparation and verification",
      "Application submission to local authorities",
      "Inspection/verification (if required)",
      "Certificate/permit issuance and delivery",
    ],
  },
] */}

const services = [
  {
    icon: FileText, // Use appropriate icon
    title: "All Types Form Filling Services",
    description: "We assist in filling various government and private forms efficiently.",
    href: "#form-filling",
    image: "/All Services.png",
    details:
      "Our team helps citizens accurately fill forms for government schemes, certificates, and other services. We ensure correctness to avoid delays or rejection.",
    requirements: [
      "Relevant documents for the specific form",
      "Valid photo ID",
      "Address proof",
      "Passport size photographs (if required)",
    ],
    processingTime: "1-5 working days",
    fees: "₹50 - ₹200 depending on form type",
    steps: [
      "Collect required documents from the citizen",
      "Fill the form accurately",
      "Verify details with citizen",
      "Submit to respective office or portal",
      "Provide confirmation or acknowledgment",
    ],
  },
  {
    icon: Users, // Use suitable icon
    title: "Aadhaar Services",
    description: "Aadhaar enrollment, update, and linking services.",
    href: "#aadhaar",
    image: "/Aadhar.png",
    details:
      "Complete Aadhaar services including new enrollment, updates, corrections, and linking with other government services. Our trained staff ensures smooth processing.",
    requirements: [
      "Valid photo ID (Passport/Voter ID/Driving License)",
      "Address proof",
      "Passport size photographs (2 copies)",
      "Mobile number for OTP verification",
    ],
    processingTime: "1-15 days",
    fees: "Free / Government Prescribed",
    steps: [
      "Submit Aadhaar application or update request",
      "Verification of documents",
      "Biometric data capture (fingerprints & photo)",
      "Processing at UIDAI office",
      "Receive Aadhaar update/enrollment confirmation",
    ],
  },
  {
    icon: CreditCard, // Use suitable icon
    title: "PAN Card Services",
    description: "Application and correction services for PAN card.",
    href: "#pan-card",
    image: "/pencard.png",
    details:
      "Apply for a new PAN card or update details like name, address, and date of birth. We ensure forms are correctly submitted to avoid delays.",
    requirements: [
      "Identity proof",
      "Address proof",
      "Date of birth proof",
      "Passport size photograph",
    ],
    processingTime: "7-15 working days",
    fees: "₹110 - ₹120",
    steps: [
      "Collect required documents",
      "Fill PAN card application",
      "Verify details with citizen",
      "Submit to NSDL/TIN portal",
      "Receive PAN card confirmation or dispatch",
    ],
  },
  {
    icon: Shield, // Use suitable icon
    title: "Utilities Services",
    description: "Electricity, water, and other utility bill submissions.",
    href: "#utilities",
    image: "/waterE.png",
    details:
      "We help citizens submit utility bills for payment or record-keeping. Services include electricity, water, gas, and other municipal utilities.",
    requirements: [
      "Bill copy",
      "Customer ID or account number",
      "Valid photo ID (if required)",
    ],
    processingTime: "Instant - 3 days",
    fees: "Free / No charge for submission",
    steps: [
      "Collect bill and details",
      "Verify customer information",
      "Submit bill to respective utility provider",
      "Provide acknowledgment to citizen",
    ],
  },
  {
    icon: Phone, // Use suitable icon
    title: "Financial and Loan Services",
    description: "Banking, loan applications, insurance, and financial aid assistance.",
    href: "#financial",
    image: "/Loan.png",
    details:
      "We assist citizens with bank account openings, loan applications, insurance policies, and government financial schemes.",
    requirements: [
      "Identity and address proof",
      "Income proof (if applicable)",
      "Bank account details",
      "Nominee details (if required)",
    ],
    processingTime: "7-21 days",
    fees: "₹100 - ₹500 depending on service",
    steps: [
      "Consultation for suitable financial product",
      "Document collection and verification",
      "Application submission",
      "Follow-up and status updates until approval",
    ],
  },
  {
    icon: MapPin, // Use suitable icon
    title: "Educational Services",
    description: "School/college admissions, scholarship applications, and certificate verifications.",
    href: "#education",
    image: "/education.png",
    details:
      "We provide assistance in educational services like admission forms, scholarship applications, mark sheet verification, and other education-related documentation.",
    requirements: [
      "Identity proof",
      "Educational certificates",
      "Admission or scholarship forms",
      "Passport size photographs",
    ],
    processingTime: "3-30 days",
    fees: "₹50 - ₹300 depending on service",
    steps: [
      "Collect required documents",
      "Fill application/registration forms",
      "Verify and submit forms to the institution or authority",
      "Provide confirmation or tracking ID to citizen",
    ],
  },
];



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive public services designed to serve the community with efficiency, transparency, and
              dedication
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 rounded-2xl overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <motion.div
                      className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-7 h-7 text-blue-600" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6">
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:gradient-bg-primary group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent border-2 border-gray-300 text-gray-700 hover:shadow-lg py-3 rounded-xl font-medium"
                        onClick={() => handleLearnMore(service)}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
    </>
  )
}
