import React, { Fragment, useRef } from "react";
// import NavigationBar from "./components/NavBar/NavigationBar";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";

const App = () => {
  const myRef = useRef();

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      {/* <header>
        <NavigationBar />
      </header> */}
      <section data-section="bio">
        <div>
          <Hero myref={scroll} />
        </div>
      </section>
      <section ref={myRef} data-section="about-me">
        <About />
      </section>
    </Fragment>
  );
};

export default App;
