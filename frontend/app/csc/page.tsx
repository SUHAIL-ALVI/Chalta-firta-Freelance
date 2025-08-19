"use client";

import FooterSection from "@/components/Sub-about";
import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "चलता फिरता - डिजिटल जन सेवा केंद्र के बारे में,",
    author: "Chalta Firta ™",
    avatar: "Logo.png",
    
    sub: "चलता फिरता",
    content:
      "चलता फिरता - डिजिटल जन सेवा केंद्र, CSC द्वारा अप्रूव एक जन सेवा केंद्र है, और इस चलता फिरता - डिजिटल जन सेवा केंद्र को सुचारू रूप से चलाना हमारा कार्य है और हम एक CSC Vle हैं, जो CSC - कॉमन सर्विस सेंटर द्वारा अप्रूव है।",
    
    content2:
      "चलता फिरता - डिजिटल जन सेवा केंद्र ज़्यादातर ऑनलाइन/ऑफ़लाइन, सरकारी, गैर-सरकारी क्षेत्र के कार्यों व उनसे जुड़ी समस्याओं का समाधान ज्यादातर घर बैठे करता है, और आपको घर बैठे स्टेशनरी, अन्य घरेलू उपयोग की वस्तुएँ और शिक्षा सुविधाएँ भी प्रदान करता है।",
       content3:
      "इसके अलावा, चलता फिरता - डिजिटल जन सेवा केंद्र, ऑनलाइन/ऑफ़लाइन, सरकारी, गैर-सरकारी क्षेत्र से संबंधित आपकी समस्याओं और कार्यों के समाधान के लिए होम-सर्विस की सुविधा भी प्रदान करता है।",
      content4:
      "सभी प्रकार की शिक्षा - प्रवेश फॉर्म व परीक्षा फॉर्म और सरकारी/निजी नौकरियों के लिए ऑनलाइन/ऑफलाइन फॉर्म भरना, सरकारी योजनाएँ, आधार, पैन, बैंकिंग, प्रमाणपत्र आदि।",
      content5:
      "किसी भी क्षेत्र से संबंधित कार्य और उनसे जुड़ी समस्याओं के समाधान के लिए, आप वॉयस कॉल - वीडियो कॉल और व्हाट्सएप चैट के माध्यम से संपर्क कर सकते हैं और होम - सर्विस की सुविधा प्राप्त करने के लिए, आप चलता फिरता - डिजिटल जन सेवा केंद्र के विशेषज्ञों की टीम से संपर्क करके अपॉइंटमेंट बुक करा सकते हैं।",
  },
  {
    id: 2,
    title: "चालता फिरता का उद्देश्य",
    author: "Chalta Firta ™",
    avatar: "Logo.png",
    
    sub: "चालता फिरता का उद्देश्य",
    content:
      "चालता फिरता का मुख्य उद्देश्य लोगों के दैनिक जीवन में सुविधाओं को और आसान, तेज़ और सुलभ बनाना है। हम एक ऐसे तरीके से सेवा प्रदान करते हैं जो आपके दरवाज़े तक ज़रूरी सामान और सुविधाएँ पहुँचाकर आपके समय और मेहनत की बचत करते है।",
    
    content2:
      "हमारा लक्ष्य है कि हर व्यक्ति बिना किसी झंझट और भाग-दौड़ के बिना अपनी ज़रूरत की चीज़ें और सेवाएँ घर बैठे प्राप्त कर सके। चालता फिरता, आधुनिक तकनीक और भरोसेमंद डिलीवरी सिस्टम के ज़रिए ग्राहकों को तेज़, सुरक्षित और गुणवत्तापूर्ण अनुभव देने के लिए प्रतिबद्ध है।",
       content3:
      "हमारा लक्ष्य है कि शहर हो या गाँव, हर ग्राहक को तेज़, भरोसेमंद और सुविधाजनक सेवाएँ मिलें — वो भी बिना किसी इंतज़ार और परेशानी के। चालता फिरता के साथ, अब आपको न भागना पड़ेगा, न लाइन में लगना पड़ेगा — क्योंकि सुविधा खुद आपके पास आएगी।",
    content4: "हम सिर्फ सेवाएँ नहीं देते, हम आपके जीवन को आसान और बेहतर बनाते हैं।",
    content5:
      "We Appreciate Your Valuable Time And Your Important Works. हम आपके कीमती समय और आवश्यक कार्यों की कदर करते है।",
  },
  {
    id: 3,
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
      
  },
  {
    id: 4,
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
    <section className="relative w-full mt-6 bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
          हमारे बारे में जानें।
        </h2>
       
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
            
          </motion.div>
        ))}

        <FooterSection />
      </div>
    </section>
  );
}
