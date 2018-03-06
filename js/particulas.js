/* config dom id (optional) + config particles params */
particlesJS('particle-canvas', {
  particles: {
    color: '#f68',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 3.5,
    size_random: true,
    nb: 130,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fe9',
      opacity: 1,
      width: 0.7,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 3
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
