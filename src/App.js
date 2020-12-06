import React, { Fragment } from "react";
// import NavigationBar from "./components/NavBar/NavigationBar";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Fragment>
      {/* <header>
        <NavigationBar />
      </header> */}
      <section data-section="bio">
        <div>
          <Hero />
        </div>
      </section>
    </Fragment>
  );
};

export default App;
