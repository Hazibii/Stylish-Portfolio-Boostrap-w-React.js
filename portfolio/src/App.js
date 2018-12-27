import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';


// import About from './Components/About';
// import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';
// import Testimonials from './Components/Testimonials';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        {/* 
        <Download />
        <Services/>
        <Cta />
        <Portfolio/>
        <Cta-2/>
        <Map/>
        <Footer/> */}
      </div>
    );
  }
}
export default App;
