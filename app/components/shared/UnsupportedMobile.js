"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function UnsupportedMobile() {
  // Split the headline into two parts
  const firstPart = "The smartest tool for";
  const secondPart = "academic planning.";

  // Split each part into words for individual animation
  const firstWords = firstPart.split(" ");
  const secondWords = secondPart.split(" ");
  return (
    <div className="flex justify-center h-screen items-center px-4">
      <div className="text-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
        >
          <Image
            src="/wordmark.png"
            width={1090}
            height={190}
            className="w-32"
            alt="GradSteps"
          />
        </motion.div>
        <div className="text-4xl tracking-tighter mt-7 font-medium">
          <div>
            {firstWords.map((word, index) => (
              <motion.span
                key={`first-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index + 0.2,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 40,
                }}
                className="mx-1 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          {/* Animate second part */}
          <div>
            {secondWords.map((word, index) => (
              <motion.span
                key={`second-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index + 0.7,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 40,
                }}
                className="mx-1 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.p
          className="mt-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
        >
          This website is not supported on mobile yet. <br />
          Please visit on a desktop or laptop.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
          className="mt-4"
        >
          <a
            href="https://cal.com/tanmai/chat-about-gradsteps"
            target="_blank"
            className="py-1 px-4 mt-10 border text-sm rounded-xl hover:bg-gray-50 transition-all"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
        >
          <Image src="/peeps.png" width={1420} height={920} alt="Peeps" />
        </motion.div>
      </div>
    </div>
  );
}
