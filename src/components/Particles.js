import React, { Component } from 'react'
import Particles from "react-tsparticles"; // Using react-tsparticles as react-particles is not compatible with React17

     // Used a predifined particle, with custome modification, from react-tsparticles package

        export default class Particle extends Component {
          constructor(props) {
            super(props);

            this.particlesInit = this.particlesInit.bind(this);
            this.particlesLoaded = this.particlesLoaded.bind(this);
          }

          particlesInit(main) {
            console.log(main);
          }

          particlesLoaded(container) {
            console.log(container);
          }

          render() {
            return (
              <Particles
                id="tsparticles"
                init={this.particlesInit}
                loaded={this.particlesLoaded}
                options={{
                  background: {
                    color: {
                      value: "#364049",
                    },
                  },
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 2,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />
            );
          }
        }




