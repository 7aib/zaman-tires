import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";
import { googleReviews } from "@/utils/googleReviews";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Products", href: "/products" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Tire Change", href: "/services#tire-change" },
    { name: "Wheel Balance", href: "/services#wheel-balance" },
    { name: "3D Wheel Alignment", href: "/services#wheel-alignment" },
    { name: "Nitrogen Air", href: "/services#nitrogen-air" },
    { name: "Oil Change", href: "/services#oil-change" },
    { name: "Rims", href: "/services#rims" },
  ];

  const brands = [
    { name: "Yokohama", href: "/brands#yokohama" },
    { name: "Dunlop", href: "/brands#dunlop" },
    { name: "Michelin", href: "/brands#michelin" },
    { name: "Goodyear", href: "/brands#goodyear" },
    { name: "Bridgestone", href: "/brands#bridgestone" },
    { name: "New Age", href: "/brands#new-age" },
  ];

  return (
    <footer className="bg-black text-gray-400">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src="static/logo.jpg" alt="" />
                </div>
                {/* <span className="text-white font-bold text-lg">Z</span> */}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-300">Zaman tyre Trader</h3>
                <p className="text-sm text-gray-500">Trusted Tire Shop</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading tire shop in Wah Cantt offering premium tires, rims, wheel
              alignment, and automotive services. Over 90+ tire brands
              available.
            </p>
            {/* <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">{googleReviews.rating} ({googleReviews.reviewCount} reviews)</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+923005888776"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    0300 5888776
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://share.google/v8LnVtVICJoSqbK1Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    GT Rd, Cantt, Wah, Pakistan
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Sun: 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Zaman tyre Trader. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Leading tire shop in Wah Cantt, Pakistan
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
