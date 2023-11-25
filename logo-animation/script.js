import animate from "./animateplus.js";

const paths = document.querySelectorAll("path");
paths.forEach(path => {
  const length = path.getTotalLength();
  const color = path.getAttribute("data-fill");
  Object.assign(path.style, {
    "stroke": color,
    "stroke-width": 10,
    "stroke-dasharray": length
  });
  animate({
    elements: path,
    easing: "in-out-quartic",
    duration: 1500,
    loop: true,
    direction: "alternate",
    "stroke-dashoffset": [length, 0],
    fill: [color, "#fff"]
  });
})