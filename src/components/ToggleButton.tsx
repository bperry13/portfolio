"use client";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";

export function ToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="text-black dark:text-white bg-transparent dark:bg-transparent"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {resolvedTheme === "light" ? (
        <BsFillMoonStarsFill className="cursor-pointer text-3xl"></BsFillMoonStarsFill>
      ) : (
        <BsSunFill className="cursor-pointer text-3xl dark:text-yellow-500"></BsSunFill>
      )}
    </button>
  );
}

/*
const ToggleButton = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  return (
    <div>
      {!darkMode ? (
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-3xl dark:text-white"
        ></BsFillMoonStarsFill>
      ) : (
        <BsSunFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-3xl dark:text-yellow-500"
        ></BsSunFill>
      )}
    </div>
  );
};

export default ToggleButton;
*/
