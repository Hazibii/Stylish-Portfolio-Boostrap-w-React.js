import React, { Component } from 'react';
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Callout from "./components/callout";
import Portfolio from "./components/portfolio";
import CallToAction from "./components/callToAction";
import Map from "./components/map";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar /> 
        <Header />
        <About />
        <Services />
        <Callout/>
        <Portfolio />
        <CallToAction />
        <Map />
        <Footer/>
        <ScrollToTop /> 
      </div>
    );
  }
}

export default App;