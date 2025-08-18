import { useEffect } from "react";
import RestaurantNavbar from "@/components/restaurant/RestaurantNavbar";
import RestaurantHero from "@/components/restaurant/RestaurantHero";
import RestaurantMenu from "@/components/restaurant/RestaurantMenu";
import RestaurantLocation from "@/components/restaurant/RestaurantLocation";
import RestaurantContact from "@/components/restaurant/RestaurantContact";
import RestaurantFooter from "@/components/restaurant/RestaurantFooter";

export default function RestaurantLanding() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <RestaurantNavbar />
      <main>
        <RestaurantHero />
        <RestaurantMenu />
        <RestaurantLocation />
        <RestaurantContact />
      </main>
      <RestaurantFooter />
    </div>
  );
}