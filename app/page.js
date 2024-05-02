"use client";
import ExamplePlanGraphic from "./components/landing/ExamplePlanGraphic";
import HeroText from "./components/landing/HeroText";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className=" flex justify-center">
      <div className="w-[50rem]">
        <Navbar />
        <HeroText />
        <ExamplePlanGraphic />
      </div>
    </main>
  );
}
