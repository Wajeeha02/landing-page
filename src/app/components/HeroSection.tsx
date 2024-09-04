import { FC } from 'react';

const HeroSection: FC = () => {
    return (
        <div
            className="relative w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[850px] bg-cover bg-no-repeat"
            style={{
                backgroundImage: "url('/assets/images/Frame.svg')",
            }}
        >
            <div className="h-[20px] sm:h-[30px] md:h-[40px] lg:h-[60px] flex items-center justify-between sm:justify-between md:justify-between lg:justify-end p-8 sm:p-10 md:p-14 lg:p-16 pt-10">
                {/* Left Section */}
                <div className="flex items-center">
                    <img src="/assets/svgs/landingpage/clear-eats header.svg" className="w-20 sm:w-28 md:w-32 lg:w-36" alt="Clear Eats Logo" />
                </div>

                {/* Center Section */}
                <div className="flex justify-end flex-1 font-poppins py-4 ">
                    <nav className="flex space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12 ml-1 sm:ml-7 md:ml-8 lg:ml-0">
                        <a href="#HeroSection" className="text-white font-bold lg:text-[18px] sm:text-base md:text-lg">
                            Home
                        </a>
                        <a href="#about" className="text-white font-semibold lg:text-[18px] sm:text-base md:text-lg">
                            About Us
                        </a>
                        <a href="#Subscription" className="text-white font-semibold lg:text-[18px] sm:text-base md:text-lg">
                            Pricing
                        </a>
                        <a href="#" className="text-white font-semibold lg:text-[18px] sm:text-base md:text-lg">
                            Features
                        </a>
                    </nav>
                </div>
            </div>

            <div className="flex">
                {/* Left Vectors */}
                <div className="flex-col h-[500px] justify-between hidden lg:flex">
                    <img src="/assets/svgs/landingpage/left-vector1.svg" className="w-16 h-auto" alt="Vector 1" />
                    <img src="/assets/svgs/landingpage/left-vector2.svg" className="w-16 h-auto" alt="Vector 2" />
                </div>

                <div className="relative flex flex-col justify-center w-full h-full text-center text-white p-6 sm:p-12 lg:p-14">
                    <div className="relative">
                        {/* Arrow positioned relative to heading */}
                        <img src="/assets/svgs/landingpage/cutarrow.svg" className="absolute hidden lg:flex" style={{ left: '50%', transform: 'translateX(-1140%) translateY(-40%)' }} alt="Arrow pointing towards heading" />
                        <h1 className="relative font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-normal lg:leading-tight">
                            Revolutionise Your Restaurant Management With Clear Eats!
                        </h1>
                    </div>
                    
                    <div className="flex justify-center">
                        <img src="/assets/svgs/landingpage/lines.svg" className="w-40 sm:w-50 md:w-80 lg:w-80 relative lg:left-[70px]" alt="Lines" />
                    </div>

                    <p className="mt-1 text-xs sm:text-[14px] md:text-[16px] lg:text-base font-inter mb-3 px-0 sm:px-6 md:px-8 lg:px-10">
                        Simplify Online Orders and Keep Track of All Your Business Operations in One Place.
                    </p>

                    {/* Arrow pointing to Dashboard */}
                    <img src="/assets/svgs/landingpage/arrow.svg" className="absolute right-[180px] top-[250px] w-20 hidden lg:flex" alt="Arrow pointing to Dashboard" />
                    <button className="text-white font-bold text-base bg-purple w-44 h-12 sm:w-44 lg:w-[230px] rounded-full mt-2 mb-2 sm:mt-6 sm:mb-6 mx-auto">Try Now</button>

                    {/* Center the dashboard image */}
                    <div className="flex justify-center mt-2">
                        <img src="/assets/svgs/landingpage/Dashboard.svg" className="w-full h-auto max-w-[550px] sm:max-w-[550px] md:max-w-[800px] lg:max-w-[1033px] lg:h-auto" alt="Dashboard" />
                    </div>
                </div>

                {/* Right Vector */}
                <div className="hidden lg:flex h-[900px]">
                    <img src="/assets/svgs/landingpage/right-vector.svg" className="w-16 h-auto" alt="Vector 1" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
