"use strict";

$(document).ready(function () {
  /* */
  function activePopup(e) {
    $(e.target).parents(".navbar-left").addClass("pos-fit");

    $(".popup").addClass("active");
  }

  /* */

  function removePopup(e) {
    $(".navbar-left").removeClass("pos-fit");

    $(".popup").removeClass("active");
  }

  /*  */
  $(document).on("click", function (e) {
    if (e.target.id == "navbar-search") {
      console.log("click");
      activePopup(e);

      return false;
    }

    if (e.target.classList.contains("fa-times")) {
      console.log("close");
      return false;
    }

    removePopup(e);
  });
});
