import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import background1 from './img/computer.png'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{background: darkMode? 'black': '', 
      backgroundImage: darkMode? `linear-gradient(180deg, #0000008c 0%, #0000008c 100%) , url(${background1})`: '', 
      color : darkMode? "white":'',
      backgroundSize: darkMode? "cover":'',
      backgroundAttachment: darkMode? "fixed":''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />

      {/*      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"*/}
    </div>
  );
}

export default App;
