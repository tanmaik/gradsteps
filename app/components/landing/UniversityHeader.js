import Image from "next/image";
import { motion } from "framer-motion";
import {
  EyeIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
export default function UniversityHeader() {
  return (
    <div className="text-center mt-16 font-medium" id="universities">
      <motion.div
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
        <p className="text-sm">Faculty & Administration</p>
        <h1 className="text-4xl tracking-tight mt-2">
          Student success, made easy.
        </h1>
      </motion.div>
      <div className="mt-10 flex w-full justify-between font-medium text-sm text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="flex gap-1 items-center">
            <EyeIcon className="size-3" />
            Glanceable insights. <span className="text-gray-500">Know</span>
          </p>
          <p className="text-gray-500">where your students are at in a</p>
          <p className="text-gray-500">couple of clicks.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="flex gap-1 items-center">
            <AdjustmentsHorizontalIcon className="size-3" />
            Adjustable plans. <span className="text-gray-500">Drag-and-</span>
          </p>
          <p className="text-gray-500">drop courses around to make room</p>
          <p className="text-gray-500">for out-of-classroom opportunities.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="flex gap-1 items-center">
            <WrenchScrewdriverIcon className="size-3" />
            Tune difficulty levels.
            <span className="text-gray-500">Ensure</span>
          </p>
          <p className="text-gray-500">students pass classes by tuning</p>
          <p className="text-gray-500">class difficulty as you go.</p>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-10"
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
          src="/example-advisor-dashboard.png"
          width={5810}
          height={2670}
          alt="Example input"
          className="w-[80%]"
        />
      </motion.div>
    </div>
  );
}
