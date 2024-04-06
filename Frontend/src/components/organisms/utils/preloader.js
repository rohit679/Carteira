import React from "react";
const PreLoader = ({ isLoading }) => {
  return <div id={isLoading ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;