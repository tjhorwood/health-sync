'use client';
import React from 'react';

export function LaptopVideo() {
  return (
    <div className='flex flex-col overflow-hidden mb-20 mt-20 md:mt-10'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='max-w-8xl mx-auto w-full h-full object-cover'
      >
        <source src='/videos/laptop-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
