"use client";

import { Heart, MonitorDown, SlidersHorizontal } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-32 bg-gradient-to-b from-[#020013] to-rose-500/10 relative"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 left-20 w-32 h-32 md:w-64 md:h-64 bg-rose-500/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 right-20 w-40 h-40 md:w-80 md:h-80 bg-[#BEF992]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            Par Mums
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-xl max-w-3xl mx-auto tracking-tighter text-gray-200"
          >
            Mums arī patīk volejbols{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              ❤️
            </motion.span>
            , tāpēc izveidojām šo platformu, lai varētu sakopot turnīrus
            vienuviet un kvalitatīvi tos organizēt{" "}
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              🏐
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 60, scale: 0.9 }
            }
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="bg-rose-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="w-12 h-12 bg-[#020013] rounded-lg flex items-center justify-center mb-6"
            >
              <MonitorDown className="w-6 h-6 text-rose-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="text-xl font-bold text-gray-100 mb-4 tracking-tighter"
            >
              Pārskatāmība
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="text-gray-200 tracking-normal"
            >
              Ātri un viegli pārskatiet pieejamo turnīru informāciju, lokāciju,
              datumu un izspēles sistēmu!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 60, scale: 0.9 }
            }
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="bg-rose-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="w-12 h-12 bg-[#020013] rounded-lg flex items-center justify-center mb-6"
            >
              <SlidersHorizontal className="w-6 h-6 text-rose-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="text-xl font-bold text-gray-100 mb-4 tracking-tighter"
            >
              Ērti lietojama
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className="text-gray-200 tracking-normal"
            >
              Viegla turnīru pievienošana, izspēles sistēmas izvēle grupā un
              play-off stadijā!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 60, scale: 0.9 }
            }
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="bg-rose-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="w-12 h-12 bg-[#020013] rounded-lg flex items-center justify-center mb-6"
            >
              <Heart className="w-6 h-6 text-rose-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              className="text-xl font-bold text-gray-100 mb-4 tracking-tighter"
            >
              Viss vienuviet
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
              className="text-gray-200 tracking-normal"
            >
              Mēs apvienojam volejbola cienītājus ar turnīra orgranizatoriem
              vienā vietā, lai paplašinātu volejbola saimi Latvijā!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
