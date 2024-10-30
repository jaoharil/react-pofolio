import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particelsInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particelsLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particelsInit}
      loaded={particelsLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circel',
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
          detectRetina: true,
        },
      }}
      // objeck={{
      //   autoPlay: true,
      //   backgrround: {
      //     color: {
      //       value: '#0d47a1',
      //     },
      //   },
      //   backgroundMask: {
      //     composite: destination - out,
      //     cover: {
      //       color: {
      //         value: '#fff',
      //       },
      //       opacity: 1,
      //     },
      //     enable: false,
      //   },
      //   clear: true,
      //   defaultThemes: {},
      //   delay: 0.4,
      //   fullScreen: {
      //     enable: true,
      //     zIndex: 0,
      //   },
      //   detectRetina: true,
      //   duration: 0,
      //   fpsLimit: 120,
      //   interactivity: {
      //     detectsOn: window,
      //     events: {
      //       onClick: {
      //         enable: true,
      //         mode: push,
      //       },
      //       onDiv: {
      //         // selectors:
      //         enable: false,
      //         mode: push,
      //         type: circle,
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: grab,
      //         parallax: {
      //           enable: true,
      //           force: 60,
      //           smooth: 10,
      //         },
      //       },
      //       resize: {
      //         delay: 0.5,
      //         enable: true,
      //       },
      //     },
      //     modes: {
      //       trail: {
      //         delay: 1,
      //         pauseOnStop: false,
      //         quantity: 1,
      //       },
      //       attract: {
      //         distance: 200,
      //         duration: 0.4,
      //         easing: ease - out - quad,
      //         factor: 1,
      //         maxSpeed: 50,
      //         speed: 1,
      //       },
      //       bounce: {
      //         distance: 200,
      //       },
      //       bubble: {
      //         distance: 400,
      //         duration: 2,
      //         mix: false,
      //         opacity: 0.8,
      //         size: 40,
      //         divs: {
      //           distance: 200,
      //           duration: 0.4,
      //           mix: false,
      //           // selectors:
      //         },
      //       },
      //       connect: {
      //         distance: 80,
      //         links: {
      //           opacity: 0.5,
      //         },
      //         radius: 60,
      //       },
      //       grab: {
      //         distance: 400,
      //         links: {
      //           blink: false,
      //           consent: false,
      //           opacity: 1,
      //         },
      //       },
      //       push: {
      //         default: true,
      //         // groups{}
      //         quantity: 4,
      //       },
      //       remove: {
      //         quantity: 2,
      //       },
      //       repulse: {
      //         distance: 200,
      //         duration: 0.4,
      //         factor: 100,
      //         speed: 1,
      //         maxSpeed: 50,
      //         easing: ease - out - quad,
      //         divs: {
      //           distance: 200,
      //           duration: 0.4,
      //           factor: 100,
      //           speed: 1,
      //           maxSpeed: 50,
      //           easing: ease - out - quad,
      //           // selectors		:{}
      //         },
      //       },
      //       slow: {
      //         factor: 3,
      //         radius: 200,
      //       },
      //       light: {
      //         area: {
      //           gradient: {
      //             start: {
      //               value: '#ffffff',
      //             },
      //             stop: {
      //               value: '#000000',
      //             },
      //           },
      //           radius: 1000,
      //         },
      //         shadow: {
      //           color: {
      //             value: '#000000',
      //           },
      //           length: 2000,
      //         },
      //       },
      //     },
      //   },
      //   // manualParticles:{}
      //   particles: {
      //     bounce: {
      //       horizontal: {
      //         value: 1,
      //       },
      //       vertical: {
      //         value: 1,
      //       },
      //     },
      //     collisions: {
      //       absorb: {
      //         speed: 2,
      //       },
      //       bounce: {
      //         horizontal: {
      //           value: 1,
      //         },
      //       },
      //     },
      //   },
      // }}
    />
  );
};

export default ParticlesContainer;
