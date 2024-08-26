import React from 'react';
import Tablet1 from "@/public/images/tablet-1.webp"
import Tablet2 from "@/public/images/tablet-2.png"
import RevitalizeBG from "@/public/images/revitalize-bg.webp"
import Image from 'next/image';

export default function Revitalize() {
    return (
        <div className="bg-[#e6f7f5] min-h-[400px] flex flex-col justify-center items-center relative px-4 py-16 max-w-9xl mx-auto rounded-2xl shadow">
            <div className='hidden md:block absolute px-6'>
                <Image
                    src={RevitalizeBG}
                    alt="Revitalize shapes"
                />
            </div>
            {/* Laptop Image */}
            <div className="absolute left-0 bottom-0 w-1/2 md:w-1/3 max-w-xs">
                <Image
                    src={Tablet1}
                    alt="Laptop showing fitness app"
                />
            </div>

            {/* Main Heading */}
            <h1 className="text-center max-w-4xl mb-8 z-10 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tighter tracking-tighter">
                Revitalize Your Day: Quick Workouts, Breathwork, and Productivity Boosters
            </h1>

            {/* Tablet Image */}
            <div className="absolute right-0 top-0 w-1/2 md:w-1/3 max-w-xs">
                <Image
                    src={Tablet2}
                    alt="Tablet showing workout thumbnails"
                />
            </div>
        </div>
    );
}
