"use strict";

const headers = document.querySelectorAll(".accordion-headers");
const bodys = document.querySelectorAll(".accordion-bodys");

/* CLEAR CLASS */

function clearClass() {
  headers.forEach((el) => el.classList.remove("active", "bg-primary"));
  bodys.forEach((el) => {
    el.style.height = null;
    el.style.padding = 0;
  });
}

/* ACTIVE HEIGHT FUN */

function activeHeight(el) {
  el.classList.add("active", "bg-primary");

  el.nextElementSibling.style.height =
    el.nextElementSibling.scrollHeight + "px";
}

/* INITIATE  */

function init() {
  activeHeight(headers[0]);
}

init();

/* ADD EVENT LISTENER */

headers.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(this.nextElementSibling);
    console.log(this.nextElementSibling.style.height);

    if (!this.nextElementSibling.style.height) {
      clearClass();

      activeHeight(this);
    }
  });
});
