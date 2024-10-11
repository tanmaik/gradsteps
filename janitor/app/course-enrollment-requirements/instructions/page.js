"use client";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div className="p-2">
      <p
        className="text-blue-500 underline"
        onClick={() => {
          router.back();
        }}
      >
        {"<-"} Go back
      </p>
      <h1>Instructions coming soon.</h1>
    </div>
  );
}
