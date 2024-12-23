"use strict";

const progressBar = document.querySelector(".progress-gTr");

function greenToRed(step) {
  // Assuming a maximum step value of 255

  let red = Math.floor((step * 255) / 255); // Red value increases with step

  let green = 255 - Math.floor((step * 255) / 255); // Green value decreases with step

  let blue = 0; // Blue remains constant

  return `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("scroll", function () {
  //   console.log(this.document.documentElement);
  const scrollLen = document.documentElement.scrollTop;
  const scrollH = document.documentElement.scrollHeight;
  const clientH = document.documentElement.clientHeight;

  const height = scrollH - clientH;

  const width = (scrollLen / height) * 100;

  const colors = Math.round(width * 2.55);

  console.log(colors);

  progressBar.style.width = width.toFixed(2) + "%";
  progressBar.style.backgroundColor = greenToRed(colors);

  //   console.log(scrollLen, scrollH, clientH, height, width.toFixed(2));
});

const printBtn = document.querySelector("#printBtn");

console.log(printBtn);

printBtn.addEventListener("click", function () {
  window.print();
});
