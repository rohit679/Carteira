import React from "react";
import Typewriter from "typewriter-effect";

const Type = ({ data }) => {
  return (
    <Typewriter
      options={{
        skipAddStyles: false,
        strings: data,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
