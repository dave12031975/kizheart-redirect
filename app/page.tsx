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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 pb-20">
      {/* Logo Transition: Alt -> Neu */}
      <div className="flex items-center gap-4 md:gap-8 mb-8">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/images/kizheart-logo.png"
            alt="KIZHEART Logo"
            fill
            className="object-contain opacity-60"
            priority
          />
        </div>

        <div className="text-4xl md:text-6xl text-purple-500 animate-arrow-bounce">
          →
        </div>

        <div className="relative w-20 h-20 md:w-28 md:h-28">
          <Image
            src="/images/herz-neu.jpg"
            alt="Dave and Tabea Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Hauptbild */}
      <div className="relative w-full max-w-md md:max-w-lg aspect-[4/3] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/dave-tabea.jpg"
          alt="Dave und Tabea"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Wir sind umgezogen!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          <span className="text-gray-500 line-through">kizheart.com</span>
          {" "}ist jetzt{" "}
          <span className="text-white font-semibold">daveandtabea.de</span>
        </p>
        <p className="text-gray-400">
          Gleicher Tanz. Neue Adresse. Noch mehr Urban Kiz!
        </p>
      </div>

      {/* Countdown & Button */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Automatische Weiterleitung in{" "}
          <span className="text-white font-bold text-xl">{countdown}</span>
          {" "}Sekunden...
        </p>

        <button
          onClick={handleRedirect}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg hover:scale-105 transition-transform animate-pulse-glow"
        >
          Jetzt zu daveandtabea.de →
        </button>
      </div>
    </div>
  );
}
