import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <h1>welcome to janitor. what are you here to clean? </h1>

      
      <Link href="/course-enrollment-requirements">
        <p className="mt-4">course enrollment requirements</p>
      </Link>
    </div>
  );
}
