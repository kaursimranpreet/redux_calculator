//import { Textfit } from "react-textfit";
import "./Screen.css";

import React from "react";

const Screen = ({ value }) => {
  return (
    // <Textfit className="screen" mode="single" max={70}>
    //   {value}
    // </Textfit>
     <button className="screen">
     {value}
   </button>
  );
};

export default Screen;