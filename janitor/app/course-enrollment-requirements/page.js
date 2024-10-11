import { redirect } from "next/navigation";
import SubmitForm from "./submit-form";
import Link from "next/link";

export default async function Page() {
  let cleanedCourses = [];
  // const trained_requirements = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_URL}/course/janitor/enrollment-requirements`,
  //   {
  //     headers: {
  //       "x-api-key": process.env.API_KEY,
  //     },
  //     cache: "no-cache",
  //   }
  // ).then((res) => res.json());

  // const courses = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/course`, {
  //   headers: {
  //     "x-api-key": process.env.API_KEY,
  //   },
  //   cache: "no-cache",
  // }).then((res) => res.json());

  // cleanedCourses = courses.filter((course) => {
  //   return !trained_requirements.some((trained) => {
  //     return trained.preformatted === course.enrollment_requirements;
  //   });
  // });
  // const current =
  //   cleanedCourses[Math.floor(Math.random() * cleanedCourses.length)]
  //     .enrollment_requirements;

  // const llm_prediction = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_URL}/course/janitor/enrollment-requirements/inference`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "x-api-key": process.env.API_KEY,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       preformatted: current,
  //     }),
  //   }
  // ).then((res) => res.json());

  async function submitHandler(preformatted, formatted, password) {
    "use server";
    if (password !== process.env.ENROLLMENT_REQUIREMENTS_FORMAT_PASSWORD) {
      console.log("malicious user entered malicious password.");
      return;
    }
    await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/course/janitor/enrollment-requirements`,
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preformatted,
          formatted,
        }),
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        redirect("/course-enrollment-requirements");
      });
    redirect("/course-enrollment-requirements");
  }

  return (
    <div className="p-2">
      <h1 className="font-semibold">Course Enrollment Requirements</h1>

      <p className="mt-2">
        Please format this text if you have been given a valid password. Please
        ensure that the formatted version is correct when you submit. If you
        make an error, please contact the system administrator at{" "}
        <a
          href="mailto:tanmai@gradsteps.com"
          className="text-blue-500 underline"
        >
          tanmai@gradsteps.com
        </a>
        . If you don&apos;t know how to format, please visit the{" "}
        <Link
          href="/course-enrollment-requirements/instructions"
          className="text-blue-500 underline"
        >
          instructions here
        </Link>
        .
      </p>
      {/* Choose a random one out of cleaned courses */}

      <SubmitForm
        submitHandler={submitHandler}
        preformatted={"Sample preformatted text"}
        llm_prediction={"Sample LLM prediction"}
      />
      <p className="mt-4 italic">
        The LLM is thinking this:
        <br />
        {"Sample LLM prediction"}
      </p>
    </div>
  );
}
