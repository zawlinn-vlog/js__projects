"use strict";

$(document).ready(function () {
  function init() {
    $(".navbars-items").css({
      "--height": "100%",
      "--top": "0",
      "--b-color": "transparent",
      "--bg-color": "#bcbcbc",
    });
  }

  function changeElStyle(index) {
    $($(".navbars-items").get(index)).css({
      "--height": "calc(100% + 2rem)",
      "--top": "-2rem",
      "--b-color": "#cdcdcd",
      "--bg-color": "#fdfdfd",
    });
  }

  $(".navbars-items").on("click", function () {
    // console.log(this);

    const id = $(this).data("id");
    console.log(id);

    displayFun(id);

    // changeElStyle(id);÷
  });

  function activeElement(index) {
    $(".tabs-items").hide();

    $(`.tabs-items__${index}`).show();
  }

  function displayFun(index = 0) {
    init();
    activeElement(index);
    changeElStyle(index);
  }

  displayFun();
});
