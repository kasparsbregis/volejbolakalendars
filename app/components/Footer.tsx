"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="bg-[#020013] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-rose-500/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute bottom-0 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-[#BEF992]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-[#BEF992]">
                  Volejbola Kalendārs
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Platforma volejbola cienītājiem - izveido, organizē un piedalies
                pludmales volejbola turnīros!
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="text-lg font-semibold text-[#BEF992] mb-6">
                Pakalpojumi
              </h3>
              <ul className="space-y-3">
                {[
                  "Turnīru Organizēšana",
                  "Reģistrācija",
                  "Rezultātu Sekošana",
                  "Vietu Sadalījums",
                  "Statistika",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#BEF992] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="text-lg font-semibold text-[#BEF992] mb-6">
                Kontakti
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-300">
                    info@volejbolakalendars.lv
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-300">+371 20000000</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-300">Rīga, Latvija</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="py-6 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Volejbola Kalendārs. Visas tiesības aizsargātas.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Izveidots ar</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              <span>Latvijā</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
