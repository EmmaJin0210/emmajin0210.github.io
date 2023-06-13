import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import resumeData from "./components/resumeData";


function App() {
  return (
    <>
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Projects resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </>
  );
}

export default App;
