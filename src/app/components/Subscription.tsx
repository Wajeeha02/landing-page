import { FC } from 'react';

const Subscription: FC = () => {
    return (
        <div className="p-6 sm:p-10 md:p-10 bg-white">
            <div className="text-center mb-6 md:mb-8 px-4 sm:px-6 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-6">Choose the Right Plan for Your Business</h1>
                <p className="mt-4 pb-6 md:pb-12 font-medium">Flexible Pricing to Fit Your Needs</p>
            </div>
            <div>
                <div className="font-inter flex flex-col lg:flex-row md:flex-col items-center space-y-6 md:space-y-6 md:space-x-5 justify-center">
                    {/* Silver Plan */}
                    <div className="flex flex-col p-6 md:p-8 bg-white border-2 border-purple rounded-2xl w-full h-[340px] sm:h-[360px] ">
                        <h3 className="text-lg sm:text-xl font-bold text-black-greyish">Silver</h3>
                        <p className="text-gray-600 mb-1 text-sm sm:text-md">Billed at $35.99/year that's like</p>
                        <h1 className="text-black-greyish font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
                            $35<span className="text-base sm:text-lg font-semibold">/month</span>
                        </h1>
                        <h2 className="text-sm sm:text-md font-medium text-gray-600 mb-4">Get our All Premium features</h2>
                        <div className="flex flex-col leading-7">
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">Digital Menu Management</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">Allergen Management </p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">QR Code Display for Menus</p>
                            </div>
                        </div>
                        <button className="text-secondary font-semibold py-2 px-4 rounded-md w-full h-12 sm:h-14 mt-4 text-sm sm:text-md border border-secondary">Proceed to Checkout</button>
                    </div>

                    {/* Platinum Plan */}
                    <div
                        className="relative flex flex-col p-6 md:p-8 bg-cover bg-center w-full h-[390px] sm:h-[410px]  rounded-2xl mx-auto -mt-5 md:-mt-7"
                        style={{ backgroundImage: "url('/assets/images/subscription image.png')" }}
                    >
                        <button className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-danger-light font-bold py-2 px-4 rounded-md w-32 sm:w-36 h-8 sm:h-10 text-xs sm:text-sm bg-secondary border border-white">
                            Best Deal
                        </button>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Platinum</h3>
                        <p className="mb-1 text-white text-sm sm:text-md">Billed today at</p>
                        <h1 className="text-white font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
                            $65<span className="text-base sm:text-lg font-semibold">/month</span>
                        </h1>
                        <h2 className="text-sm sm:text-md font-medium text-white mb-6">Get our All Premium features</h2>
                        <div className="flex flex-col leading-7">
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/whitetick.svg" className="w-4 sm:w-5" alt="whitetick"/>
                                <p className="text-sm sm:text-md font-medium text-white">All Silver Package Features</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/whitetick.svg" className="w-4 sm:w-5" alt="whitetick"/>
                                <p className="text-sm sm:text-md font-medium text-white">24/7 Customer Support</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/whitetick.svg" className="w-4 sm:w-5" alt="whitetick"/>
                                <p className="text-sm sm:text-md font-medium text-white">Order Management (OMS)</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/whitetick.svg" className="w-4 sm:w-5" alt="whitetick"/>
                                <p className="text-sm sm:text-md font-medium text-white">Real-Time Sales & Analytics</p>
                            </div>
                        </div>
                        <button className="text-white font-bold py-2 px-4 rounded-md w-full h-12 sm:h-14 text-sm sm:text-md bg-secondary mt-6">Proceed to Checkout</button>
                    </div>

                    {/* Premium Plan */}
                    <div className="flex flex-col p-6 md:p-8 bg-white border-2 border-purple rounded-2xl w-full h-[340px] sm:h-[360px]  mx-auto">
                        <h3 className="text-lg sm:text-xl font-bold text-black-greyish">Premium</h3>
                        <p className="text-gray-600 mb-1 text-sm sm:text-md">Billed today at</p>
                        <h1 className="text-black-greyish font-extrabold text-3xl sm:text-4xl pt-3 mb-2">
                            $125<span className="text-base sm:text-lg font-semibold">/month</span>
                        </h1>
                        <h2 className="text-sm sm:text-md font-medium text-gray-600 mb-4">Get our All Premium features</h2>
                        <div className="flex flex-col leading-7">
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">All Platinum Package Features</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">Advanced QR Code Ordering</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/assets/svgs/landingpage/tick.svg" className="w-4 sm:w-5" alt="tick"/>
                                <p className="text-sm sm:text-md font-medium text-black-lightblack">Custom Branding for Menus</p>
                            </div>
                        </div>
                        <button className="text-secondary font-semibold py-2 px-4 rounded-md w-full h-12 sm:h-14 mt-4 text-sm sm:text-md border border-secondary">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
