import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

export default function RestaurantNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "https://mom-torquay.yumbojumbo.com.au/" },
    { name: "Contact", href: "#contact" },
  ];

  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("contact");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const scrollToContact = () => {
    window.open("https://mom-torquay.yumbojumbo.com.au/", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cyan/90 dark:bg-cyan-1000/90 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        {/* <div className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">
            MOM
          </h1>
        </div> */}
        {/* <div className="flex-shrink-0">
          <img
            src="./public/MOM_LOGO - Edited.png"
            alt="MOM Logo"
            className="h-10 w-auto md:h-12"
          />
        </div> */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img
              src="/MOM_LOGO - Edited.png"
              alt="MOM Logo"
              className="h-10 w-auto md:h-12 cursor-pointer"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={scrollToContact}
          >
            Order & Reservation
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToContact();
            }}
          >
            Order & Reservation
          </Button>
        </div>
      </div>
    </header>
  );
}
