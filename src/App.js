import React from "react";
import { Route, Switch } from "react-router-dom";
import Introduction from "./home/Introduction";
import Header from "./home/Header";
import Footer from "./home/Footer";
import "./App.css";

function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route path="/">
      <Introduction />
      </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
