// import React from 'react';
// import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // You can use react-icons for social media icons

// const Footer = () => {
//     return (
//         <footer className="bg-white border-t border-gray-200 py-6">
//             {/* Links Section */}
//             <div className="flex justify-center md:space-x-10 mb-4 sm:space-x-6">
//                 <a href="#home" className="text-gray-600 hover:text-orange-500 font-bold sm:mx-2">Home</a>
//                 <a href="#about" className="text-gray-600 hover:text-orange-500 font-bold mx-2">About Us</a>
//                 <a href="#features" className="text-gray-600 hover:text-orange-500 font-bold mx-2">Features</a>
//                 <a href="#contact" className="text-gray-600 hover:text-orange-500 font-bold sm:mx-2">Contact Us</a>
//             </div>

//             {/* Social Icons Section */}
//             <div className="flex justify-center space-x-6 mb-4">
//                 <a href="#" className="text-orange-500 hover:text-gray-600">
//                     <FaTwitter size={30} />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-orange-500">
//                     <FaInstagram size={30} />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-orange-500">
//                     <FaFacebook size={30} />
//                 </a>
//             </div>

//             {/* Copyright Section */}
//             <div className="text-center text-gray-600">

//                 <p> © 2024 NyaySaarthi. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faB,
    faBars,
    faChevronDown,
    faChevronUp,
    faClose,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    // function ItemList({ items }) {
    //   let itemsElements = null;
    //   if (items.length) {
    //     itemsElements = items.map((item) => <li key={item.id}>{item.name}</li>);
    //   }

    //   return (
    //     <div>
    //       <ul>{itemsElements}</ul>
    //     </div>
    //   );
    // }
    const [isOpen, setIsOpen] = useState([false, false, false, false]);

    function toggle(index) {
        setIsOpen((prevState) => {
            const newState = prevState.map((item, i) => (i === index ? !item : false));
            return newState;
        });
    }

    return (
        <>
            <div className="p-10 flex justify-center bg-[#004274] lg:h-[500px] text-[#ace8fe    ]">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex flex-col items-center">

                        <div>
                            <div className="flex mt-4 items-center gap-[16px]">
                                <div className="cursor-pointer hover:scale-125  transition-transform duration:300  flex justify-center items-center w-[35px] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        viewBox="0 0 509 509"
                                    >
                                        <g fill-rule="nonzero">
                                            <path
                                                fill="#0866FF"
                                                d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="cursor-pointer hover:scale-125  transition-transform duration:300 relative flex justify-center items-center w-[40px] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="60px"
                                        height="60px"
                                        viewBox="0 0 48 48"
                                    >
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                            cx="19.38"
                                            cy="42.035"
                                            r="44.899"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stop-color="#fd5"></stop>
                                            <stop offset=".328" stop-color="#ff543f"></stop>
                                            <stop offset=".348" stop-color="#fc5245"></stop>
                                            <stop offset=".504" stop-color="#e64771"></stop>
                                            <stop offset=".643" stop-color="#d53e91"></stop>
                                            <stop offset=".761" stop-color="#cc39a4"></stop>
                                            <stop offset=".841" stop-color="#c837ab"></stop>
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        ></path>
                                        <radialGradient
                                            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                            cx="11.786"
                                            cy="5.54"
                                            r="29.813"
                                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0" stop-color="#4168c9"></stop>
                                            <stop
                                                offset=".999"
                                                stop-color="#4168c9"
                                                stop-opacity="0"
                                            ></stop>
                                        </radialGradient>
                                        <path
                                            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                        ></path>
                                        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                        <path
                                            fill="#fff"
                                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="cursor-pointer hover:scale-125  transition-transform duration:300  flex justify-center items-center w-[35px] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
                                        <path
                                            fill="#fff"
                                            fill-rule="nonzero"
                                            d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"
                                        />
                                    </svg>
                                </div>
                                <div className="cursor-pointer hover:scale-125  transition-transform duration:300  flex justify-center items-center w-[35px] rounded-full">
                                    <svg
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 122.88 122.31"
                                    >
                                        <title>linkedin-app</title>
                                        <path
                                            fill-rule="evenodd"
                                            fill="#0a66c2"
                                            d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            fill="#fff"
                                            d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"
                                        />
                                    </svg>
                                </div>
                                <div className="cursor-pointer hover:scale-125  transition-transform duration:300  flex justify-center items-center w-[35px] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 333333 333333"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M329930 100020s-3254-22976-13269-33065c-12691-13269-26901-13354-33397-14124-46609-3396-116614-3396-116614-3396h-122s-69973 0-116608 3396c-6522 793-20712 848-33397 14124C6501 77044 3316 100020 3316 100020S-1 126982-1 154001v25265c0 26962 3315 53979 3315 53979s3254 22976 13207 33082c12685 13269 29356 12838 36798 14254 26685 2547 113354 3315 113354 3315s70065-124 116675-3457c6522-770 20706-848 33397-14124 10021-10089 13269-33090 13269-33090s3319-26962 3319-53979v-25263c-67-26962-3384-53979-3384-53979l-18 18-2-2zM132123 209917v-93681l90046 46997-90046 46684z"
                                            fill="red"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <h1 className="font-bold uppercase text-[18px] border-b-2 border-black">
                                Offerings
                            </h1>

                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <div>
                            <h1 className="font-bold uppercase text-[18px] border-b-2 border-black ">
                                Get Inspired
                            </h1>

                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <h1 className="font-bold uppercase text-[18px] border-b-2 border-black ">
                                company
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <h1 className="font-bold uppercase text-[18px] border-b-2 border-black ">
                                contact us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#004274] py-4  text-[#ace8fe]">
                <div className="container mx-auto px-4 text-center text-sm">
                    © 2024 Voters Platform. All rights VotersPlatform.
                    <a href="#" className="text-[#ace8fe] hover:text-gray-900 mx-2">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-[#ace8fe] hover:text-gray-900 mx-2">
                        Terms of Service
                    </a>
                    <a href="#" className="text-[#ace8fe] hover:text-gray-900 mx-2">
                        Cookie Settings
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;

