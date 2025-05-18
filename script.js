document.addEventListener('DOMContentLoaded', () => {
  // Initialize Particles.js
  if (document.getElementById('particles-js')) {
      particlesJS("particles-js", {
          "particles": {
              "number": {
                  "value": 60, // Fewer particles for less distraction
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  // Use a color from your CSS variables.
                  // Note: getComputedStyle might be slow if called excessively.
                  // For performance, you could hardcode a fallback or set this in JS directly.
                  "value": getComputedStyle(document.documentElement).getPropertyValue('--neutral-medium').trim() || "#7f8c8d"
              },
              "shape": {
                  "type": "circle",
              },
              "opacity": {
                  "value": 0.9,
                  "random": true,
              },
              "size": {
                  "value": 2,
                  "random": true,
              },
              "line_linked": {
                  "enable": true,
                  "distance": 130,
                  "color": getComputedStyle(document.documentElement).getPropertyValue('--neutral-medium').trim() || "#7f8c8d",
                  "opacity": 0.3,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 1.5, // Slower speed
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab" // "repulse" can be too distracting
                  },
                  "onclick": {
                      "enable": false, // Keep clicks for UI elements
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": { "distance": 100, "line_linked": { "opacity": 0.7 } },
                  "bubble": { "distance": 200, "size": 20, "duration": 2, "opacity": 8, "speed": 3 },
                  "repulse": { "distance": 100, "duration": 0.4 },
                  "push": { "particles_nb": 4 },
                  "remove": { "particles_nb": 2 }
              }
          },
          "retina_detect": true
      });
    }

  // Initialize Feature Modules
   // Even if it's just a placeholder for now

  console.log("Educational Hub Initialized!");
});