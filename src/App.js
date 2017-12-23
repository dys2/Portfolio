import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Header from './Header';
import TitleBar from './TitleBar';
import About from './About';
import Animation from './Animation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import logo from './logo.svg'; 
import Particles from 'react-particles-js';


class App extends Component {
  constructor() {
    super();
    this.findAbout = this.findAbout.bind(this);
    this.findPortfolio = this.findPortfolio.bind(this);
  }

  findAbout() {
    return findDOMNode(this.refs['About']).getClientRects();
  }
  findPortfolio() {
    return findDOMNode(this.refs['Portfolio']).getClientRects();
  }
  render() {
    return (
      <div className="App" >
        <div className="background" > 
        </div>
        <Particles 
          params={{
            particles: {
              number: {
                value: 6,
                density: {
                enable: true,
                value_area: 800
              }
            },
            size: {
              value: 2,
              random: true
            },
            opacity: {
              value: .5,
              random: true
            },
            color: {
              value: "#000000",
            },
            line_linked: {
              shadow: {
                enable: false,
                color: "#4320a0",
                blur: 5
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 400,
                size: 4,
                duration: 2,
                opacity: 1,
                speed: 0.3
              },
              repulse: {
                distance: 200
              }
            }
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}/>  
                            <Particles params={{
                                particles: {
                                    number: {
                                        value: 6,
                                        density: {
                                          enable: true,
                                          value_area: 800
                                        }
                                    },
                                    size: {
                                      value: 2,
                                      random: true
                                    },
                                    opacity: {
                                      value: .5,
                                      random: true
                                    },
                                    color: {
                                      value: "#4320a0",
                                    },
                                    line_linked: {
                                        shadow: {
                                            enable: false,
                                            color: "#4320a0",
                                            blur: 5
                                        }
                                    }
                                },
                                interactivity: {
                                  detect_on: "window",
                                  events: {
                                    onhover: {
                                      enable: true,
                                      mode: "bubble"
                                    },
                                    onclick: {
                                      enable: true,
                                      mode: "repulse"
                                    }
                                  },
                                  modes: {
                                    bubble: {
                                      distance: 400,
                                      size: 4,
                                      duration: 2,
                                      opacity: 1,
                                      speed: 0.3
                                    },
                                    repulse: {
                                      distance: 200
                                    }
                                  }
                                }
                            }}
              style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}/>  
        <Header />
        <TitleBar findAbout={this.findAbout} findPortfolio={this.findPortfolio} />
        <div className="main-content">
           
        <About ref="About"/>
        <Animation />
        <Portfolio ref="Portfolio"/>
        <Contact ref="Contact"/>
        </div>
        
      </div>
    );
  }
}

export default App;
