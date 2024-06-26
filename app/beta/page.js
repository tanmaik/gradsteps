"use client";

import { useState } from "react";
import Navbar from "@/app/components/shared/Navbar";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Page() {
  const [password, setPassword] = useState("");
  const [opened, setOpened] = useState(false);
  const firstPart = "Thank you for your";
  const secondPart = "interest in GradSteps!";

  const firstWords = firstPart.split(" ");
  const secondWords = secondPart.split(" ");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkPassword = () => {
    if (password === "fhc") {
      window.open("/fhc.pdf", "_blank");
      setOpened(true);
      setPassword("Frederick Honors College");
    } else {
      alert("Incorrect password, contact team@gradsteps.com for help.");
    }
  };

  return (
    <main className="flex justify-center overflow-hidden">
      <div className="w-[48rem] text-center">
        <Navbar />

        <div className="text-5xl tracking-tighter  font-medium mt-20">
          <div>
            {firstWords.map((word, index) => (
              <motion.p
                key={`first-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index,
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
          {/* Animate second part */}
          <div className="mt-1">
            {secondWords.map((word, index) => (
              <motion.p
                key={`second-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index + 0.5,
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
          className="mt-2"
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
          Access your password-protected material below.
        </motion.p>
        {!opened ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.2,
              type: "spring",
              stiffness: 40,
            }}
            className="flex flex-col items-center justify-center mt-6"
          >
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="p-2 border-2 border-gray-300 rounded-xl"
              placeholder="Password"
            />
            <button
              onClick={checkPassword}
              className="bg-blue-500 mt-2 hover:bg-blue-600 text-white font-medium transition-all py-2 px-4 rounded-xl"
            >
              Submit
            </button>
          </motion.div>
        ) : (
          <div>
            <p className="mt-2 text-sm text-emerald-600">
              Welcome, {password}!
            </p>
            <Link href="https://app.gradsteps.com/" target="_blank">
              <p className="text-sm">
                Head to the beta version of the application {"->"}
              </p>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
