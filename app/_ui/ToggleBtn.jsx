import React from "react";

function ToggleBtn() {
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
          //   checked={isDarkMode}
          className="sr-only"
          //   onChange={() => dispatch(themeToggle())}
        />

        <div className="relative translate-x-2 w-6 h-6 rounded-full bg-black transition-all ease-linear  duration-600"></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
// className={`${
//     isDarkMode
//       ? "relative translate-x-2 w-[15px] h-[15px] rounded-full bg-white transition-all ease-linear  duration-600"
//       : "relative -translate-x-2 h-[15px] w-[15px] rounded-full bg-white  transition-all ease-linear duration-600"
//   }`}
