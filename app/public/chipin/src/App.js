import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import SearchEvents from "./pages/SearchEvents.js";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/SearchEvents" component={SearchEvents} />
    </div>
  </Router>
);

export default App;
