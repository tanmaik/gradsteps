"use client";

import { useState } from "react";
export default function SubmitForm({
  preformatted,
  submitHandler,
  llm_prediction,
}) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  return (
    <>
      {!loading ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await submitHandler(preformatted, value, password);
            setValue("");
            setLoading(false);
          }}
        >
          <p className="mt-4">{preformatted}</p>

          <input
            type="text"
            name="formatted"
            className="border mt-2 w-full "
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            type="password"
            className="border mt-1 "
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <imput type="submit" className="hidden" />

          <button type="submit" className="border mt-1 ">
            Submit
          </button>
        </form>
      ) : (
        <p>Submitting your answer...</p>
      )}
      <button
        className="border mt-1"
        onClick={() => {
          setValue(llm_prediction);
        }}
      >
        Use LLM&apos;s prediction
      </button>
    </>
  );
}
