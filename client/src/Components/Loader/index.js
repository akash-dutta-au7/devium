import React from "react";
// import "./index.css";
// const Loader = () => {
//   return (
//     <div
//       className="loader"
//       style={{ width: "200px", margin: "auto", display: "block" }}
//     ></div>
//   );
// };

import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  //other logic
  return (
    <LoaderSpinner
      type="Bars"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};
export default Loader;
