"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "CSC VLE के बारे में,",
    author: "Chalta Firta ™",
    avatar: "/Logo.png",
    
    sub: "Village Level Entrepreneur",
    content:
      "CSC VLE (Village Level Entrepreneur) वह व्यक्ति है जो आपके शहर गाँव और कस्बे में डिजिटल सेवाओं को आसान, तेज़ और भरोसेमंद तरीके से उपलब्ध कराता है। हम सरकार और जनता के बीच एक मजबूत भरोसे की तरह काम करते हैं, ताकि हर नागरिक को ज्यादातर घर बैठें ही  सरकारी और गैर-सरकारी सेवाएँ मिल सकें।",
    sub2: "हमारे केंद्र से आप अनेक सेवाओं का लाभ उठा सकते हैं",
    content2:
      "आधार और पैन कार्ड से जुड़ी सेवाएँ",
    content3:
      "बैंकिंग और बीमा की सुविधाएँ",
      content4:
      "बिल भुगतान और रिचार्ज सेवाएँ",
      content5:
      "सरकारी योजनाओं का पंजीकरण",
      content6:
      "स्टेशनरी, अन्य घरेलू उपयोग की वस्तुएँ व डिजिटल प्रशिक्षण कार्यक्रम",
      content7:
      "हमारा उद्देश्य है कि हर नागरिक को तकनीक और सरकारी सेवाओं का लाभ बिना किसी परेशानी के मिले वो भी ज्यादातर घर बैठें । Chalta Firta - Digital Jan Seva Kendra के माध्यम से हम शहर गाँव-कस्बों में डिजिटल इंडिया का सपना साकार कर रहे हैं।",
      content8:
      "We Appreciate Your Valuable Time And Your Important Works. हम आपके कीमती समय और आवश्यक कार्यों की कदर करते है।",
  },
  {
    id: 2,
    title: "CSC के बारे में",
    author: "Chalta Firta ™",
    avatar: "Logo.png",
    
    sub: "कॉमन सर्विस सेंटर (CSC)",
    content:
      "कॉमन सर्विस सेंटर (CSC) भारत सरकार की एक महत्वपूर्ण पहल है, जिसका उद्देश्य देश के हर नागरिक को उनके नज़दीक ही विभिन्न सरकारी और गैर-सरकारी सेवाएँ उपलब्ध कराना है। यह डिजिटल इंडिया कार्यक्रम का अहम हिस्सा है, जो लोगों को तकनीक से जोड़कर सेवाओं को तेज़, आसान और पारदर्शी बनाता है।",
    
    content2:
      "CSC केंद्रों के माध्यम से नागरिक आधार, पैन, बैंकिंग, बीमा, बिल भुगतान, सरकारी योजनाओं का पंजीकरण, शिक्षा, स्वास्थ्य और अन्य अनेक डिजिटल सेवाओं का लाभ एक ही स्थान पर ले सकते हैं।",
       content3:
      "सरल शब्दों में, CSC वह पुल है जो सरकार की सेवाओं को सीधे जनता तक जोड़ता है — तेज़, सुरक्षित और सुलभ तरीके से।",
  },
];

export default function BlogStories() {
  return (
    <section className="relative w-full mt-5 bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
          क्यों चुनें चालता फिरता डिजिटल जन सेवा केंद्र?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          हमारे द्वारा दी जाने वाली सेवाओं की कहानियां और अनुभव।
        </p>
      </div>

      {/* Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 max-w-6xl mx-auto">
        {stories.map((story, idx) => (
          <motion.div
            key={story.id}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={story.avatar}
                alt={story.author}
                width={40}
                height={40}
                className="rounded-full border"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{story.author}</p>
            
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {story.title}
            </h3>

            <h4 className="text-sm text-blue-600 font-medium mb-2">{story.sub}</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              {story.content}
            </p>
            <br/>
            <h4 className="text-sm text-blue-600 font-medium mb-2">{story.sub2}</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content2}
            </p>
            <br/>
             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content3}
            </p>
            <br/>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content4}
            </p>
            <br/>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content5}
            </p>
            <br/>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content6}
            </p>
            <br/>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content7}
            </p>
            <br/>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {story.content8}
            </p>
            <br/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
