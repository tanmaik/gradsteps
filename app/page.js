"use client";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <nav className="px-48 py-4 flex justify-between w-full">
        <Link href="/">
          <Image
            src="/wordmark.png"
            alt="Wordmark"
            height={500}
            width={500}
            className="w-32"
          />
        </Link>
        <div className="flex gap-10 items-center"></div>
      </nav>
    </main>
  );
}
