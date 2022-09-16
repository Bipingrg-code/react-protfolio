import React from "react";
import "./tools.css";
import Html from "../../tools-icons/html.svg";

const Tools = () => {
  return (
    <div className="tools-icons">
      <h1 className="tools-icon-title">Technology I Used.</h1>
      <h3 className="tools-icons-disc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, ea?
      </h3>
     <div className="tools-img">
     <div className="tools-icons-img">
        <img src={Html} className="icons" alt="" srcset="" />
      </div>
      <div className="tools-icons-img">
        <img src={Html} className="icons" alt="" srcset="" />
      </div>
      <div className="tools-icons-img">
        <img src={Html} className="icons" alt="" srcset="" />
      </div>
     </div>
    </div>
  );
};

export default Tools;
