"use client";

import Image from "next/image";
import {
  PlusIcon,
  ClockIcon,
  BookOpenIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
function CourseOutline({ course, credits }) {
  return (
    <div className="flex gap-2 border px-2 py-1 rounded-xl text-sm">
      <div className="flex items-center justify-center bg-gray-300 rounded-full w-5 h-5">
        <p className=" text-gray-500">{credits}</p>
      </div>
      <p>{course}</p>
    </div>
  );
}

function ExamplePlan() {
  const divVariants = {
    offScreen: {
      y: 200, // Starts off screen, 200 pixels below the final position
      opacity: 0,
    },
    onScreen: {
      y: 0, // Moves up to the final vertical position
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        mass: 0.1,
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="border p-3 rounded-2xl w-[24rem] shadow-sm z-10 bg-white"
      variants={divVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        <Image
          src="/jamie-memoji.png"
          width={189}
          height={189}
          className="size-8"
          alt="Jamie profile picture"
        />
        <div>
          <h1 className="font-medium text-lg">
            Jamie&apos;s Undergraduate Plan
          </h1>
          <p className="text-gray-400 text-sm">On track, 24% progress</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <button className="flex items-center font-medium gap-1 px-2 py-1 bg-blue-600 shadow-sm transition-all hover:bg-blue-500 text-white rounded-md ">
          <PlusIcon className="h-4" />
          Add Programs
        </button>

        <div>
          <div className="flex justify-end">
            <Image
              src="/advisor-share.png"
              width={175}
              height={95}
              alt="Advisor share icon"
              className="w-10"
            />
          </div>
          <p className="text-sm text-gray-400">Shared with advisor</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-sm line-through">Semester 1</p>
          <p className="rounded-full px-2 bg-emerald-500 text-white text-sm">
            3.4 GPA
          </p>
        </div>
        <p className="text-gray-400 text-sm line-through">
          4 courses, 14 credits
        </p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <p className="text-lg">Semester 2</p>
        <p className="text-sm ">5 courses, 15 credits</p>
      </div>
      <p className="text-sm text-gray-400 flex gap-1 items-center">
        <ClockIcon className="size-3" />
        Registration opens in 3 days
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <CourseOutline course="CLASS 0040" credits={3} />
        <CourseOutline course="CS 0011" credits={3} />
        <CourseOutline course="LATN 0010" credits={3} />
        <CourseOutline course="BIOSC 0160" credits={3} />
        <CourseOutline course="ENGCMP 0200" credits={3} />
        <div className="flex gap-2 border-2 border-dashed hover:border-solid cursor-crosshair px-2 py-1 rounded-xl text-sm text-gray-400">
          <div className="flex items-center justify-center bg-gray-200 rounded-full w-5 h-5">
            <PlusIcon className="size-4" />
          </div>
          <p>Add</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-sm ">Semester 3</p>
        </div>
        <p className="text-gray-400 text-sm ">6 courses, 18 credits</p>
      </div>
      <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
        Expand courses <ChevronDownIcon className="size-3" />
      </p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-sm ">Semester 4</p>
          <p className="rounded-full px-2 border text-purple flex items-center gap-1 text-sm text-purple-500">
            <BookOpenIcon className="size-4" />
            MCAT prep
          </p>
        </div>
        <p className="text-gray-400 text-sm ">4 courses, 12 credits</p>
      </div>
      <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
        Expand courses <ChevronDownIcon className="size-3" />
      </p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 items-center">
          <p className="text-gray-400 text-sm ">Semester 5</p>
        </div>
        <p className="text-gray-400 text-sm ">6 courses, 18 credits</p>
      </div>
      <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
        Expand courses <ChevronDownIcon className="size-3" />
      </p>
    </motion.div>
  );
}

export default function ExamplePlanGraphic() {
  const textVariants = {
    hidden: {
      x: "-50%", // Starts hidden to the left
      opacity: 0,
    },
    visible: {
      x: "0%", // Slides into view
      opacity: 1,
      transition: {
        delay: 1, // Waits until the div slides
        type: "spring",
        duration: 0.3,
        stiffness: 40,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.1, // Waits until the div slides
        type: "spring",
        duration: 0.3,
        stiffness: 40,
      },
    },
  };
  return (
    <div className="flex justify-center gap-6 mt-12">
      <ExamplePlan />
      <motion.div
        className="text-sm mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h3>Most intuitive degree planner to date.</h3>
        <h3 className="text-gray-400">
          No more worrying about graduation <br />
          requirements or timelines.
        </h3>
      </motion.div>
    </div>
  );
}
