import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2,text3,text4,text5,text6,text7}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
        <br />
        {text3}
        <br />
        {text4}
        <br />
        {text5}
        <br />
        {text6}
      </span>
    </div>
  );
};

export default FloatinDiv;
