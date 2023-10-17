import React from "react";
import { Route, Switch } from "react-router-dom";
import Introduction from "./home/Introduction";
import Header from "./home/Header";
import Footer from "./home/Footer";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./App.css";

function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path="/">
      <Introduction />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
