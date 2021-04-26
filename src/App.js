// Styles imports
import "./App.css";

// Package import
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Component imports
import Navbar from "./components/Navbar";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/stack" component={Stack} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
