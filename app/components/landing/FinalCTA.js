import Image from "next/image";
import { motion } from "framer-motion";
export default function FinalCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2, type: "spring", stiffness: 40 }}
      className="mt-16 text-center"
    >
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          alt="Logo"
          className="rounded-2xl border size-20"
        />
      </div>
      <h1 className="text-5xl tracking-tighter leading-[3.5rem] font-medium mt-4">
        Save years by planning
        <br />
        your degree in seconds.
      </h1>
      <div className="mt-6">
        <a
          href="https://cal.com/tanmai/chat-about-gradsteps"
          target="_blank"
          className="py-1 px-4 border font-medium rounded-xl hover:bg-gray-50 transition-all"
        >
          Book a call
        </a>
      </div>
    </motion.div>
  );
}
