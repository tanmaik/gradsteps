"use client";
import {
  SparklesIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function StudentInfoSpread() {
  return (
    <div className="mt-6 flex w-full justify-between font-medium text-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="flex gap-1 items-center">
          <SparklesIcon className="size-3" />
          Fully automated. <span className="text-gray-500">No more</span>
        </p>
        <p className="text-gray-500">scouring through course catalogs</p>
        <p className="text-gray-500">for requirements.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="flex gap-1 items-center">
          <UserIcon className="size-3" />
          Suited for you. <span className="text-gray-500">Want to do a</span>
        </p>
        <p className="text-gray-500">double major, a minor, or a special</p>
        <p className="text-gray-500">program? We&apos;ll handle it for you.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="flex gap-1 items-center">
          <PaperAirplaneIcon className="size-3" />
          Register in seconds. <span className="text-gray-500">Goodbye to</span>
        </p>
        <p className="text-gray-500">last-minute changes before</p>
        <p className="text-gray-500">registration deadlines.</p>
      </motion.div>
    </div>
  );
}
