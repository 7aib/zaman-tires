"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [storeStatus, setStoreStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Store hours configuration: 0=Sunday ... 6=Saturday
  // Times are 24h in local browser time. Adjust as needed.
  const storeHours: { [day: number]: { open: number; close: number } | null } =
    {
      0: { open: 9, close: 21 },
      1: { open: 9, close: 21 },
      2: { open: 9, close: 21 },
      3: { open: 9, close: 21 },
      4: { open: 9, close: 21 },
      5: { open: 0, close: 0 },
      6: { open: 9, close: 21 },
    };

  const formatHour = (hour24: number) => {
    const period = hour24 >= 12 ? "pm" : "am";
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    return `${hour12} ${period}`;
  };

  const getNextOpenTime = (
    from: Date
  ): { dayIndex: number; hour: number } | null => {
    for (let i = 0; i < 7; i++) {
      const dayIndex = (from.getDay() + i) % 7;
      const hours = storeHours[dayIndex];
      if (!hours) continue;
      if (i === 0) {
        // Same day: only consider if we haven't reached open time yet
        if (from.getHours() < hours.open) {
          return { dayIndex, hour: hours.open };
        }
      } else {
        return { dayIndex, hour: hours.open };
      }
    }
    return null;
  };

  const computeStoreStatus = (now: Date): string => {
    const todayIdx = now.getDay();
    const hours = storeHours[todayIdx];
    if (!hours) {
      const next = getNextOpenTime(now);
      if (!next) return "Closed";
      const isTomorrow = next.dayIndex === (todayIdx + 1) % 7;
      const when = isTomorrow ? "tomorrow" : "soon";
      return `Closed ⋅ Opens ${when} at ${formatHour(next.hour)}`;
    }
    const currentHour = now.getHours() + now.getMinutes() / 60;
    if (currentHour >= hours.open && currentHour < hours.close) {
      return `Open ⋅ Closes ${formatHour(hours.close)}`;
    }
    // Not open now → find next opening
    const next = getNextOpenTime(now);
    if (!next) return "Closed";
    const isToday = next.dayIndex === todayIdx;
    const isTomorrow = next.dayIndex === (todayIdx + 1) % 7;
    const when = isToday ? "today" : isTomorrow ? "tomorrow" : "soon";
    return `Closed ⋅ Opens ${when} at ${formatHour(next.hour)}`;
  };

  useEffect(() => {
    const update = () => setStoreStatus(computeStoreStatus(new Date()));
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Products", href: "/products" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 text-sm">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+923005888776"
                  className="hover:text-primary-300 transition-colors"
                >
                  0300 5888776
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>GT Rd, Cantt, Wah</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{storeStatus || "Checking hours…"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Zaman Tyres Trader
                </h1>
                <p className="text-sm text-gray-600">Wah Cantt, Pakistan</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+923005888776" className="btn-primary">
                Call Now
              </a>
              <a
                href="https://share.google/v8LnVtVICJoSqbK1Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get Directions
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                  <a
                    href="tel:+923005888776"
                    className="btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now
                  </a>
                  <a
                    href="https://share.google/v8LnVtVICJoSqbK1Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Directions
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
