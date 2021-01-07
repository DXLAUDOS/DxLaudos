import React, { useEffect } from "react";
import "./App.scss";

import AboutUs from "./containers/about-us";
import Header from "./containers/header";
import Presentation from "./containers/presentation";
import UsServices from "./containers/us-services";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      <Presentation />
      <AboutUs />
      <UsServices />
    </div>
  );
}

export default App;
