import VideoThumb from '@/public/images/hero-image-01.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Laptop from '@/public/images/laptop.webp'

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="flex pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="w-full">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">Your New Holistic</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400">Wellness Hub</span></h1>
            <div className="max-w-3xl space-y-8 mt-6">
              <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Health Sync™ an app crafted to elevate your productivity, enhance your focus, and support your overall well-being. Whether you are looking to boost your daily performance or take better care of both your mind and body, this app provides the tools and guidance you need to thrive. </p>
              <div className="max-w-xs sm:max-w-none" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className='relative max-w-full my-auto' data-aos="zoom-y-out" data-aos-delay="150">
            <div className="absolute h-[400px] w-[400px] mx-auto inset-0 rounded-full bg-gradient-to-bl from-blue-500 to-teal-400 z-0"></div>
            <div className="relative z-10">
              <Image 
                src={Laptop}
                alt="laptop"
              />
            </div>
          </div>  
        </div>

      </div>
    </section>
  )
}