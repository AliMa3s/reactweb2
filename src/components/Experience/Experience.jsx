import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>jaar </span>
        <span>Ervaring</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          10+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}> gemaakte </span>
        <span>Projecten</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          3+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}> bedrijven </span>
        <span>Gewerkt</span>
      </div>
    </div>
  );
};

export default Experience;
