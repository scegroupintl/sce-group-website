"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-2 md:mb-0 text-center text-sm md:text-base md:text-left">
          &copy; {new Date().getFullYear()} SCE Group International. Todos los
          derechos reservados.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs md:text-sm">
          <span>
            Contacto:{" "}
            <a
              href="mailto:info@scegroupintl.com"
              className="underline hover:text-yellow-400"
            >
              info@scegroupintl.com
            </a>{" "}
            <span className="mx-2">|</span>{" "}
            <a
              href="tel:+13852541415"
              className="underline hover:text-yellow-400"
            >
              +1 (385) 254-1415
            </a>
          </span>
          <span className="hidden md:inline-block">|</span>
          <span className="flex items-center gap-2">
            Síguenos en:
            <a
              href="https://www.facebook.com/SCEinternational/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sce_international/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.282.342 2.394 1.322 3.374.981.981 2.093 1.264 3.374 1.323 1.281.059 1.69.072 4.946.072s3.665-.013 4.946-.072c1.282-.059 2.394-.342 3.374-1.323.981-.98 1.264-2.092 1.323-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.282-.342-2.394-1.323-3.374-.98-.981-2.092-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
