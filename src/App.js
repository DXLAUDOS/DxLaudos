import React from "react";
import "./App.scss";

import AboutUs from "./containers/about-us";
import Header from "./containers/header";
import Portfolio from "./containers/portfolio";
import Presentation from "./containers/presentation";
import UsServices from "./containers/us-services";
import ContactUs from "./containers/contact-us";
import Footer from "./containers/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <AboutUs />
      <UsServices />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
