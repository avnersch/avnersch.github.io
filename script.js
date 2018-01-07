import animate from "./animateplus.js";

const path = document.querySelector("path");
const length = path.getTotalLength();

Object.assign(path.style, {
  "stroke": "#616AFF",
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