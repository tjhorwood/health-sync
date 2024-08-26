import React from 'react';
import Library from '@/public/images/library.webp'
import Journal from '@/public/images/journal.png'
import Fitness from '@/public/images/fitness.webp'
import DailyTasks from '@/public/images/dailytasks.webp'
import Image from 'next/image';

export default function Interface() {
    return (
        <div className="max-w-9xl mx-auto pt-16 pb-32 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-center mb-12 max-w-6xl mx-auto">
                Easy to Use Interface, <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400">Fully Customized</span> for your preference
            </h2>

            <div className="relative max-w-8xl mx-auto flex justify-center items-center">
                {/* Main (Library) Screenshot */}
                <div className="relative z-10">
                    <Image
                        src={Library}
                        alt="Library Interface"
                        layout="intrinsic"
                    />
                </div>

                {/* Journal Screenshot (Left) */}
                <div className="absolute left-0 bottom-0 w-1/3 md:w-1/4 transform -translate-x-1/4 translate-y-16 md:translate-y-24 animate-float z-20">
                    <Image
                        src={Journal}
                        alt="Journal Interface"
                        layout="responsive"
                    />
                </div>

                {/* Fitness Screenshot (Right) */}
                <div className="absolute right-0 top-0 w-1/3 md:w-1/4 transform translate-x-1/4 -translate-y-1/4 animate-float animation-delay-1000 z-20">
                    <Image
                        src={Fitness}
                        alt="Fitness Interface"
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    )
}