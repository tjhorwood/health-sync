import Image from "next/image";
import Screen from '@/public/images/screen.webp'
import Comments from '@/public/images/comments.png'
import Menu from '@/public/images/menu.webp'

export default function UIOverview() {
  return (
    <div className="relative px-4 -mb-24 mt-28">
      {/* Main tablet interface */}
      <div className="relative max-w-5xl mx-auto">
        <Image
          src={Screen}
          alt="Health Sync Interface"
          layout="responsive"
        />
      </div>

      {/* Left side notifications */}
      <div className="absolute left-[5%] top-1/4 transform space-y-2 md:space-y-4 hidden sm:block max-w-sm animate-float animation-delay-1000">
        <Image
          src={Comments}
          alt="New Juice Recipe"
        />
      </div>

      {/* Right side menu */}
      <div className="absolute right-[10%] top-0 transform hidden sm:block max-w-sm animate-float">
        <Image
          src={Menu}
          alt="Side Menu"
        />
      </div>
    </div>
  );
};