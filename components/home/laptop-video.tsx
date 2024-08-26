import React from 'react';

export default function LaptopVideo() {
  return (
    <div
      className='flex flex-col overflow-hidden'
      data-aos='zoom-y-out'
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className='max-w-9xl mx-auto w-full h-full object-cover'
      >
        <source src='/videos/laptop-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
