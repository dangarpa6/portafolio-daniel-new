import React, { useContext } from "react";
import "./Intro.css";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import glassesimoji from "../../img/glassesimoji.png";
import Blobs from "../Blobs/Blobs";


const Intro = () => {
  // Transition
  const transition = { duration: 1, type: "none" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Developer</span>
          <span style={{ color: darkMode ? "white" : "" }}>
          Passionate about web programming, knowledge in graphic design, advertising and animation which allows me takes apps and websites construction to the next level, don't hesitate in contact me.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}

        <div className='i-icons'
        style={{ 
        color : darkMode? "white":'',
        }}
        >
          <a href="https://github.com/dangarpa6">
            <FaGithub className='git'
                  style={{ 
                    color : darkMode? "lightgray":'',
                    }} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-garcia-2b1636231/">
            <FaLinkedin className='linkin' 
                  style={{ 
                    color : darkMode? "lightgray":'',
                    }}/>
          </a>
        </div>

      
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <Blobs className= "3"/>
        <img src={Vector2} alt="" />
        {/* animation */}
       
       
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji }
          alt=""
        />

<motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
          className="crown"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9%", top: "45%" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="thumbup"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
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