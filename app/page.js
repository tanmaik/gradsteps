"use client";
import HeroText from "./components/landing/HeroText";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className="px-2">
      <Navbar />
      <HeroText/>
    </main>
  );
}
