"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="bg-[#020013] text-white relative overflow-hidden border-t border-gray-800"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-[#BEF992]">
                  VOLEJBOLA KALENDĀRS
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Platforma volejbola cienītājiem - izveido, organizē un piedalies
                pludmales volejbola turnīros!
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="text-xl font-semibold text-[#BEF992] mb-8">
                Kontakti
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-rose-500" />
                  </div>
                  <span className="text-gray-300 text-lg">
                    info@volejbolakalendars.lv
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-rose-500" />
                  </div>
                  <span className="text-gray-300 text-lg">+371 20000000</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-rose-500" />
                  </div>
                  <span className="text-gray-300 text-lg">Rīga, Latvija</span>
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
            delay: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="py-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Volejbola Kalendārs. Visas tiesības
              aizsargātas.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Mājslapas izstrādātājs:</span>
              <Link href={"/team"}>
                <span className="text-rose-500 hover:text-rose-300 transition-colors duration-200">
                  Kaspars Breģis
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
