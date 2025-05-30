import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/20/solid";

const buttonCopy = {
  idle: "Stay Updated",
  loading: "Loading...",
  success: (
    <div className="flex gap-1 items-center">
      <CheckIcon className="h-5 w-5 text-white" />
      <span>Success!</span>
    </div>
  ),
};

export default function HeroText() {
  const [isCopied, setIsCopied] = useState(false);
  const [buttonState, setButtonState] = useState("idle");

  // Split the headline into two parts
  const firstPart = "The smartest tool for";
  const secondPart = "academic planning.";

  // Split each part into words for individual animation
  const firstWords = firstPart.split(" ");
  const secondWords = secondPart.split(" ");

  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 40,
          }}
        >
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
            Made for Pitt students
          </span>
        </motion.div>
        <div className="text-5xl tracking-tighter mt-4 font-medium">
          <div>
            {firstWords.map((word, index) => (
              <motion.p
                key={`first-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index + 0.2,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 40,
                }}
                className="mx-1 inline-block"
              >
                {word}
              </motion.p>
            ))}
          </div>
          <div className="mt-1">
            {secondWords.map((word, index) => (
              <motion.p
                key={`second-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index + 0.7,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 40,
                }}
                className="mx-1 inline-block"
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
        >
          Reimagine the way students plan degrees <br />
          and supercharge academic outcomes.
        </motion.p>
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 0.2,
            type: "spring",
            stiffness: 40,
          }}
        >
          <div>
            <p
              className={
                isCopied
                  ? `mt-4 text-gray-500 text-xs`
                  : `mt-4 cursor-pointer hover:underline hover:text-gray-500 text-xs text-gray-400 transition-all`
              }
              onClick={() => {
                navigator.clipboard.writeText("team@gradsteps.com");
                setIsCopied(true);
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.4,
                duration: 0.2,
              }}
            >
              {isCopied
                ? "Email copied to clipboard!"
                : "Interested in contributing? Email us"}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
