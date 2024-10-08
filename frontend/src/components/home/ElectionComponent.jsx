import { NavLink } from "react-router-dom";
import Slider from "react-slick"; // Ensure you have this imported if you're using a slider component
import ElectorsComponent from "./ElectorsComponent";
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'
import fourth from '../../images/4.png'
import fifth from '../../images/5.png'

const navItems = [
    { title: "Electors", description: "Information for Electors", color: "bg-blue-500", to: "/ElectorsComponent" },
    { title: "Your Area Candidates", description: "Information on Candidates", color: "bg-purple-500", to: "/CandidateSearch" },
    { title: "Election Management", description: "Election Management Details", color: "bg-red-500", to: "/ElectionManagementComponent" },
    { title: "Media & Publications", description: "Latest Media Updates", color: "bg-yellow-500", to: "/MediaPublicationsComponent" },
    { title: "Voter Education", description: "Voter Education Resources", color: "bg-orange-500", to: "/VoterEducation" },
    { title: "ICT Apps", description: "Explore Our Apps", color: "bg-green-500", to: "/ICTAppsComponent" },
];
const ElectionComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const quotes = [
        {
            id: 1,
            text: "Elections are the foundation of democracy, and every vote matters.",
            author: "Election Commissioner of India"
        },
        {
            id: 2,
            text: "Voter participation is vital for the strength and legitimacy of our democratic system.",
            author: "Election Commissioner of India"
        },
        {
            id: 3,
            text: "It is the duty of every citizen to vote and contribute to shaping our nation’s future.",
            author: "Election Commissioner of India"
        },
        {
            id: 4,
            text: "Accessible voting is a right, not a privilege. We must ensure everyone can vote.",
            author: "Election Commissioner of India"
        }
    ];
    return (
        <div className="mx-auto px-2">
            <h1 className="text-center text-3xl font-bold my-6  ">Voting Portal of India For Disabled and Aged</h1>

            {/* Carousel */}
            <div className=" max-w-7xl mx-auto  mb-6 h-96 mt-20 ">
                <Slider {...settings}>
                    <div className="sxs:h-96 md:h-96  flex  items-center justify-center">  {/* Increased height */}
                        <img
                            src={first}
                            width={1000}
                            height={1500}
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="sxs:h-96 object-top w-fit md:h-1500  flex items-center justify-center">  {/* Increased height */}
                        <img
                            src={second}

                            width={1000}
                            height={1500}
                            alt="Slide 2"
                            className="w-full h-full object-top"
                        />
                    </div>
                    <div className="sxs:h-96 md:h-1500 w-full flex items-center justify-center">  {/* Increased height */}
                        <img
                            src={third}

                            width={1000}
                            height={1500}
                            alt="Slide 3"
                            className="w-full h-full object-cover "
                        />
                    </div>
                    <div className="sxs:h-96 md:h-1500 w-full flex items-center justify-center">  {/* Increased height */}
                        <img
                            src={fourth}

                            width={1000}
                            height={1500}
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="sxs:h-96 md:h-1500 w-full flex items-center justify-center">  {/* Increased height */}
                        <img
                            src={fifth}

                            width={1000}
                            height={1500}
                            alt="Slide 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Slider>
            </div>



            {/* <marquee className="bg-white p-4" scrollamount="5" behavior="smooth" direction="left">
                <div className="flex space-x-4 mt-4 "> Add custom scrollbar class */}
            {/* {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className="flex flex-col items-center mb-6 md:mb-0 w-1/4 flex-shrink-0"
                        >
                            <div className={`${item.color} p-4 rounded-full text-white text-sm block inline text-center cursor-pointer w-full h-12 flex items-center justify-center whitespace-nowrap`}>
                                {item.title}
                            </div>
                            <p className="text-center mt-2 whitespace-nowrap">{item.description}</p>
                        </NavLink>
                    ))}
                </div>
            </marquee> */}


            <div className="bg-white p-8 mt-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Quotes from the Election Commissioner of India</h2>
                <div className="space-y-6">
                    {quotes.map((quote) => (
                        <div key={quote.id} className="border-l-4 border-blue-500 pl-4 bg-gray-50 p-4 rounded-md shadow-sm transition-transform transform hover:scale-105">
                            <p className="text-lg italic text-gray-800">"{quote.text}"</p>
                            <p className="text-right font-semibold text-gray-700">- {quote.author}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ElectionComponent;
