"use client";

import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
    >
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-rose-500 from-10% to-[#020013] to-90%"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="absolute bottom-20 right-20 w-40 h-40 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-col gap-4 items-center text-center"
        >
          <motion.div
            initial={{ rotate: -20, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              // rotate: 2,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <Image src="/images/logo.png" alt="Logo" width={250} height={250} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-4xl sm:text-6xl font-extrabold mb-4 md:mb-6 leading-10 sm:leading-16 text-[#BEF992] tracking-tighter text-center"
          >
            VOLEJBOLA<br></br>KALENDĀRS
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-lg sm:text-xl md:text-xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed tracking-tighter px-2"
        >
          Atrodi sev interesējošos turnīrus un piedalies!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/turniri">
              <Button
                variant={"outline"}
                className="border-[#BEF992] bg-transparent text-[#BEF992] hover:bg-[#BEF992] hover:text-[#2B1F31] hover:cursor-pointer w-[250px] hover:shadow-lg"
              >
                <Eye /> Aplūkot Turnīrus
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/turniri">
              <Button
                variant={"default"}
                className="bg-[#BEF992] text-[#2B1F31] hover:bg-[#a9dd81] hover:cursor-pointer w-[250px] hover:shadow-lg"
              >
                <Plus />
                Izveidot Turnīru
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
