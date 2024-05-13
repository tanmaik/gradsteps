"use client";

import Navbar from "@/app/components/shared/Navbar";
import { useState } from "react";
export default function Page() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkPassword = () => {
    if (password === "fhc") {
      // Replace 'yourPassword' with the actual password
      setAccessGranted(true);
    } else {
      alert("Incorrect password!");
    }
  };
  return (
    <main className="flex justify-center overflow-hidden">
      <div className="w-[48rem]">
        <Navbar />
        {!accessGranted ? (
          <div className="flex flex-col h-dvh items-center justify-center p-10">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="p-2 text-lg border-2 border-gray-300 rounded-xl mb-4"
              placeholder="password"
            />
            <button
              onClick={checkPassword}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="p-4 my-5">
            <h1 className="text-2xl font-semibold mb-4">
              Product Specification for GradSteps Pilot Program
            </h1>

            <h2 className="text-xl font-medium mt-5">Overview</h2>

            <p>
              Purpose: Pilot an automated degree planning tool for Honors
              College students at the University of Pittsburgh.
            </p>
            <p>
              Scope: The pilot will involve students to demonstrate the
              tool&apos;s efficacy in improving academic planning.
            </p>

            <h2 className="text-xl font-medium mt-5">Objectives</h2>
            <ul>
              <li>Validate the usability and effectiveness of GradSteps.</li>
              <li>
                Gather qualitative and quantitative data on student engagement.
              </li>
              <li>
                Identify enhancement areas based on students use the tool.
              </li>
            </ul>

            <h2 className="text-xl font-medium mt-5">
              Features and Functionality
            </h2>
            <ul>
              <li>Comprehensive and automated degree planning</li>
              <li>Course recommendation system</li>
              <li>Direct line of feedback for students to receive help</li>
              <li>
                Data and usage analytics for Frederick Honors College admin
              </li>
            </ul>

            <h2 className="text-xl font-medium mt-5">Technical Requirements</h2>
            <ul>
              <li>
                Platform: Web-based application accessible on multiple devices.
              </li>
              <li>
                Security: Complies with FERPA for data protection. Students can
                use platform in anonymous mode or with their own account to save
                data.
              </li>
              <li>
                Integration: Integrates with existing university systems for
                up-to-date course and major information.
              </li>
              <li>
                Full access to platform data: FHC administrators can request
                access to stored data at anytime during pilot.
              </li>
            </ul>

            <h2 className="text-xl font-medium mt-5">Pilot Program Details</h2>
            <p>Timeline: Fall semester of 2024</p>
            <p>
              Participants: University of Pittsburgh Frederick Honors College
              students
            </p>
            <p>
              Data Collection: Surveys, usage statistics, and focus group
              interviews
            </p>
            <p>
              Support: Anonymous feedback line for students and (non-anonymous)
              24/7 email & phone support
            </p>

            <h2 className="text-xl  font-medium mt-5">Success Metrics</h2>
            <ul>
              <li>
                Student Engagement: Frequency and duration of GradSteps usage
              </li>
              <li>
                Satisfaction Ratings: Impact on academic planning experience
                measured through student feedback
              </li>
              <li>Academic Impact: Changes in academic performance</li>
            </ul>

            <div className="mt-6">
              <a
                className="underline text-blue-700"
                href="/GradSteps x FHC.pdf"
                download
              >
                Download the product spec to your computer
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
