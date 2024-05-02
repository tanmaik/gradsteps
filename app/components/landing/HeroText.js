import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [email, setEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [buttonState, setButtonState] = useState("idle");

  // Split the headline into two parts
  const firstPart = "The smartest tool for";
  const secondPart = "academic exploration.";

  // Split each part into words for individual animation
  const firstWords = firstPart.split(" ");
  const secondWords = secondPart.split(" ");

  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <motion.button
          className="rounded-full cursor-help px-3 py-1 bg-gradient-to-r font-normal text-sm from-blue-400 to-blue-500 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          Private beta
        </motion.button>

        <div className="text-5xl tracking-tighter mt-4">
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
                className="mx-2 inline-block"
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
                className="mx-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "spring",
            stiffness: 40,
          }}
        >
          Reimagine the way students plan their <br />
          degree and supercharge their outcomes.
        </motion.p>
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.2,
            type: "spring",
            stiffness: 40,
          }}
        >
          <div className="flex justify-between items-center gap-4 rounded-full border py-[1px] pl-4 pr-[1px]">
            <input
              type="email"
              placeholder="Email"
              className="outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h1
              className="py-2 bg-blue-500 hover:bg-blue-700 transition-all cursor-pointer text-white rounded-full px-4"
              onClick={async () => {
                if (buttonState === "success") return;

                setButtonState("loading");

                await new Promise((resolve) => setTimeout(resolve, 1750));
                setButtonState("success");
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  key={buttonState}
                >
                  {buttonCopy[buttonState]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>
        </motion.div>
        <motion.p
          className={
            isCopied
              ? `mt-4 text-gray-400 text-xs`
              : `mt-4 cursor-pointer hover:underline hover:text-gray-400 text-xs text-gray-300 transition-all`
          }
          onClick={() => {
            navigator.clipboard.writeText("team@gradsteps.com");
            setIsCopied(true);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.2,
          }}
        >
          {isCopied
            ? "Email copied to clipboard!"
            : "Interested in contributing? Email us"}
        </motion.p>
      </div>
    </div>
  );
}
