"use client";
import ExamplePlanGraphic from "./components/landing/ExamplePlanGraphic";
import FinalCTA from "./components/landing/FinalCTA";
import Footer from "./components/landing/Footer";
import HeroText from "./components/landing/HeroText";
import MoneyTicker from "./components/landing/MoneyTicker";
import StudentBento from "./components/landing/StudentBento";
import StudentInfoSpread from "./components/landing/StudentInfoSpread";
import StudentSuccessMetrics from "./components/landing/StudentSuccessMetrics";
import StudentsHeader from "./components/landing/StudentsHeader";
import UniversityHeader from "./components/landing/UniversityHeader";
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
        <UniversityHeader />
        <StudentSuccessMetrics />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
