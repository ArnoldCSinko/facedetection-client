const particleOptions = {
  fps_limit: 60,
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 100
      }
    },
    color: {
      value: "#ffff4d"
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#002080",
      opacity: 0.3,
      width: 1
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.2,
        sync: false
      }
    }
  }
};

export default particleOptions;
