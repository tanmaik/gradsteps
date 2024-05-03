import { motion } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import NumberTicker from "../shared/NumberTicker";
export default function MoneyTicker() {
  return (
    <motion.div
      className="text-center mt-16"
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
      <h1 className="text-4xl font-medium tracking-tight">
        Unparalleled piece of mind.
      </h1>
      <p className="mt-2">
        No more rushing to meet requirements. You tell us
        <br /> when you want to graduate and we&apos;ll make it happen.
      </p>
      <p className={`text-6xl ${GeistMono.className} mt-6`}>
        $
        <NumberTicker value={10000} direction="up" />
      </p>
      <p className="text-sm mt-2 text-gray-400">Possible tuition money saved</p>
    </motion.div>
  );
}
