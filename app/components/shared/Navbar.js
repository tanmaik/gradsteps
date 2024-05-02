import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 60,
      }}
      className="px-48 py-4 flex items-center justify-between w-full font-medium"
    >
      <Link href="/">
        <Image
          src="/wordmark.png"
          alt="Wordmark"
          height={500}
          width={500}
          className="w-32"
        />
      </Link>
      <div className="flex gap-10 items-center">
        <a
          href="https://cal.com/tanmai/chat-about-gradsteps"
          target="_blank"
          className="py-1 px-4 border rounded-xl hover:bg-gray-50 transition-all"
        >
          Learn more
        </a>
      </div>
    </motion.nav>
  );
}
