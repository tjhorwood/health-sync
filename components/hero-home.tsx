import VideoThumb from '@/public/images/hero-image-01.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Laptop from '@/public/images/laptop.webp'
import { Button } from '@/components/ui/button'

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="flex flex-col lg:flex-row pt-32 pb-12 md:pt-40 md:pb-20 space-y-8">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">Your New Holistic</h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400">Wellness Hub</span></h1>
            <div className="max-w-3xl space-y-8 mt-6">
              <p className="md:text-lg lg:text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Health Sync™ an app crafted to elevate your productivity, enhance your focus, and support your overall well-being. Whether you are looking to boost your daily performance or take better care of both your mind and body, this app provides the tools and guidance you need to thrive. </p>
              <div className="max-w-full" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Button
                    size='lg' 
                    className="text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className='relative max-w-full my-auto' data-aos="zoom-y-out" data-aos-delay="150">
            <div className="absolute h-[275px] md:h-[400px] w-[275px] md:w-[400px] mx-auto inset-0 rounded-full bg-gradient-to-bl from-blue-500 to-teal-400 z-0"></div>
            <div className="relative z-10">
              <Image 
                src={Laptop}
                alt="laptop"
                className='md:max-w-[500px] lg:max-w-full mx-auto'
              />
            </div>
          </div>  
        </div>

      </div>
    </section>
  )
}