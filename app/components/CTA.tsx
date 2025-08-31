"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Eye } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-rose-500/10 via-rose-500/20 to-[#020013] relative overflow-hidden"
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
          className="text-center mb-16"
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
            Esi formā?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Pievienojies tūkstošiem volejbola cienītāju un piedalies aizraujošos
            turnīros!
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#BEF992] mb-2">50+</div>
            <div className="text-gray-300">Aktīvi Turnīri</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#BEF992] mb-2">1000+</div>
            <div className="text-gray-300">Dalībnieki</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#BEF992] mb-2">25+</div>
            <div className="text-gray-300">Uzvarētāji</div>
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
            <Button
              variant={"outline"}
              className="border-[#BEF992] bg-transparent text-[#BEF992] hover:bg-[#BEF992] hover:text-[#2B1F31] hover:cursor-pointer w-[250px] hover:shadow-lg"
            >
              <Eye /> Aplūkot Turnīrus
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
