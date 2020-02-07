export default {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: ['#ffa726', '#607d8b', '#fb8c00']
    },
    shape: {
      type: ['polygon', 'edge', 'circle'],
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 12,
        size_min: 0.25,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: ['bubble', 'repulse']
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 300,
        size: 20,
        duration: 0.2,
        opacity: 0.3,
        speed: 3
      },
      repulse: {
        distance: 75,
        duration: 0.2
      },
      push: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
