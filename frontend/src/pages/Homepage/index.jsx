import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './features';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Contact from './contact';

export default function Homepage(){

    return (
      <div>
        <Navigation />
        <Header  />
        <Features />
        <About/>
        <Services/>
        <Gallery/>
        <Contact/>
      </div>
    )
}
