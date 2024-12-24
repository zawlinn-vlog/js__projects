"use strict";
console.log("hello");

$(document).ready(function () {
  let count = 0;
  let startPoint = 5;

  $("#start-btn").on("click", function () {
    console.log("click");
    const startCounting = setInterval(() => {
      count++;

      //   console.log(count);

      $(".progress-bar").css({
        width: `${count}%`,
      });

      if (count == 100) clearInterval(startCounting);
    }, 25);
  });

  function init(point) {
    $(".box").text(point);
    $("#download-link").attr("disabled", true);
  }

  init(startPoint);

  $("#download-btn").on("click", function () {
    const startDeducing = setInterval(() => {
      startPoint--;

      console.log(startPoint);

      init(startPoint);

      if (startPoint == 0) {
        clearInterval(startDeducing);
        $(this).attr("disabled", true);
        $("#download-link").attr("disabled", false);
      }
    }, 1000);
  });
});
