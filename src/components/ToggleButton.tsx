import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

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
          className="cursor-pointer text-2xl dark:text-white"
        ></BsFillMoonStarsFill>
      ) : (
        <BsSunFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl dark:text-yellow-500"
        ></BsSunFill>
      )}
    </div>
  );
};

export default ToggleButton;
