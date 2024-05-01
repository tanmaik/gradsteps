import { useState } from "react";

export default function HeroText() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center text-center mt-10">
      <div>
        <button className="rounded-full px-3 py-1 bg-gradient-to-r font-normal text-sm from-blue-400 to-blue-500 text-white">
          Private beta
        </button>
        <h1 className="text-6xl tracking-tighter font-medium mt-4">
          The smartest tool for <br /> academic exploration.
        </h1>
        <p className="mt-4">
          Reimagine the way students plan their <br />
          degree and supercharge their outcomes.
        </p>

        <div className="flex justify-center mt-4">
          <div className="flex justify-between items-center gap-4 rounded-full border py-[1px] pl-4 pr-[1px]">
            <input
              type="email"
              placeholder="Email"
              className="outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h1
              className="py-2 bg-black cursor-pointer text-white rounded-full px-4"
              onClick={() => {
                setEmail("");
              }}
            >
              Stay Updated
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
