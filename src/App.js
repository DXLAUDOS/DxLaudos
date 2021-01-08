import React, { useEffect } from "react";
import "./App.scss";

import AboutUs from "./containers/about-us";
import Header from "./containers/header";
import Portfolio from "./containers/portfolio";
import Presentation from "./containers/presentation";
import UsServices from "./containers/us-services";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);
  }, []);
  return (
    <div className="App">
      <Header />
      <Presentation />
      <AboutUs />
      <UsServices />
      <Portfolio />
    </div>
  );
}

export default App;
