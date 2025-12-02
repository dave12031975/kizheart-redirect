"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const REDIRECT_URL = "https://daveandtabea.de";
const COUNTDOWN_SECONDS = 5;

export default function Home() {
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = REDIRECT_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fullscreen Background Image - horizontally centered */}
      <div className="absolute inset-0">
        <Image
          src="/images/dave-tabea.jpg"
          alt="Dave und Tabea"
          fill
          className="object-cover"
          style={{ objectPosition: 'calc(50% + 150px) center' }}
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pb-20">

        {/* Logo - only old KIZHEART logo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-8">
          <Image
            src="/images/kizheart-logo.png"
            alt="KIZHEART Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Wir sind umgezogen!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-2 drop-shadow-md">
            Besuche uns jetzt auf{" "}
            <span className="text-white font-semibold">daveandtabea.de</span>
          </p>
          <p className="text-lg text-gray-300 drop-shadow-md">
            Gleicher Tanz. Neue Adresse. Noch mehr Urban Kiz!
          </p>
        </div>

        {/* Countdown & Button */}
        <div className="text-center">
          <p className="text-gray-300 mb-4 text-lg drop-shadow-md">
            Automatische Weiterleitung in{" "}
            <span className="text-white font-bold text-2xl">{countdown}</span>
            {" "}Sekunden...
          </p>

          <button
            onClick={handleRedirect}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full text-xl hover:scale-105 transition-transform animate-pulse-glow shadow-2xl"
          >
            Jetzt zu daveandtabea.de →
          </button>
        </div>
      </div>
    </div>
  );
}
