import React, { useState } from 'react';

const VoterEducation = () => {
    const [language, setLanguage] = useState('english');

    const titleTranslation = {
        english: "Voter Education",
        hindi: "मतदाता शिक्षा",
        marathi: "मतदाता शिक्षण"
    };

    const descriptionTranslation = {
        english: "Empowering citizens with the knowledge to make informed decisions during elections.",
        hindi: "चुनावांदरम्यान माहितीपूर्ण निर्णय घेण्यासाठी नागरिकांना सक्षमीकरण करणे.",
        marathi: "निवडणुकांच्या काळात माहितीपूर्ण निर्णय घेण्यासाठी नागरिकांना सक्षमीकरण करणे."
    };

    const whatIsTranslation = {
        english: "What is Voter Education?",
        hindi: "मतदाता शिक्षण म्हणजे काय?",
        marathi: "मतदाता शिक्षण म्हणजे काय?"
    };

    const importanceTranslation = {
        english: "Importance of Voter Education",
        hindi: "मतदाता शिक्षणाचे महत्त्व",
        marathi: "मतदाता शिक्षणाचे महत्त्व"
    };

    const resourcesTranslation = {
        english: "Resources for Voter Education",
        hindi: "मतदाता शिक्षणासाठी संसाधने",
        marathi: "मतदाता शिक्षणासाठी संसाधने"
    };

    return (
        <div className="bg-[#FFFCFA] min-h-screen">
            <header className="py-8 px-8 md:px-32">
                <h1 className="text-[36px] md:text-[48px] font-bold text-[#004274] text-center">
                    {titleTranslation[language]}
                </h1>
                <p className="text-[16px] md:text-[18px] text-center mb-8">
                    {descriptionTranslation[language]}
                </p>
                <div className="text-center mb-4">
                    <button onClick={() => setLanguage('english')} className="mr-2">English</button>
                    <button onClick={() => setLanguage('hindi')} className="mr-2">हिंदी</button>
                    <button onClick={() => setLanguage('marathi')} className="mr-2">मराठी</button>
                </div>
            </header>

            <section className="py-8 px-8 md:px-32">
                <h2 className="text-[24px] md:text-[30px] font-semibold text-[#004274] mb-4">
                    {whatIsTranslation[language]}
                </h2>
                <p className="text-[16px] md:text-[18px] mb-6">
                    {language === 'english' && "Voter education is the process of informing and educating voters about their rights, the voting process, and how to participate effectively in elections. It plays a crucial role in enhancing democratic participation and ensuring that every vote counts."}
                    {language === 'hindi' && "मतदाता शिक्षण म्हणजे मतदारांना त्यांच्या हक्कांबद्दल, मतदान प्रक्रियेबद्दल आणि निवडणुकांमध्ये प्रभावीपणे सहभागी होण्यासाठी कसे सहभागी करायचे याबद्दल माहिती देणे आणि शिक्षित करणे. हे लोकशाहीच्या सहभागास प्रोत्साहन देण्यात आणि प्रत्येक मत महत्वाचे असल्याचे सुनिश्चित करण्यात महत्त्वाची भूमिका बजावते."}
                    {language === 'marathi' && "मतदाता शिक्षण म्हणजे मतदारांना त्यांच्या हक्कांबद्दल, मतदान प्रक्रियेबद्दल आणि निवडणुकांमध्ये प्रभावीपणे सहभागी होण्यासाठी कसे सहभागी करायचे याबद्दल माहिती देणे आणि शिक्षित करणे. हे लोकशाहीच्या सहभागास प्रोत्साहन देण्यात आणि प्रत्येक मत महत्वाचे असल्याचे सुनिश्चित करण्यात महत्त्वाची भूमिका बजावते."}
                </p>

                <h2 className="text-[24px] md:text-[30px] font-semibold text-[#004274] mb-4">
                    {importanceTranslation[language]}
                </h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-[16px] md:text-[18px]">{language === 'english' ? "Increases voter turnout and participation." : language === 'hindi' ? "मतदाता टर्नआउट आणि सहभाग वाढवतो." : "मतदारांचा सहभाग आणि उपस्थिती वाढवतो."}</li>
                    <li className="text-[16px] md:text-[18px]">{language === 'english' ? "Educates citizens about their rights and responsibilities." : language === 'hindi' ? "नागरिकांना त्यांच्या हक्कांबद्दल आणि जबाबदाऱ्यांबद्दल शिक्षित करतो." : "नागरिकांना त्यांच्या हक्कांबद्दल आणि जबाबदाऱ्यांबद्दल शिक्षित करतो."}</li>
                    <li className="text-[16px] md:text-[18px]">{language === 'english' ? "Helps combat misinformation and promotes transparency." : language === 'hindi' ? "खोटी माहिती विरुद्ध लढण्यास मदत करते आणि पारदर्शकता वाढवते." : "खोटी माहिती विरुद्ध लढण्यात मदत करते आणि पारदर्शकता वाढवते."}</li>
                    <li className="text-[16px] md:text-[18px]">{language === 'english' ? "Encourages informed decision-making among voters." : language === 'hindi' ? "मतदारांमध्ये माहितीपूर्ण निर्णय घेण्यास प्रोत्साहन देते." : "मतदारांमध्ये माहितीपूर्ण निर्णय घेण्यास प्रोत्साहन देते."}</li>
                </ul>

                <h2 className="text-[24px] md:text-[30px] font-semibold text-[#004274] mb-4">
                    {resourcesTranslation[language]}
                </h2>
                <div className="space-y-4">
                    <div className="border border-[#004274] p-4 rounded-lg">
                        <h3 className="font-bold text-[18px] text-[#004274]">Official Guides</h3>
                        <p className="text-[16px] md:text-[18px]">Access official voter guides and handbooks that provide comprehensive information about the voting process.</p>
                    </div>

                    <div className="border border-[#004274] p-4 rounded-lg">
                        <h3 className="font-bold text-[18px] text-[#004274]">Workshops and Seminars</h3>
                        <p className="text-[16px] md:text-[18px]">Join workshops and seminars that focus on various aspects of the electoral process and voter rights.</p>
                    </div>

                    <div className="border border-[#004274] p-4 rounded-lg">
                        <h3 className="font-bold text-[18px] text-[#004274]">Online Resources</h3>
                        <p className="text-[16px] md:text-[18px]">Explore online platforms offering articles, videos, and tutorials related to voter education.</p>
                    </div>
                </div>
            </section>

            <footer className="py-8 px-8 md:px-32 text-center">
                <p className="text-[16px] md:text-[18px] text-gray-600">
                    For more information, visit the official website of the Election Commission of India: <a href="https://www.eci.gov.in" className="text-blue-500 underline">www.eci.gov.in</a>
                </p>
            </footer>
        </div>
    );
};

export default VoterEducation;
