// import React from 'react';

// const TopBar = () => {
//     return (
//         <nav className="bg-[#004274] tex-[#ace8fe] px-14 py-2 flex justify-between items-center text-xs  hidden md:block md:flex">
//             <div className="flex space-x-4 gap-6">
//                 <a href="#" className="text-[#ace8fe] text-[16px] font-semibold font-normal border-b-2 border-black"></a>
//                 <a href="#" className="text-[#ace8fe] text-[16px] font-semibold hover:underline ">ARCHITECTURE</a>
//                 <a href="#" className="text-[#ace8fe] text-[16px] font-semibold hover:underline">CAD SERVICES</a>
//             </div>
//             <div className="flex items-center space-x-2  bg-white px-6 py-2 rounded-md">
//                 <div className='border-r border-[#E40404] p-2 '>
//                     <div className="w-4 h-3 flex flex-col">
//                         <div className="h-1/3 bg-orange-500"></div>
//                         <div className="h-1/3 bg-white"></div>
//                         <div className="h-1/3 bg-green-600"></div>

//                     </div>
//                 </div>
//                 <div className="bg-white rounded px-1 py-0.5 text-xs">
//                     <option>Voters portal</option>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default TopBar;
// src/components/TopBar.js
import React from 'react';


import { useTextSize } from './TextSizeContext'; // Import the context

const TopBar = () => {
    const { increaseTextSize } = useTextSize(); // Use the context

    return (
        <nav className="bg-[#004274]  px-14 py-2 flex justify-between items-center text-xs hidden md:block md:flex">
            <div className="flex space-x-4 gap-6">
                <a href="#" className="text-[#ace8fe] text-[16px] font-semibold border-b-2 border-black"></a>
                <a href="#" className="text-[#ace8fe] text-[16px] font-semibold hover:underline">ARCHITECTURE</a>
                <a href="#" className="text-[#ace8fe] text-[16px] font-semibold hover:underline">CAD SERVICES</a>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-2 rounded-md">
                <button onClick={increaseTextSize} className="text-[#ace8fe]">
                    Increase Text Size
                </button>
                <div className='border-r border-[#E40404] p-2 '>
                    <div className="w-4 h-3 flex flex-col">
                        <div className="h-1/3 bg-orange-500"></div>
                        <div className="h-1/3 bg-white"></div>
                        <div className="h-1/3 bg-green-600"></div>
                    </div>
                </div>
                <div className="bg-white rounded px-1 py-0.5 text-xs text-black hover:text-[#ace8fe]">
                    <option>Voters portal</option>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
