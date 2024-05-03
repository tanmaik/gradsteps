import { useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NumberTicker({ delay = 0, className }) {
  const ref = useRef();
  const initialCount = 11292; // Start counting from 11292
  const motionValue = useMotionValue(initialCount);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  // Continuous count up logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the motion value by 1 every 0.5 second (customize this value as needed)
      motionValue.set(motionValue.get() + 1);
    }, 50); // Adjust the interval duration to speed up or slow down the counting

    return () => clearInterval(interval); // Clean up the interval
  }, [motionValue]);

  // Update displayed value whenever springValue changes
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span
      className={`inline-block tabular-nums text-black dark:text-white ${className}`}
      ref={ref}
    />
  );
}
