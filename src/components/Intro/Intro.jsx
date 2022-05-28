import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hoi! Ik ben</span>
          <span>Maes Ali</span>
          <span>
            Developer met primaire focus op .Net, Java en Webdevelopment
            Gepassioneerd door .Net, Java, JavaScript en Webdevelopment en
            momenteel Student bij HoGent.
          </span>
        </div>
        <Link to="#" smooth={true} spy={true}>
          <button
            className="button i-button"
            onClick={() => (window.location = "mailto:ali.maes@outlook.com")}
          >
            Hire me
          </button>
          <br />
          <br />
          <button
            className="button i-button"
            target="_blank"
            onClick={() => window.open("https://alima3s.github.io/", "_blank")}
          >
            website
          </button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://github.com/AliMa3s?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-maes/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img={crown}
            text1="C#.Net"
            text2="Java"
            text3="React"
            text4="React~Native"
            text5="TypeScript"
          />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv has the */}
          <FloatinDiv
            img={thumbup}
            text1="Azure"
            text2="Java Script"
            text3="SQL"
            text4="Azure DevOps"
            text5="Python"
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
