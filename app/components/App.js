import React, { Component } from 'react';
import ReactRouter, { Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import QuadGrid from './Quad';

class App extends React.Component {
  render() {
    var nums = [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2];

    // var nums = [
    //   {2 : "Rant & Chant"},
    //   {1 : "RWDevConf - Onboarding"},
    //   {1 : "The UX of Search 1"},
    //   {1 : "The UX of Search 2"},
    //   {1 : "Framer JS"},
    //   {1 : "Georgia Typography"},
    //   {1 : "ITP Camp"},
    //   {1 : "#100DaysOfCodeArt"},
    //   {1 : "Presevent"},
    //   {2 : "WWDC 2015"},
    //   {1 : "Grinnell AppDev"},
    //   {1 : "Computing for Social Good"},
    //   {1 : "Delta NYC"},
    //   {1 : "WWDC 2014"},
    //   {1 : "SIGCSE 2013"},
    //   {1 : "Spomin"},
    //   {1 : "Digital Media Clips"},
    //   {1 : "Screen Printing Stuff"},
    //   {2 : "Drawing"},
    //   {1 : "Lion"},
    //   {1 : "Neopets"},
    //   {2 : "Typography"},
    //   {2 : "BuzzFeed"}
    // ];

    return (
      <div className='container'>
        <Nav />
        <QuadGrid
          quads= {nums} />
      </div>
    )
  }
}

module.exports = App;
