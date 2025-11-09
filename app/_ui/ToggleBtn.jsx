import React from "react";

function ToggleBtn({ isYearly, setIsYearly }) {
  return (
    <div>
      <label
        htmlFor="check"
        className="inline-flex w-16 h-8 items-center justify-center rounded-full bg-black/40 cursor-pointer "
      >
        <input
          type="checkbox"
          id="check"
          name="check"
          checked={isYearly}
          className="sr-only"
          onChange={() => setIsYearly(!isYearly)}
          // onChange={() => setIsYearly((isYearly) => !isYearly)}
        />

        <div
          className={`${
            isYearly
              ? "relative translate-x-4 w-7 h-7  rounded-full bg-black transition-all ease-linear  duration-300 hover:bg-white"
              : "relative -translate-x-4 w-7 h-7 rounded-full bg-black transition-all ease-linear  duration-300 hover:bg-white"
          }`}
        ></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
