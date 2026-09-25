import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="py-4 flex items-center w-full justify-between font-medium">
      <Link href="/">
        <Image
          src="/wordmark.png"
          alt="Wordmark"
          height={190}
          width={1090}
          className="w-28"
        />
      </Link>
      <div className="flex gap-6 items-center">
        <a href="/#students" className="text-sm">
          Students
        </a>
        <a href="/#universities" className="text-sm">
          Universities
        </a>

        <span
          aria-disabled="true"
          className="py-1 px-4 bg-gray-200 text-gray-400 text-sm rounded-xl cursor-not-allowed select-none"
        >
          Get started
        </span>
      </div>
    </nav>
  );
}
