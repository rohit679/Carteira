import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 1000,
            density: {
              enable: true,
              value_area: 2500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "left",
            speed: 1,
          },
          size: {
            value: 1.2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
