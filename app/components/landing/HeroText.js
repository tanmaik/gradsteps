import { useState } from "react";
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

import { motion, AnimatePresence } from "framer-motion";

export default function HeroText() {
  const [email, setEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [buttonState, setButtonState] = useState("idle");
  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <button className="rounded-full px-3 py-1 bg-gradient-to-r font-normal text-sm from-blue-400 to-blue-500 text-white">
          Private beta
        </button>
        <h1 className="text-6xl tracking-tighter font-medium mt-4">
          The smartest tool for <br /> academic exploration.
        </h1>
        <p className="mt-4">
          Reimagine the way students plan their <br />
          degree and supercharge their outcomes.
        </p>

        <div className="flex justify-center mt-4">
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
              className="py-2 bg-black cursor-pointer text-white rounded-full px-4"
              onClick={async () => {
                if (buttonState === "success") return;

                setButtonState("loading");

                await setTimeout(() => {
                  setButtonState("success");
                }, 1750);
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
        </div>
        <p
          className={
            isCopied
              ? `mt-4 text-gray-400 text-xs`
              : `mt-4 cursor-pointer hover:underline hover:text-gray-400 text-xs text-gray-300 transition-all`
          }
          onClick={() => {
            navigator.clipboard.writeText("team@gradsteps.com");
            setIsCopied(true);
          }}
        >
          {isCopied
            ? "Email copied to clipboard!"
            : "Interested in contributing? Email us"}
        </p>
      </div>
    </div>
  );
}
