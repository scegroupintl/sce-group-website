"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400" });

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-transform duration-300 ${roboto.className} ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary py-2">
              <Link href="/">
                <img src="/internationalsce_logo.png" alt="SCE Group Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#services">
                <div className="text-gray-700 hover:text-primary px-3 py-2 transition duration-300">
                  Servicios
                </div>
              </Link>
              <Link href="/about">
                <div className="text-gray-700 hover:text-primary px-3 py-2 transition duration-300">
                  Sobre Nosotros
                </div>
              </Link>
              <Link href="/#contact">
                <div className="text-gray-700 hover:text-primary px-3 py-2 transition duration-300">
                  Contacto
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-700 hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- Mobile menu --> */}
      <div id="mobile-menu" className="md:hidden hidden bg-white border-t">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-700 hover:text-primary"
          >
            Home
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-gray-700 hover:text-primary"
          >
            Services
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-gray-700 hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 hover:text-primary"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 bg-secondary text-white rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};
