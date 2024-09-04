import { FC } from 'react';

const Solutions: FC = () => {
    return (
        <div className="bg-white font-poppins pt-28 sm:pt-60 md:pt-60 lg:pt-60">
            <div className="text-center p-4 sm:p-12 ">
                <h1 className="font-bold text-3xl mb-4 sm:text-4xl md:text-5xl lg:text-6xl text-black-greyish">The Solutions We Offer</h1>
                <p className="font-normal sm:text-sm md:text-base lg:text-md">Three Powerful Tools to Elevate Your Restaurant Experience</p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-row justify-center lg:justify-evenly items-center space-x-0 sm:space-x-6 lg:-space-x-32">
                <div className="w-full sm:w-[250px] md:w-[280px] text-center flex flex-col items-center mb-12 sm:mb-6 md:mb-8 lg:mb-0 ">
                    <img src="/assets/svgs/landingpage/allerguard.svg" className="mb-4 w-16 sm:w-14 md:w-16 lg:w-16" alt="Allerguard" />
                    <h1 className="font-bold text-2xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">Allerguard</h1>
                    <h5 className="text-black-lightgreyish font-medium text-[14px] mb-2 sm:text-sm md:text-base lg:text-[14px]">Protect Your Customers and Your Brand</h5>
                    <p className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs">Ensure that your menu meets the highest safety standards with our advanced allergen management system.</p>
                </div>

                <img src="/assets/svgs/landingpage/line.svg" className="hidden lg:block md:block" alt="Divider" />

                <div className="w-full sm:w-[300px] md:w-[280px] text-center flex flex-col items-center mb-12 sm:mb-6 md:mb-8 lg:mb-0">
                    <img src="/assets/svgs/landingpage/management.svg" className="mb-4 w-16 sm:w-14 md:w-16 lg:w-16" alt="Management System" />
                    <h1 className="font-bold text-2xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">Management System</h1>
                    <h5 className="text-black-lightgreyish font-medium text-[14px] mb-2 sm:text-sm md:text-base lg:text-[14px]">Efficiency at Your Fingertips</h5>
                    <p className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs">
                        Manage orders, track sales, and monitor staff performance with our comprehensive management system. Keep your operations organized and running smoothly, all from one intuitive
                        dashboard.
                    </p>
                </div>

                <img src="/assets/svgs/landingpage/line.svg" className="hidden lg:block" alt="Divider" />

                <div className="w-full sm:w-[300px] text-center flex flex-col items-center md:mt-6 lg:mt-0 md:w-[280px]">
                    <img src="/assets/svgs/landingpage/loyalty.svg" className="mb-4 w-16 sm:w-14 md:w-16 lg:w-16" alt="Loyalty Program" />
                    <h1 className="font-bold text-2xl text-black-greyish sm:text-xl md:text-2xl lg:text-2xl">Loyalty Program</h1>
                    <h5 className="text-black-lightgreyish font-medium text-[14px] mb-2 sm:text-sm md:text-base lg:text-[14px]">Build Lasting Relationships</h5>
                    <p className="text-xs text-gray-500 sm:text-xs md:text-sm lg:text-xs">
                        Our flexible loyalty program is designed to keep your customers coming back for more, helping you boost revenue and enhance customer satisfaction.
                    </p>
                </div>
            </div>

            <div
                className="bg-cover flex flex-col lg:flex-row items-center justify-center md:justify-between lg:justify-around p-6 sm:p-8 md: lg:p-20 mt-16 sm:mt-16 md:mt-18 lg:mt-20"
                style={{ backgroundImage: "url('/assets/svgs/landingpage/solutions2-bg.svg')" }}
            >
                <div className="flex-none mb-2 sm:mb-6 md:mb-7 lg:mb-4">
                    <img src="/assets/svgs/landingpage/solutions2.svg" className="w-[360px] sm:w-[360px] md:w-[550px] lg:w-[570px] h-auto" alt="Solutions Overview" />
                </div>
                <div className="flex-none md:max-w-[470px] lg:max-w-[365px]">
                    <h1 className="font-bold text-2xl mb-4 text-black-greyish sm:text-4xl md:text-4xl lg:text-4xl" style={{ lineHeight: '3.2rem' }}>
                        Empowering Your Restaurant with Cutting-Edge Solutions
                    </h1>
                    <p className="mb-4 text-[14px] text-black-greyish font-normal w-[345px] sm:w-full sm:text-sm md:text-base lg:text-[14px] lg:text-left leading-snug sm:leading-normal">
                        Clear Eats is the Go-to platform for Restaurants Looking to streamline their operations and elevate the customer experience. Our innovative tools make it easy to manage orders,
                        track sales, and customize your offerings.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-purple text-white rounded-full w-[180px] h-[40px] font-bold text-xs sm:w-[180px] sm:h-[40px] md:w-[190px] md:h-[43px] lg:w-[200px] lg:h-[45px]">
                            See How Clear Eats works!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
