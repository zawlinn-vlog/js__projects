"use strict";

const headers = document.querySelectorAll(".accordion-headers");
const bodys = document.querySelectorAll(".accordion-bodys");

function clearClass() {
  headers.forEach((el) => el.classList.remove("active"));
  bodys.forEach((el) => {
    el.style.height = 0;
    el.style.padding = 0;
  });
}

headers.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(this.nextElementSibling);

    clearClass();

    this.classList.add("active");

    // console.log(this.nextElementSibling.scrollHeight);
    // console.log(this.nextElementSibling.offsetHeight);

    this.nextElementSibling.style.padding = ".3rem 1rem 2rem";
    this.nextElementSibling.style.height =
      this.nextElementSibling.scrollHeight + 30 + "px";

    // this.nextElementSibling.classList.add("bg-light");
  });
});
