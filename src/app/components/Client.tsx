import { FC, useState } from 'react';

const Client: FC = () => {
    const feedbacks = [
        {
            name: 'John De marli',
            feedback: 'We saw a 20% increase in customer satisfaction thanks to the easy-to-use loyalty program.',
        },
        {
            name: 'Jane Smith',
            feedback: 'The loyalty program helped us retain more customers and grow our business exponentially.',
        },
        {
            name: 'Mike Johnson',
            feedback: 'Our customer engagement increased significantly after implementing the loyalty program.',
        },
        {
            name: 'Emily Davis',
            feedback: 'The best investment we made this year was in the loyalty program. It paid off big time!',
        },
        {
            name: 'David Lee',
            feedback: 'Our customers love the rewards, and we love the repeat business. Win-win!',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextFeedback = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const prevFeedback = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    };

    const getFeedbackItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % feedbacks.length;
            items.push(feedbacks[index]);
        }
        return items;
    };

    return (
        <div
            className="bg-cover overflow-hidden"
            style={{
                backgroundImage: "url('/assets/svgs/landingpage/Action-bg.svg')",
            }}
        >
            <div className="text-center">
                <h1 className="font-bold text-2xl sm:text-4xl md:text-4xl lg:text-6xl mt-10">What Our Happy Client Say</h1>
                <p className="pt-1 sm:pt-2 md:pt-4 lg:pt-6 mb-8 font-semibold text-sm">Trusted by Restaurants Around the World</p>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="flex flex-row gap-2 mt-10 mb-10 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {getFeedbackItems().map((feedback, index) => (
                        <div key={index} className="bg-white w-[450px] h-[250px] rounded-xl mt-8 flex-shrink-0 mx-2 shadow-2">
                            <div className="flex flex-col">
                                <div className="relative -mt-12 mx-auto">
                                    <img src="/assets/svgs/landingpage/ClientImage.svg" alt="Client Image" />
                                </div>
                                <div className="flex flex-row">
                                    <div>
                                        <img src="/assets/svgs/landingpage/comma.svg" alt="comma icon" className='pl-8' />
                                    </div>
                                    <div className="flex flex-col pl-10">
                                        <img src="/assets/svgs/landingpage/star.svg" alt="Star rating" className="mb-2" />
                                        <h1 className="font-bold text-center">{feedback.name}</h1>
                                    </div>
                                </div>
                            </div>
                            <p className="text-black-greyish text-center p-6 leading-6">{feedback.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Carousel Navigation */}
            <div className="flex space-x-2 items-center justify-center mt-6 mb-8">
                <button onClick={prevFeedback}>
                    <img src="/assets/svgs/landingpage/leftarrow.svg" className="w-10" alt="Previous" />
                </button>
                <button onClick={nextFeedback}>
                    <img src="/assets/svgs/landingpage/rightarrow.svg" className="w-10" alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Client;
