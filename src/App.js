import React, { Fragment, useRef } from "react";
// import NavigationBar from "./components/NavBar/NavigationBar";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Resume from "./components/Resume/Resume";

const App = () => {
  // const myRef = useRef();

  // const scroll = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Fragment>
      {/* <header>
        <NavigationBar />
      </header> */}
      <section id="home" data-section="bio">
        <div>
          <Hero />
        </div>
      </section>
      <section id="about" data-section="about-me">
        <About />
      </section>
      <section id="resume" data-section="resume">
        <Resume />
      </section>
      <section id="contact" data-section="contact">
        <Contact />
      </section>
    </Fragment>
  );
};

export default App;
