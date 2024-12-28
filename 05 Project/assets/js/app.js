"use strict";

$(document).ready(function () {
  function checkClass(e, str) {
    return e.target.classList.contains(str);
  }
  $("body").on("click", function (e) {
    // console.log(checkClass(e, "signin-btn"));

    if ($(e.target).data("id")) {
      $(".modals").addClass("active");

      const parent = $(e.target).data("id");

      // console.log(parent);

      $(".modals-items").each((ind, el) => {
        $(el).removeClass("active");
      });

      console.log(parent);

      $(`#${parent}`).addClass("active");
    }

    if (checkClass(e, "modals-shadow")) {
      $(".modals").removeClass("active");
    }
  });

  $(window).on("keyup", function (e) {
    if (e.code == "Escape") $(".modals").removeClass("active");
  });
});
