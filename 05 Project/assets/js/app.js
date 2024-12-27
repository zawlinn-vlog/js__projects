"use strict";

$(document).ready(function () {
  function checkClass(e, str) {
    return e.target.classList.contains(str);
  }
  $("body").on("click", function (e) {
    console.log(checkClass(e, "signin-btn"));

    if (checkClass(e, "signin-btn") || checkClass(e, "register-btn")) {
      $(".modals").addClass("active");
    }

    if (checkClass(e, "modals-shadow")) {
      $(".modals").removeClass("active");
    }
  });

  $(window).on("keyup", function (e) {
    if (e.code == "Escape") $(".modals").removeClass("active");
  });
});
