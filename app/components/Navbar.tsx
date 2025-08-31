"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#413D65]/20 backdrop-blur-md shadow-sm"
          : "bg-[#413D65]/0 backdrop-blur-none shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="block"
          >
            <Link href="/turniri">
              <Button className="border-[#BEF992] bg-transparent text-[#BEF992] hover:bg-[#BEF992] hover:text-[#2B1F31] hover:cursor-pointer transition-all duration-200 border-2">
                Turnīri
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
