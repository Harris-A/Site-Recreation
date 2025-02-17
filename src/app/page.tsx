'use client'

import { useState, useEffect } from "react";
import Header from "./Header";
import Image from "next/image";
export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
      <div className="hero-section min-h-screen flex flex-col justify-center bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300 px-4 sm:px-8 md:px-16">
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="absolute top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
          {/*<Image className="absolute top-0 left-4" src="/logo.svg" alt="Two Good Co. Logo" width={100} height={100} />*/}

          <Header />
      </div>
  );
}
