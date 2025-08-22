import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function RestaurantHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);
const goToOrderSite = () => {
  window.open("https://mom-torquay.yumbojumbo.com.au/", "_blank");
};
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full pd-15 object-cover object-center sm:object-cover md:object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/38-40 Bell st, torquay vic, 3228 au (4).mp4"
          type="video/mp4"
        />
        {/* Fallback image if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            Seaside Dining
            <span className="block text-blue-400">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fresh seafood, stunning views, and unforgettable moments at
            Torquay's premier beachfront restaurant
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]"
              onClick={goToOrderSite}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-grey-600 hover:bg-white hover:text-black rounded-full px-8 py-3 transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]"
              onClick={goToOrderSite}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a
          href="#menu"
          className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-60"
          />
        </svg>
      </div>
    </section>
  );
}
