import React, { useContext } from "react";
import "./tools.css";
import Html from "../../tools-icons/html.svg";
import Css from "../../tools-icons/css.svg"
import js from "../../tools-icons/js.svg"
import { ThemeContext } from "../../context/Context";

const Tools = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="tools-icons"
      style={{ backgroundColor: darkMode && "#333" }}
    >
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
