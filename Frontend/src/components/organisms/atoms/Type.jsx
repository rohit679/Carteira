import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        skipAddStyles: false,
        strings: [
          "MERN Stack Developer @AdGlobal360",
          "3+ Years of Industry Experience",
          "Open Source Contributor",
          "3 Star LeetCode"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
