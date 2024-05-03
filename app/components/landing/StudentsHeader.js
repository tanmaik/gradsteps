"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function StudentsHeader() {
  return (
    <div className="text-center mt-16 font-medium">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.2,
          type: "spring",
          stiffness: 40,
        }}
      >
        <p className="text-sm">Students</p>
        <h1 className="text-4xl tracking-tight mt-2">
          Generate a course plan in seconds.
        </h1>
      </motion.div>
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.2,
          type: "spring",
          stiffness: 40,
        }}
      >
        <Image
          src="/example-input.png"
          width={5740}
          height={2670}
          alt="Example input"
          className="w-[80%]"
        />
      </motion.div>
    </div>
  );
}
