import Image from "next/image";
import Screen from '@/public/images/screen.webp'
import Comments from '@/public/images/comments.png'
import Menu from '@/public/images/menu.webp'

export default function UIOverview() {
    return (
      <div className="relative px-4">
        {/* Main tablet interface */}
        <div className="relative max-w-5xl mx-auto">
          <Image 
            src={Screen}
            alt="Health Sync Interface"
            layout="responsive"
          />
        </div>
        
        {/* Left side notifications */}
        <div className="absolute left-0 top-1/4 transform space-y-2 md:space-y-4 hidden sm:block max-w-sm">
          <Image 
            src={Comments}
            alt="New Juice Recipe"
          />
        </div>
        
        {/* Right side menu */}
        <div className="absolute right-0 top-1/4 transform hidden sm:block max-w-sm">
          <Image 
            src={Menu}
            alt="Side Menu"
          />
        </div>
      </div>
    );
  };