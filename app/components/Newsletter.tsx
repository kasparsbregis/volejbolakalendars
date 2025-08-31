"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-[#020013] relative">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-10 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-rose-500/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute bottom-10 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-[#BEF992]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-2xl font-bold text-white mb-4"
            >
              Esi informēts par jauniem turnīriem
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-gray-300 mb-6"
            >
              Saņem paziņojumus par jauniem turnīriem un īpašiem piedāvājumiem
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center"
            >
              <input
                type="email"
                placeholder="Tava e-pasta adrese"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-[#BEF992] focus:border-transparent h-12 w-full sm:w-auto"
              />
              <Button className="bg-[#BEF992] text-[#2B1F31] hover:bg-[#a9dd81] hover:cursor-pointer px-6 py-3 rounded-lg font-semibold transition-colors duration-300 h-12 w-full sm:w-auto">
                Pierakstīties
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
