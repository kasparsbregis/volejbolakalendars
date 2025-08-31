"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-rose-500/10 to-[#020013] relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 left-20 w-32 h-32 md:w-64 md:h-64 bg-rose-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 right-20 w-40 h-40 md:w-80 md:h-80 bg-[#BEF992]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            💪 Esi Formā?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Pievienojies tūkstošiem volejbola cienītāju un piedalies aizraujošos
            turnīros!
          </motion.p>
        </motion.div>

        {/* Animated Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex justify-center items-center mb-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-10 h-10 text-[#BEF992]" />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/turniri">
              <Button
                variant={"outline"}
                className="border-[#BEF992] bg-transparent text-[#BEF992] hover:bg-[#BEF992] shadow-[#BEF992]/30 shadow-xl/50 hover:text-[#2B1F31] hover:cursor-pointer w-[250px] text-base py-6 px-4"
              >
                <Eye /> Aplūkot Turnīrus
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
