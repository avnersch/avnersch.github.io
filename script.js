import animate from "./animateplus.js";

const paths = document.querySelectorAll("path");
paths.forEach(path => {
  const length = path.getTotalLength();
  Object.assign(path.style, {
    "stroke": "#3D90D5",
    "stroke-width": 10,
    "stroke-dasharray": length
  });
  animate({
    elements: path,
    easing: "in-out-quartic",
    duration: 5000,
    loop: true,
    direction: "alternate",
    "stroke-dashoffset": [length, 0]
  });
})