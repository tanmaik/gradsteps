"use client";
import ExamplePlanGraphic from "./components/landing/ExamplePlanGraphic";
import HeroText from "./components/landing/HeroText";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className=" flex justify-center overflow-hidden">  {/* add overflow hidden to reduce scroll jitter */}
      <div className="w-[48rem]">
        <Navbar />
        <HeroText />
        <ExamplePlanGraphic />
      </div>
    </main>
  );
}
