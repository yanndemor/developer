import React from 'react';
// import local
import Particles from 'react-tsparticles';
import reactLogo from 'src/components/App/react-logo.svg';
// == Import

import './header.scss';

// == Composant
const Header = () => {
  const randomColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;
  return (
    <div className="header">

      <div className="container-fluid">
        <img className="image-react" src={reactLogo} alt="react logo" />

        <h1 className="title-header">Web Developer Specialized In REACT</h1>

      </div>

      <Particles
        id="tsparticles"
        options={{

          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 10,
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
              value: 'rgb(232,42,225)',

            },
            links: {
              color: 'rgb(42,225,232)',
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
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

;

// == Export
export default Header;
