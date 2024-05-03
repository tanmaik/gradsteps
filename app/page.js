"use client";
import ExamplePlanGraphic from "./components/landing/ExamplePlanGraphic";
import HeroText from "./components/landing/HeroText";
import MoneyTicker from "./components/landing/MoneyTicker";
import StudentBento from "./components/landing/StudentBento";
import StudentInfoSpread from "./components/landing/StudentInfoSpread";
import StudentsHeader from "./components/landing/StudentsHeader";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <main className=" flex justify-center overflow-hidden">
      {/* add overflow hidden to reduce scroll jitter */}
      <div className="w-[48rem]">
        <Navbar />
        <HeroText />
        <ExamplePlanGraphic />
        <StudentsHeader />
        <StudentInfoSpread />
        <StudentBento />
        <MoneyTicker />
      </div>
    </main>
  );
}
