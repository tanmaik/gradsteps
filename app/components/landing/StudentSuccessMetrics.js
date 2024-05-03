import { motion } from "framer-motion";
import Image from "next/image";
export default function StudentSuccessMetrics() {
  return (
    <div className="flex justify-center text-center">
      <div>
        <motion.button
          className="rounded-full cursor-help px-3 py-1 bg-gradient-to-r text-sm from-emerald-500 to-emerald-400 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.2,
            type: "spring",
            stiffness: 40,
          }}
        >
          Coming soon
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.2,
            type: "spring",
            stiffness: 40,
          }}
        >
          <h1 className="text-4xl font-medium tracking-tight mt-4">
            Take action on key student <br /> success metrics.
          </h1>
          <p className="mt-2">
            Receive recommendations on changes to classes and
            <br /> degree requirements to best suit your students.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center mt-8"
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
            src="/example-chart.png"
            width={7660}
            height={3740}
            alt="Example input"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
