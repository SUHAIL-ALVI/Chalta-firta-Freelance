"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?",
    author: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    date: "August 10, 2025",
    sub: "क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?",
    content:
      "समय-समय पर अपडेट्स देना– हम आपको समय समय पर सभी Online/Offline, सरकारी-गैर सरकारी योजनाओं व सेवाओ और शिक्षा से जुड़ी जानकारी प्रदान करते है।",
    sub2: "सुविधा आपके दरवाज़े पर",
    content2:
      "सुविधा आपके दरवाज़े पर अब आपको अपने काम के लिए लाइन में खड़ा होने की ज़रूरत नहीं और न ही अपना कीमती समय खराब करने की। हम आपकी सभी Online/Offline और सरकारी- गैर सरकारी सेवाएं व उनसे जुड़ी समस्या को हल ज्यादातर घर बैठें ही करते हैं।",
  },
  {
    id: 2,
    title: "क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?",
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    date: "August 12, 2025",
    sub: "समय और की बचत",
    content:
      " यात्रा करने और बार-बार चक्कर लगाने की झंझट से छुटकारा तेज़, और आसान सेवा के साथ।",
      sub2: " विश्वसनीय और पारदर्शी सेवा",
    content2:
      " हर काम पूरी तरह सुरक्षित और अधिकृत तरीके से किया जाता है। और आपके के सभी डॉक्यूमेंट व पर्सनल जानकारी हमारे यहां हमेशा सुरक्षित है हम आपके डॉक्यूमेंट व व्यक्तिगत जानकारी किसी अन्य अनॉथराइज्ड के साथ साझा नहीं करते।",
  },
  {
    id: 3,
    title: "क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?",
    author: "Michael Lee",
    avatar: "https://i.pravatar.cc/100?img=3",
    date: "August 15, 2025",
    sub: " सभी सेवाएं एक जगह",
    content:
      "सरकारी योजनाएं, ऑनलाइन आवेदन, बिल भुगतान, बैंकिंग, बीमा, शिक्षा और अन्य घरेलू प्रोडक्ट स्टेशनरी की सेवाएं – सब कुछ एक ही प्लेटफ़ॉर्म पर।",
      sub2: "आपका भरोसेमंद साथी",
    content2: "हमारा लक्ष्य है कि हर व्यक्ति बिना किसी परेशानी के अपने हक़ की सेवाएं आसानी से प्राप्त कर सके।",
    sub3: "हर महीने समय पर बिना किसी अतिरिक्त शुल्क के बिजली बिल भुगतान",
    content3: "हम हर महीने बिना किसी भी अतरिक्त शुल्क के आपका बिजली बिल भुगतान करते है और साथ ही आकर्षक ऑफ़र के साथ। ऑफ़र सरकार की तरफ से लागू होते है।",
  },
];

export default function BlogStories() {
  return (
    <section className="relative w-full bg-transparent py-12 mt-10 md:py-16">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?
        </h2>
        
      </div>

      {/* Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-6xl mx-auto">
        {stories.map((story, idx) => (
          <motion.div
            key={story.id}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Author */}
            

            {/* Content */}
            <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
            <h4 className="text-sm text-blue-600 mb-4">
              {story.sub}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content}
            </p>
            <br/>
            <h4 className="text-sm text-blue-600 mb-4">
              {story.sub2}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content2}
            </p>
            <br/>
            {/** extra */}
            <h4 className="text-sm text-blue-600 mb-4">
              {story.sub3}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content3}
            </p>
          </motion.div>
        ))}
      </div>
      <FooterSection />
    </section>
  );
}
