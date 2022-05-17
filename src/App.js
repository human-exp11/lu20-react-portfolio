import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/nav/index.js";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Wrapper from "./components/wrapper/index";
import About from "./pages/About";
import ResumePage from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {
    return (
      <HashRouter basename="/">
        <div>
          <Header />
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </HashRouter>
    );
  }


export default App;
