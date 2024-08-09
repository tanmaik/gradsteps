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

        <a
          href="https://app.gradsteps.com"
          className="py-1 px-4 bg-blue-500 text-white text-sm rounded-xl hover:bg-blue-600 transition-all"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
