import React, { useContext } from "react";
import "./Works.css";
import hevadex from "../../img/hevadex.png";
import innoceal from "../../img/innoceal.png";
import Avanade from "../../img/Avanade.png";
import cvo from "../../img/cvo.png";
import hogent from "../../img/hogent.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Mijn Ervaring</span>
          <span>School & Bedrijven</span>
          <spane>
            Ik heb in Hogent Graduaat programmeren gestudeerd. <br/>
            
            Ik heb mijn stage gedaan bij Avanade als Software Engineer
            <br />
            Hier moesten we met technologieën zoals
            <br /> (Azure, Azure DevOps, .Net 6, React met Typscript) werken.
            <br />
            Api was gemaakt in .Net 6 met Entity-Framework. <br />
            De front-end was gemaakt met React + typescript extensies.
            <br />
            Voor meer info kan u mijn andere website/Cv raadplegen
            <br />
            <a
              href="https://alima3s.github.io/"
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <h3>Website</h3>
            </a>
          </spane>
          <Link to="#" smooth={true} spy={true}>
            <button
              className="button s-button"
              onClick={() => (window.location = "mailto:ali.maes@outlook.com")}
            >
              Hire Me
            </button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={innoceal} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Avanade} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={hogent} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={cvo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={hevadex} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
