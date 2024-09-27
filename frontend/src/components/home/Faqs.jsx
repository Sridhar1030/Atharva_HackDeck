"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "What provisions are in place for disabled persons during elections in India?",
        answer: "The Election Commission of India ensures that polling stations are accessible to disabled persons, providing facilities like ramps, accessible voting machines, and assistance from polling staff."
    },
    {
        question: "How can disabled persons register to vote?",
        answer: "Disabled persons can register online through the National Voter's Service Portal (NVSP) or by submitting a physical application to the local election office. Special provisions are made to facilitate their registration."
    },
    {
        question: "Are there any special voting arrangements for disabled voters?",
        answer: "Yes, disabled voters can request assistance during the voting process. They may also use a companion to help them cast their vote, and provisions for mail-in voting are available in certain cases."
    },
    {
        question: "What measures are taken to ensure the secrecy of votes for disabled persons?",
        answer: "The Election Commission implements strict protocols to maintain the confidentiality and secrecy of votes. Accessible voting machines are designed to ensure that disabled voters can cast their votes independently and privately."
    },
    {
        question: "Can disabled persons vote from home?",
        answer: "While disabled persons are encouraged to vote at polling stations, the Election Commission allows for postal ballots or special provisions for those who cannot travel to the polling stations due to severe disabilities."
    },
    {
        question: "How can disabled voters access information about their voting rights?",
        answer: "Information about voting rights for disabled persons can be found on the Election Commission of India's website and through various NGOs that advocate for disability rights."
    },
    {
        question: "Are there any specific helplines for disabled voters?",
        answer: "Yes, the Election Commission provides dedicated helplines for disabled voters to address their queries and assist them during the election process."
    },
    {
        question: "What steps are being taken to create awareness about voting rights for disabled persons?",
        answer: "The Election Commission conducts awareness campaigns, workshops, and outreach programs to educate disabled persons about their voting rights and the facilities available to them."
    },
    {
        question: "How can disabled voters report issues they face during elections?",
        answer: "Disabled voters can report issues to the election officials at polling stations or through the Election Commission's helpline. Complaints can also be submitted via the NVSP portal."
    },
    {
        question: "What initiatives are there to improve accessibility in future elections?",
        answer: "The Election Commission continuously works to improve accessibility by conducting assessments of polling stations, training staff on disability awareness, and implementing technology solutions for easier access."
    }
];
const faqsHindi = [
    {
        question: "भारत में चुनावों के दौरान दिव्यांग व्यक्तियों के लिए क्या प्रावधान हैं?",
        answer: "भारत के चुनाव आयोग सुनिश्चित करता है कि मतदान केंद्र दिव्यांग व्यक्तियों के लिए सुलभ हों, जैसे कि रैंप, सुलभ मतदान मशीनें और मतदान स्टाफ से सहायता प्रदान की जाती है।"
    },
    {
        question: "दिव्यांग व्यक्ति वोट के लिए कैसे पंजीकरण करा सकते हैं?",
        answer: "दिव्यांग व्यक्ति राष्ट्रीय मतदाता सेवा पोर्टल (NVSP) के माध्यम से ऑनलाइन पंजीकरण करा सकते हैं या स्थानीय चुनाव कार्यालय में भौतिक आवेदन जमा कर सकते हैं। उनकी पंजीकरण को सुविधाजनक बनाने के लिए विशेष प्रावधान किए गए हैं।"
    },
    {
        question: "दिव्यांग मतदाताओं के लिए कोई विशेष मतदान व्यवस्था है?",
        answer: "हां, दिव्यांग मतदाता मतदान प्रक्रिया के दौरान सहायता का अनुरोध कर सकते हैं। वे अपने वोट डालने में मदद के लिए एक साथी का भी उपयोग कर सकते हैं, और कुछ मामलों में मेल-इन वोटिंग के लिए प्रावधान उपलब्ध हैं।"
    },
    {
        question: "दिव्यांग व्यक्तियों के लिए वोटों की गोपनीयता सुनिश्चित करने के लिए क्या उपाय किए जाते हैं?",
        answer: "चुनाव आयोग वोटों की गोपनीयता और गोपनीयता बनाए रखने के लिए सख्त प्रोटोकॉल लागू करता है। सुलभ मतदान मशीनें सुनिश्चित करती हैं कि दिव्यांग मतदाता स्वतंत्र और गोपनीय तरीके से अपने वोट डाल सकें।"
    },
    {
        question: "क्या दिव्यांग व्यक्ति घर से वोट डाल सकते हैं?",
        answer: "हालांकि दिव्यांग व्यक्तियों को मतदान केंद्रों पर वोट डालने के लिए प्रोत्साहित किया जाता है, चुनाव आयोग उन लोगों के लिए डाक मतपत्र या विशेष प्रावधानों की अनुमति देता है जो गंभीर दिव्यांगता के कारण मतदान केंद्रों पर यात्रा नहीं कर सकते।"
    },
    {
        question: "दिव्यांग मतदाता अपने मतदान अधिकारों के बारे में जानकारी कैसे प्राप्त कर सकते हैं?",
        answer: "दिव्यांग व्यक्तियों के मतदान अधिकारों के बारे में जानकारी भारत के चुनाव आयोग की वेबसाइट और विभिन्न एनजीओ के माध्यम से प्राप्त की जा सकती है जो दिव्यांगता अधिकारों के लिए समर्थन करती हैं।"
    },
    {
        question: "दिव्यांग मतदाताओं के लिए कोई विशेष हेल्पलाइन है?",
        answer: "हां, चुनाव आयोग दिव्यांग मतदाताओं के लिए उनके प्रश्नों को हल करने और चुनाव प्रक्रिया के दौरान सहायता प्रदान करने के लिए समर्पित हेल्पलाइन प्रदान करता है।"
    },
    {
        question: "दिव्यांग व्यक्तियों के मतदान अधिकारों के बारे में जागरूकता पैदा करने के लिए कौन से कदम उठाए जा रहे हैं?",
        answer: "चुनाव आयोग दिव्यांग व्यक्तियों को उनके मतदान अधिकारों और उपलब्ध सुविधाओं के बारे में शिक्षित करने के लिए जागरूकता अभियान, कार्यशालाएं और आउटरीच कार्यक्रम आयोजित करता है।"
    },
    {
        question: "दिव्यांग मतदाता चुनावों के दौरान जिन समस्याओं का सामना करते हैं, उन्हें कैसे रिपोर्ट कर सकते हैं?",
        answer: "दिव्यांग मतदाता मतदान केंद्रों पर चुनाव अधिकारियों को समस्याएं रिपोर्ट कर सकते हैं या चुनाव आयोग की हेल्पलाइन के माध्यम से। शिकायतें NVSP पोर्टल के माध्यम से भी प्रस्तुत की जा सकती हैं।"
    },
    {
        question: "भविष्य के चुनावों में सुलभता सुधारने के लिए कौन से पहलों हैं?",
        answer: "चुनाव आयोग सुलभता में सुधार के लिए मतदान केंद्रों का मूल्यांकन करने, दिव्यांगता जागरूकता पर स्टाफ को प्रशिक्षित करने और अधिक आसान पहुँच के लिए प्रौद्योगिकी समाधान लागू करने का निरंतर काम करता है।"
    }
];

const faqsMarathi = [
    {
        question: "भारतामध्ये निवडणुकांदरम्यान दिव्यांग व्यक्तींसाठी कोणते नियम आहेत?",
        answer: "भारताचे निवडणूक आयोग हे सुनिश्चित करतो की मतदान केंद्रे दिव्यांग व्यक्तींसाठी प्रवेशयोग्य असतील, ज्यामध्ये रॅम्प, प्रवेशयोग्य मतदान यंत्रे आणि मतदान कर्मचाऱ्यांकडून सहाय्य प्रदान करणे यांचा समावेश आहे."
    },
    {
        question: "दिव्यांग व्यक्ती कसे मतदानासाठी नोंदणी करू शकतात?",
        answer: "दिव्यांग व्यक्ती राष्ट्रीय मतदाता सेवा पोर्टल (NVSP) द्वारे ऑनलाइन नोंदणी करू शकतात किंवा स्थानिक निवडणूक कार्यालयात भौतिक अर्ज सादर करू शकतात. त्यांच्या नोंदणीला सुलभ बनवण्यासाठी विशेष नियम केले जातात."
    },
    {
        question: "दिव्यांग मतदारांसाठी विशेष मतदान व्यवस्था आहेत का?",
        answer: "होय, दिव्यांग मतदार मतदान प्रक्रियेदरम्यान सहाय्य मागू शकतात. त्यांना त्यांच्या मताचा उपयोग करण्यासाठी एक साथीदार असू शकतो, आणि काही प्रकरणांमध्ये मेल-इन मतदानाची व्यवस्था उपलब्ध आहे."
    },
    {
        question: "दिव्यांग व्यक्तींसाठी मतदानाची गुप्तता सुनिश्चित करण्यासाठी कोणते उपाय केले जातात?",
        answer: "निवडणूक आयोग मतांच्या गुप्ततेची आणि गोपनीयतेची खात्री करण्यासाठी कडक नियमांचे पालन करतो. प्रवेशयोग्य मतदान यंत्रे सुनिश्चित करतात की दिव्यांग मतदार त्यांच्या मतांची स्वतंत्रपणे आणि गुप्तपणे नोंदणी करू शकतात."
    },
    {
        question: "दिव्यांग व्यक्ती घरातून मतदान करू शकतात का?",
        answer: "दिव्यांग व्यक्तींना मतदान केंद्रांवर मतदान करण्यासाठी प्रोत्साहित केले जात असले तरी, निवडणूक आयोग गंभीर दिव्यांगता असलेल्या व्यक्तींसाठी डाक मतपत्र किंवा विशेष प्रावधानांची परवानगी देतो."
    },
    {
        question: "दिव्यांग मतदार त्यांच्या मतदान अधिकारांची माहिती कशी मिळवू शकतात?",
        answer: "दिव्यांग व्यक्तींच्या मतदान अधिकारांबद्दल माहिती भारताचे निवडणूक आयोगाचे वेबसाइट आणि विविध एनजीओमार्फत मिळवू शकतात, जे दिव्यांगतेच्या अधिकारांसाठी समर्थन करतात."
    },
    {
        question: "दिव्यांग मतदारांसाठी विशेष हेल्पलाइन आहेत का?",
        answer: "होय, निवडणूक आयोग दिव्यांग मतदारांसाठी त्यांच्या प्रश्नांचे समाधान करण्यासाठी आणि निवडणूक प्रक्रियेदरम्यान सहाय्य प्रदान करण्यासाठी समर्पित हेल्पलाइन उपलब्ध करते."
    },
    {
        question: "दिव्यांग व्यक्तींच्या मतदान अधिकारांबद्दल जागरूकता निर्माण करण्यासाठी कोणती पावले उचलली जात आहेत?",
        answer: "निवडणूक आयोग दिव्यांग व्यक्तींना त्यांच्या मतदान अधिकारांबद्दल आणि उपलब्ध सुविधांबद्दल माहिती देण्यासाठी जागरूकता मोहीम, कार्यशाळा आणि आउटरीच कार्यक्रम आयोजित करतो."
    },
    {
        question: "दिव्यांग मतदार निवडणुकांदरम्यान तोंड देणाऱ्या समस्यांची माहिती कशी देऊ शकतात?",
        answer: "दिव्यांग मतदार मतदान केंद्रांवर निवडणूक अधिकाऱ्यांना समस्या नोंदवू शकतात किंवा निवडणूक आयोगाच्या हेल्पलाइनवर संपर्क साधू शकतात. तक्रारी NVSP पोर्टलद्वारे देखील सादर केल्या जाऊ शकतात."
    },
    {
        question: "भविष्यातील निवडणुकांमध्ये सुलभता सुधारण्यासाठी कोणती उपक्रम आहेत?",
        answer: "निवडणूक आयोग मतदान केंद्रांचे मूल्यमापन करून, दिव्यांगता जागरूकता प्रशिक्षण देऊन आणि सोयीस्कर प्रवेशासाठी तंत्रज्ञान उपाय लागू करून सुलभतेसाठी सतत कार्यरत आहे."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [language, setLanguage] = useState('english');

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const getTranslation = (index) => {
        if (language === 'hindi') {
            return faqsHindi[index];
        } else if (language === 'marathi') {
            return faqsMarathi[index];
        } else {
            return faqs[index];
        }
    };

    const titleTranslation = {
        english: "FAQs",
        hindi: "अक्सर पूछे जाने वाले प्रश्न",
        marathi: "वारंवार विचारले जाणारे प्रश्न"
    };

    const descriptionTranslation = {
        english: "Find answers to frequently asked questions about elections for disabled persons.",
        hindi: "विकलांग व्यक्तियों के लिए चुनावों से संबंधित अक्सर पूछे जाने वाले प्रश्नों के उत्तर खोजें।",
        marathi: "विकलांग व्यक्तींसाठी निवडणुकांबद्दल वारंवार विचारले जाणारे प्रश्नांचे उत्तर शोधा."
    };

    return (
        <div className="bg-[#FFFCFA]">
            <div className="py-8 px-8 md:px-32">
                <div className="text-[36px] md:text-[48px] font-bold text-[#004274]">
                    {titleTranslation[language]}
                </div>
                <div className="text-[16px] md:text-[18px] mb-8">
                    {descriptionTranslation[language]}
                </div>
                <div className="mb-4">
                    <button onClick={() => setLanguage('english')} className="mr-2">English</button>
                    <button onClick={() => setLanguage('hindi')} className="mr-2">हिंदी</button>
                    <button onClick={() => setLanguage('marathi')} className="mr-2">मराठी</button>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const translation = getTranslation(index);
                        return (
                            <div key={index} className="border border-[#004274] p-4 rounded-lg">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="font-bold">
                                        {translation.question}
                                    </div>
                                    <span className="text-gray-600">
                                        {openIndex === index ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 5a1 1 0 00-1 1v8a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="mt-2">
                                        {translation.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Faq;
