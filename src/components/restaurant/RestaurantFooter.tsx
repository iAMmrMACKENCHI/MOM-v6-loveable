import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RestaurantFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              {/* <h3 className="text-3xl font-bold mb-4 font-serif text-yellow-400">
                MOM
              </h3> */}
              <div className="flex-shrink-0">
                <img
                  src="./public/MOM_LOGO - Edited.png"
                  alt="MOM Logo"
                  className="h-10 w-auto md:h-12"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience a fresh take on modern Australian cuisine at MOM
                TORQUAY, located on 38-40 Bell St. As a top restaurant in
                Torquay, we pride ourselves on using the freshest, locally
                sourced ingredients to create innovative dishes.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trademark"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Trademark
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibility"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work With Us */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-serif">
                Work With Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chef-positions"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Chef Positions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/server-positions"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Front of House
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnerships"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Address</h5>
              <p className="text-gray-300 text-sm">
                Unit4/38-40 Bell Street
                <br />
                Torquay VIC 3228, Australia
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Contact</h5>
              <p className="text-gray-300 text-sm">
                Phone: +61 481 559 396
                <br />
                Email: momcafe.456@gmail.com
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-400 mb-2">Hours</h5>
              <p className="text-gray-300 text-sm">
                Mon-Thu: 7:30 AM - 08:00 PM
                <br />
                Fri-Sun: 8:00 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="font-semibold text-yellow-400 mb-2">Follow Us</h5>
              <div className="flex space-x-6">
                <a
                  href="https://wa.me/61412345678"
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 2.011c5.497 0 9.973 4.476 9.973 9.973 0 1.728-.441 3.354-1.217 4.77l1.217 4.246-4.387-1.293c-1.378.73-2.944 1.14-4.607 1.14-5.497 0-9.973-4.476-9.973-9.973S6.52 2.011 12.017 2.011z" />
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/momrestaurant"
                  className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://facebook.com/momrestaurant"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>

            <a href="#contact">
              <div className="text-center md:text-right">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Make a Reservation
                </Button>
              </div>
            </a>

            {/* <div className="text-center md:text-right">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Make a Reservation
              </Button>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} MOM Restaurant. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed with ❤️ for Torquay's finest dining experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
