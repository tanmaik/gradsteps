import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex justify-center text-sm mt-16 mb-4">
      <div className="text-center">
        <div className="flex justify-center">
          <a
            href="https://x.com/trygradsteps"
            target="_blank"
            className="flex gap-1  hover:text-gray-500 transition-all text-gray-400"
          >
            Follow us on X @trygradsteps
          </a>
        </div>
        <p className="mt-1">All rights reserved. © 2024 GradSteps, Inc.</p>
      </div>
    </div>
  );
}
