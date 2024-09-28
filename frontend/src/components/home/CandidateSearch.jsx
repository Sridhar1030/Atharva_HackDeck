// import React, { useState } from 'react';

// const candidatesData = [
//     { id: 1, name: 'John Doe', state: 'California', city: 'Los Angeles', suburban: 'Downtown' },
//     { id: 2, name: 'Jane Smith', state: 'California', city: 'San Francisco', suburban: 'South Bay' },
//     { id: 3, name: 'Samuel Green', state: 'Texas', city: 'Austin', suburban: 'East Austin' },
//     { id: 4, name: 'Emily White', state: 'Texas', city: 'Houston', suburban: 'Midtown' },
// ];

// const CandidateSearch = () => {
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [suburban, setSuburban] = useState('');
//     const [filteredCandidates, setFilteredCandidates] = useState([]);

//     const handleSearch = () => {
//         const filtered = candidatesData.filter(candidate =>
//             (state ? candidate.state === state : true) &&
//             (city ? candidate.city === city : true) &&
//             (suburban ? candidate.suburban === suburban : true)
//         );
//         setFilteredCandidates(filtered);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6">
//             <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Find Your Candidate</h1>

//                 <div className="flex flex-col md:flex-row gap-4 mb-6">
//                     <div className="flex-1">
//                         <label className="block text-gray-700">State</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={state}
//                             onChange={(e) => setState(e.target.value)}
//                         >
//                             <option value="">Select State</option>
//                             <option value="California">California</option>
//                             <option value="Texas">Texas</option>
//                         </select>
//                     </div>

//                     <div className="flex-1">
//                         <label className="block text-gray-700">City</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                         >
//                             <option value="">Select City</option>
//                             <option value="Los Angeles">Los Angeles</option>
//                             <option value="San Francisco">San Francisco</option>
//                             <option value="Austin">Austin</option>
//                             <option value="Houston">Houston</option>
//                         </select>
//                     </div>

//                     <div className="flex-1">
//                         <label className="block text-gray-700">Suburban</label>
//                         <select
//                             className="block w-full mt-1 border rounded-lg py-2 px-3"
//                             value={suburban}
//                             onChange={(e) => setSuburban(e.target.value)}
//                         >
//                             <option value="">Select Suburban</option>
//                             <option value="Downtown">Downtown</option>
//                             <option value="South Bay">South Bay</option>
//                             <option value="East Austin">East Austin</option>
//                             <option value="Midtown">Midtown</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="text-center">
//                     <button
//                         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 {/* Display Candidates */}
//                 <div className="mt-6">
//                     {filteredCandidates.length > 0 ? (
//                         <div>
//                             <h2 className="text-lg font-bold mb-4">Candidates for the selected constituency:</h2>
//                             <ul className="space-y-4">
//                                 {filteredCandidates.map(candidate => (
//                                     <li key={candidate.id} className="bg-gray-100 p-4 rounded-lg shadow">
//                                         <p><strong>Name:</strong> {candidate.name}</p>
//                                         <p><strong>State:</strong> {candidate.state}</p>
//                                         <p><strong>City:</strong> {candidate.city}</p>
//                                         <p><strong>Suburban:</strong> {candidate.suburban}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ) : (
//                         <p className="text-gray-600 text-center">No candidates found for the selected filters.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CandidateSearch;
// CandidateSearch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// export const candidatesData = [
//     {
//         "name": "Piyush Goyal",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Mumbai",
//         "suburban": "Unknown",
//         "id": 1,
//         "candidate_image": "https://i.ibb.co/0jqRMvM/image.png",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Bhushan Patil",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 2,
//         "candidate_image": "/images/bhushan_patil.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Adv. Sonal Diwakaer Gondane",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Shiv Sena (UBT)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 3,
//         "candidate_image": "/images/sonal_diwakaer_gondane.jpg",
//         "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
//     },
//     {
//         "name": "Rais Doctor",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Shiv Sena (UBT)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 4,
//         "candidate_image": "/images/rais_doctor.jpg",
//         "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
//     },
//     {
//         "name": "Dr Hemant Vishnu Savara",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Shiv Sena (UBT)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 5,
//         "candidate_image": "/images/dr_hemant_vishnu_savara.jpg",
//         "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
//     },
//     {
//         "name": "Bharti Bharat Kamdi",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 6,
//         "candidate_image": "/images/bharti_bharat_kamdi.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Rajesh Raghunath Patil",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 7,
//         "candidate_image": "/images/rajesh_raghunath_patil.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Bharat Samji Vanga",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 8,
//         "candidate_image": "/images/bharat_samji_vanga.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Vijaya Rajkumar Mhatre",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Maharashtra",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 9,
//         "candidate_image": "/images/vijaya_rajkumar_mhatre.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Shivmangal Singh Tomar",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 10,
//         "candidate_image": "/images/shivmangal_singh_tomar.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Neetu Satyapal Singh Sikarwar",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 11,
//         "candidate_image": "/images/neetu_satyapal_singh_sikarwar.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Ramesh Garg",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 12,
//         "candidate_image": "/images/ramesh_garg.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Phool Singh Baraiya",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 13,
//         "candidate_image": "/images/phool_singh_baraiya.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Sandhya Ray",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 14,
//         "candidate_image": "/images/sandhya_ray.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     },
//     {
//         "name": "Bharat Singh Kushwah",
//         "age": null,
//         "constituency": "Unknown",
//         "party_affiliation": "Bharatiya Janata Party (BJP)",
//         "positions_held": [],
//         "state": "Madhya Pradesh",
//         "city": "Unknown",
//         "suburban": "Unknown",
//         "id": 15,
//         "candidate_image": "/images/bharat_singh_kushwah.jpg",
//         "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
//     }
// ];
export const candidatesData = [
    {
        "name": "Piyush Goyal",
        "age": 60,
        "constituency": "Mumbai North Lok Sabha",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": ["Minister of Railways", "Minister of Commerce and Industry"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North",
        "id": 1,
        "candidate_image": "https://i.ibb.co/0jqRMvM/image.png",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "Bhushan Patil",
        "age": 29,
        "constituency": "Mumbai North Lok Sabha",
        "party_affiliation": "Indian National Congress (INC)",
        "positions_held": ["Youth Party Leader"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North",
        "id": 2,
        "candidate_image": "https://i.ibb.co/vJ3rPdq/image.png",
        "party_logo": "https://i.ibb.co/xzvBdcT/inc.jpg"
    },
    {
        "name": "Adv. Sonal Diwakaer Gondane",
        "age": 45,  // Assuming an approximate age
        "constituency": "Mumbai South-Central",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": ["Advocate and Activist"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-South Central",
        "id": 3,
        "candidate_image": "https://i.ibb.co/sonal_diwakaer_gondane.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "Rais Doctor",
        "age": 50,  // Estimated age
        "constituency": "Mumbai South",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": ["Community Leader"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-South",
        "id": 4,
        "candidate_image": "https://i.ibb.co/rais_doctor.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "Dr. Hemant Vishnu Savara",
        "age": 60,  // Estimated age
        "constituency": "Mumbai North-East",
        "party_affiliation": "Shiv Sena (UBT)",
        "positions_held": ["Doctor and Philanthropist"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North East",
        "id": 5,
        "candidate_image": "https://i.ibb.co/dr_hemant_vishnu_savara.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "Bharti Bharat Kamdi",
        "age": 35,  // Estimated age
        "constituency": "Mumbai North-West",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": ["Local Leader"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North West",
        "id": 6,
        "candidate_image": "https://i.ibb.co/bharti_bharat_kamdi.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "Rajesh Raghunath Patil",
        "age": 48,  // Estimated age
        "constituency": "Mumbai North-East",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": ["Businessman"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North East",
        "id": 7,
        "candidate_image": "https://i.ibb.co/rajesh_raghunath_patil.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "Bharat Samji Vanga",
        "age": 52,  // Estimated age
        "constituency": "Thane Lok Sabha",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": ["Local Leader"],
        "state": "Maharashtra",
        "city": "Thane",
        "suburban": "Thane",
        "id": 8,
        "candidate_image": "",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "Vijaya Rajkumar Mhatre",
        "age": 55,  // Estimated age
        "constituency": "Mumbai North-West",
        "party_affiliation": "Bharatiya Janata Party (BJP)",
        "positions_held": ["Women Empowerment Activist"],
        "state": "Maharashtra",
        "city": "Mumbai",
        "suburban": "Mumbai-North West",
        "id": 9,
        "candidate_image": "https://i.ibb.co/vijaya_rajkumar_mhatre.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },

]
export const candidatesDataHindi = [
    {
        "name": "पीयूष गोयल",
        "age": 60,
        "constituency": "मुंबई उत्तर लोकसभा",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["रेल मंत्री", "वाणिज्य और उद्योग मंत्री"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर",
        "id": 1,
        "candidate_image": "https://i.ibb.co/0jqRMvM/image.png",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "भूषण पाटिल",
        "age": 29,
        "constituency": "मुंबई उत्तर लोकसभा",
        "party_affiliation": "भारतीय राष्ट्रीय कांग्रेस (आईएनसी)",
        "positions_held": ["युवा पार्टी नेता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर",
        "id": 2,
        "candidate_image": "https://i.ibb.co/vJ3rPdq/image.png",
        "party_logo": "https://i.ibb.co/xzvBdcT/inc.jpg"
    },
    {
        "name": "एड. सोनल दिवाकर गोंडाने",
        "age": 45,
        "constituency": "मुंबई दक्षिण-मध्य",
        "party_affiliation": "शिवसेना (उबटा)",
        "positions_held": ["वकील और कार्यकर्ता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-दक्षिण मध्य",
        "id": 3,
        "candidate_image": "https://i.ibb.co/sonal_diwakaer_gondane.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "रईस डॉक्टर",
        "age": 50,
        "constituency": "मुंबई दक्षिण",
        "party_affiliation": "शिवसेना (उबटा)",
        "positions_held": ["समुदाय नेता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-दक्षिण",
        "id": 4,
        "candidate_image": "https://i.ibb.co/rais_doctor.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "डॉ. हेमंत विष्णु सावरा",
        "age": 60,
        "constituency": "मुंबई उत्तर-पूर्व",
        "party_affiliation": "शिवसेना (उबटा)",
        "positions_held": ["डॉक्टर और परोपकारी"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर पूर्व",
        "id": 5,
        "candidate_image": "https://i.ibb.co/dr_hemant_vishnu_savara.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "भारती भारत कामडी",
        "age": 35,
        "constituency": "मुंबई उत्तर-पश्चिम",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["स्थानीय नेता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर पश्चिम",
        "id": 6,
        "candidate_image": "https://i.ibb.co/bharti_bharat_kamdi.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "राजेश रघुनाथ पाटिल",
        "age": 48,
        "constituency": "मुंबई उत्तर-पूर्व",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["व्यवसायी"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर पूर्व",
        "id": 7,
        "candidate_image": "https://i.ibb.co/rajesh_raghunath_patil.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "भारत सामजी वंगा",
        "age": 52,
        "constituency": "ठाणे लोकसभा",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["स्थानीय नेता"],
        "state": "महाराष्ट्र",
        "city": "ठाणे",
        "suburban": "ठाणे",
        "id": 8,
        "candidate_image": "https://i.ibb.co/bharat_samji_vanga.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "विजया राजकुमार म्हात्रे",
        "age": 55,
        "constituency": "मुंबई उत्तर-पश्चिम",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["महिला सशक्तिकरण कार्यकर्ता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर पश्चिम",
        "id": 9,
        "candidate_image": "https://i.ibb.co/vijaya_rajkumar_mhatre.jpg",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
]
export const candidatesDataMarathi = [
    {
        "name": "पीयूष गोयल",
        "age": 60,
        "constituency": "मुंबई उत्तर लोकसभा",
        "party_affiliation": "भारतीय जनता पार्टी (भाजपा)",
        "positions_held": ["रेल्वे मंत्री", "वाणिज्य आणि उद्योग मंत्री"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर",
        "id": 1,
        "candidate_image": "https://i.ibb.co/0jqRMvM/image.png",
        "party_logo": "https://i.ibb.co/JcLNLHC/bjp.png"
    },
    {
        "name": "भूषण पाटील",
        "age": 29,
        "constituency": "मुंबई उत्तर लोकसभा",
        "party_affiliation": "भारतीय राष्ट्रीय काँग्रेस (INC)",
        "positions_held": ["युवा पक्ष नेता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-उत्तर",
        "id": 2,
        "candidate_image": "https://i.ibb.co/vJ3rPdq/image.png",
        "party_logo": "https://i.ibb.co/xzvBdcT/inc.jpg"
    },
    {
        "name": "अ‍ॅड. सोनल दिवाकर गोंडाणे",
        "age": 45,
        "constituency": "मुंबई दक्षिण-मध्य",
        "party_affiliation": "शिवसेना (उबटा)",
        "positions_held": ["वकील आणि कार्यकर्त्या"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-दक्षिण मध्य",
        "id": 3,
        "candidate_image": "https://i.ibb.co/sonal_diwakaer_gondane.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
    {
        "name": "रईस डॉक्टर",
        "age": 50,
        "constituency": "मुंबई दक्षिण",
        "party_affiliation": "शिवसेना (उबटा)",
        "positions_held": ["समाजनेता"],
        "state": "महाराष्ट्र",
        "city": "मुंबई",
        "suburban": "मुंबई-दक्षिण",
        "id": 4,
        "candidate_image": "https://i.ibb.co/rais_doctor.jpg",
        "party_logo": "https://i.ibb.co/TkPNzcy/udhavshivsena.png"
    },
]

const getPartyLogo = (party) => {
    switch (party) {
        case "Bharatiya Janata Party (BJP)":
            return "https://i.ibb.co/JcLNLHC/bjp.png";
        case "Shiv Sena":
            return "https://i.ibb.co/4YkHJdc/shivsena.png";
        case "Shiv Sena (UBT)":
            return "https://i.ibb.co/TkPNzcy/udhavshivsena.png";
        case "Indian National Congress (INC)":
            return "https://i.ibb.co/xzvBdcT/inc.jpg"
        default:
            return "/images/default_party_logo.png"; // Default logo if no match found
    }
};

const CandidateSearch = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [suburban, setSuburban] = useState('');
    const [filteredCandidates, setFilteredCandidates] = useState([]);

    const handleSearch = () => {
        const filtered = candidatesData.filter(candidate =>
            (state ? candidate.state === state : true) &&
            (city ? candidate.city === city : true) &&
            (suburban ? candidate.suburban === suburban : true)
        );
        setFilteredCandidates(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Find Your Candidate</h1>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    {/* State, City, Suburban Filters */}
                    <div className="flex-1">
                        <label className="block text-gray-700">State</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-gray-700">Constituency</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3 text-sm md:text-base"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="">Select Constituency</option>
                            <option value="Mumbai South">Mumbai South</option>
                            <option value="Mumbai South Central">Mumbai South Central</option>
                            <option value="Mumbai North Central">Mumbai North Central</option>
                            <option value="Mumbai-North East">Mumbai North East</option>
                            <option value="Mumbai North West">Mumbai North West</option>
                            <option value="Mumbai-North">Mumbai-North</option>
                            <option value="Thane">Thane</option>
                            <option value="Kalyan">Kalyan</option>
                            <option value="Bhiwandi">Bhiwandi</option>
                            <option value="Palghar (ST)">Palghar (ST)</option>
                            <option value="Maval">Maval</option>
                            <option value="Pune">Pune</option>
                            <option value="Baramati">Baramati</option>
                            <option value="Shirur">Shirur</option>
                            <option value="Ahmednagar">Ahmednagar</option>
                            <option value="Shirdi (SC)">Shirdi (SC)</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Dindori (ST)">Dindori (ST)</option>
                            <option value="Dhule">Dhule</option>
                            <option value="Nandurbar (ST)">Nandurbar (ST)</option>
                            <option value="Jalgaon">Jalgaon</option>
                            <option value="Raver">Raver</option>
                            <option value="Buldhana">Buldhana</option>
                            <option value="Akola">Akola</option>
                            <option value="Amravati (SC)">Amravati (SC)</option>
                            <option value="Wardha">Wardha</option>
                            <option value="Ramtek (SC)">Ramtek (SC)</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Bhandara-Gondiya">Bhandara-Gondiya</option>
                            <option value="Gadchiroli-Chimur (ST)">Gadchiroli-Chimur (ST)</option>
                            <option value="Chandrapur">Chandrapur</option>
                            <option value="Yavatmal-Washim">Yavatmal-Washim</option>
                            <option value="Hingoli">Hingoli</option>
                            <option value="Nanded">Nanded</option>
                            <option value="Parbhani">Parbhani</option>
                            <option value="Jalna">Jalna</option>
                            <option value="Aurangabad">Aurangabad</option>
                            <option value="Beed">Beed</option>
                            <option value="Osmanabad">Osmanabad</option>
                            <option value="Latur (SC)">Latur (SC)</option>
                            <option value="Solapur (SC)">Solapur (SC)</option>
                            <option value="Madha">Madha</option>
                            <option value="Sangli">Sangli</option>
                            <option value="Satara">Satara</option>
                            <option value="Ratnagiri-Sindhudurg">Ratnagiri-Sindhudurg</option>
                            <option value="Kolhapur">Kolhapur</option>
                            <option value="Hatkanangale">Hatkanangale</option>
                        </select>
                    </div>


                    {/* <div className="flex-1">
                        <label className="block text-gray-700">Suburban</label>
                        <select
                            className="block w-full mt-1 border rounded-lg py-2 px-3"
                            value={suburban}
                            onChange={(e) => setSuburban(e.target.value)}
                        >
                            <option value="">Select Suburban</option>
                            <option value="Downtown">Downtown</option>
                            <option value="South Bay">South Bay</option>
                            <option value="East Austin">East Austin</option>
                            <option value="Midtown">Midtown</option>
                        </select>
                    </div> */}
                </div>

                <div className="text-center">
                    <button
                        className="bg-[#004274] text-[#ace8fe] px-4 py-2 rounded-lg hover:bg-[#ace8fe] hover:text-[#004274]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Display Candidates */}
                <div className="mt-6">
                    {filteredCandidates.length > 0 ? (
                        <div>
                            <h2 className="text-lg font-bold mb-4">Candidates for the selected constituency:</h2>
                            <ul className="space-y-4">
                                {filteredCandidates.map(candidate => (
                                    <li
                                        key={candidate.id}
                                        className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-all duration-300 flex justify-between items-center"
                                    >
                                        <Link
                                            to={`/candidate/${candidate.name.replace(/\s+/g, '-').toLowerCase()}`}
                                            className="block flex-grow"
                                        >
                                            <p><strong>Name:</strong> {candidate.name}</p>
                                            <p><strong>State:</strong> {candidate.state}</p>
                                            <p><strong>City:</strong> {candidate.city}</p>
                                            <p><strong>Suburban:</strong> {candidate.suburban}</p>
                                            <p><strong>Party:</strong> {candidate.party_affiliation}</p>
                                        </Link>
                                        {/* Party logo or icon */}
                                        <div className="ml-4 aspect-w-1 aspect-h-1 w-[50px]">
                                            <img
                                                src={getPartyLogo(candidate.party_affiliation)}
                                                width={24}
                                                height={24}
                                                alt={`${candidate.name} Party Logo`}
                                                className="object-contain rounded-full  w-full h-full"
                                            />
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-gray-600 text-center">No candidates found for the selected filters.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CandidateSearch;
