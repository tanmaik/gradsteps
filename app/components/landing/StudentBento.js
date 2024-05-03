"use client";
import { useState, useEffect } from "react";
import {
  XMarkIcon,
  DocumentIcon,
  EnvelopeIcon,
  SparklesIcon,
  GlobeAmericasIcon,
  BeakerIcon,
} from "@heroicons/react/20/solid";

import { AnimatePresence, motion, useAnimation } from "framer-motion";

function RelevantInformation() {
  const fullText =
    "This introductory writing course focuses on improving students' skills through assignments that explore writing's role in expression, influence, and identity. Emphasis is on student writing, aiming to develop more engaged, creative, and disciplined writers.";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;

    // Handling the typing and deleting
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(typedText.slice(0, typedText.length - 1));
        setSpeed(30); // Faster backspacing speed
      }, speed);
    } else {
      timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
        setSpeed(100); // Normal typing speed
      }, speed);
    }

    // Determine if the word is completely typed or deleted
    if (!isDeleting && typedText === fullText) {
      setIsDeleting(true);
      setTimeout(() => setSpeed(500), 1000); // Pause before deleting
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // Start typing again after a pause
      setSpeed(500);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, fullText, speed, loopNum]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 40,
      }}
      className="bg-[#F8F8F8] rounded-3xl flex justify-center p-6"
    >
      <div className="w-full">
        <div className="w-full rounded-3xl bg-white border px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <h1 className="font-medium">Seminar in Composition</h1>
              <div className="flex items-center justify-center bg-gray-300 rounded-full w-5 h-5">
                <p className="text-gray-500">3</p>
              </div>
            </div>
            <XMarkIcon className="h-5 text-gray-400" />
          </div>
          <div className="mt-1 flex gap-1 items-center">
            <p className="text-sm">ENGCMP 0200</p>
            <p className="bg-violet-400 rounded-full px-2 text-sm text-white">
              F&apos;25
            </p>
          </div>
          <div className="mt-2 flex gap-2 items-center">
            <button className="px-2 flex gap-1 items-center bg-gray-100 hover:bg-gray-50 transition-all font-medium text-sm py-1 rounded-xl">
              <DocumentIcon className="h-4" />
              View syllabus
            </button>
            <button className="px-2 flex gap-1 items-center hover:bg-gray-100 transition-all border font-medium text-sm py-1 rounded-xl">
              <EnvelopeIcon className="h-4" />
              Email department
            </button>
          </div>
          <p className="flex gap-1 mt-2 font-medium items-center">
            <SparklesIcon className="h-3" />
            AI Summary
          </p>
          <p
            className="text-sm mt-1 h-[7rem]"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {typedText}
          </p>
        </div>
        <h1 className="text-center font-medium mt-4">
          Find all relevant information about classes.
        </h1>
        <p className="text-center text-gray-500 leading-snug">
          AI-generated summaries and syllabi,
          <br /> available for all your classes.
        </p>
      </div>
    </motion.div>
  );
}

function DifficultyLevel() {
  const controlsBlue = useAnimation();
  const controlsYellow = useAnimation();
  const controlsRed = useAnimation();
  const [buttonState, setButtonState] = useState("idle");

  const buttonCopy = {
    idle: (
      <div className="text-sm font-medium">
        <p>Very difficult</p>
        <p className="text-gray-500">average grade, C-</p>
      </div>
    ),
    loading: (
      <div className="text-sm font-medium">
        <p>Easier</p>
        <p className="text-gray-500">average grade, A</p>
      </div>
    ),
    success: (
      <div className="text-sm font-medium">
        <p>Intermediate</p>
        <p className="text-gray-500">average grade, B+</p>
      </div>
    ),
  };
  const variants = {
    scaled: {
      scale: 1.4,
      transition: {
        duration: 1,
      },
    },
    normal: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Loop indefinitely
        // Blue circle scales up
        setButtonState("loading");

        await controlsBlue.start("scaled");
        // Yellow circle scales up, blue scales down
        await controlsBlue.start("normal");
        setButtonState("success");

        await controlsYellow.start("scaled");
        // Red circle scales up, yellow scales down
        await controlsYellow.start("normal");
        setButtonState("idle");

        await controlsRed.start("scaled");
        // Red circle scales down
        await controlsRed.start("normal");
      }
    };

    sequence();
  }, [controlsBlue, controlsYellow, controlsRed]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 40,
      }}
      className="bg-[#F8F8F8] rounded-3xl flex justify-center items-center p-6"
    >
      <div className="w-full">
        <div className="w-full rounded-3xl bg-white border px-4 py-4 flex items-center justify-between">
          <div className="text-sm font-medium">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: 10 }}
                key={buttonState}
              >
                {buttonCopy[buttonState]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex flex-col items-center justify-between  border px-2 py-1 rounded-full gap-2">
            <motion.div
              className="size-2 bg-blue-400 rounded-full"
              variants={variants}
              initial="normal"
              animate={controlsBlue}
            ></motion.div>
            <motion.div
              className="size-2 bg-yellow-400 rounded-full"
              variants={variants}
              initial="normal"
              animate={controlsYellow}
            ></motion.div>
            <motion.div
              className="size-2 bg-red-400 rounded-full"
              variants={variants}
              initial="normal"
              animate={controlsRed}
            ></motion.div>
          </div>
        </div>
        <h1 className="text-center font-medium leading-snug mt-4">
          Know exactly how hard a class will be.
        </h1>
      </div>
    </motion.div>
  );
}

function ElectiveChooser() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 40,
      }}
      className="bg-[#F8F8F8] rounded-3xl flex justify-center items-center px-6 pt-6 overflow-hidden"
    >
      <div className="w-full">
        <h1 className="text-center font-medium">Your electives, your way.</h1>
        <div className="w-full rounded-3xl rounded-b-none mt-4 bg-white border border-b-0 px-4 py-2">
          <div className="flex gap-2 items-center mb-2 hover:bg-gray-50 transition-all cursor-grab">
            <GlobeAmericasIcon className="h-5 text-emerald-500" />
            <div>
              <h1 className="font-medium">Global Contexts</h1>
              <p className="text-xs text-gray-500">School-specific gen ed.</p>
            </div>
          </div>
          <hr></hr>
          <div className="flex gap-2 items-center mt-1 hover:bg-gray-50 transition-all cursor-grab">
            <BeakerIcon className="h-5 text-cyan-500" />
            <div>
              <h1 className="font-medium">Research lab</h1>
              <p className="text-xs text-gray-500">
                Major-specific requirement
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentBento() {
  return (
    <div className="grid grid-cols-[60%_40%] gap-4 mt-16">
      <RelevantInformation />
      <div className="grid gap-4">
        <DifficultyLevel />
        <ElectiveChooser />
      </div>
    </div>
  );
}
