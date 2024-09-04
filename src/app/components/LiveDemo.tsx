import { FC } from 'react';

const LiveDemo: FC = () => {
    return (
        <div
            className="p-8 sm:p-12 md:p-16 lg:p-20 bg-cover"
            style={{
                backgroundImage: "url('/assets/svgs/landingpage/LiveDemo-bg.svg')",
            }}
        >
            <div className="text-center text-white">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Love our Solution? <br /> Try it now
                </h1>
                <p className="pt-2 sm:pt-3 md:pt-4 text-sm sm:text-base md:text-xl lg:text-lg">Clear Eats: Your All-in-One Restaurant Management Solution</p>

                <button className="text-purple bg-white rounded-full w-[140px] sm:w-[130px] md:w-[140px] lg:w-[170px] h-[45px] sm:h-[50px] md:h-[55px] lg:h-[60px] mt-6 sm:mt-8 md:mt-10 lg:mt-12 font-bold">
                    Try Now
                </button>
            </div>
        </div>
    );
};

export default LiveDemo;
