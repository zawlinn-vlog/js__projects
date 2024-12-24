"use strict";

$(document).ready(function () {
  let slideTo = 0;

  const allDots = document.querySelectorAll(".dots-items");

  function slide(count) {
    $(".carousel-items").each((ind, el) => {
      $(el).css({
        left: `${(ind - count) * 100}%`,
      });
    });
  }

  slide(slideTo);

  function clearDots() {
    $(".dots-items").each((ind, el) => {
      $(el).removeClass("dots-active");
    });
  }

  // Click Arrow Right

  $(".arrow-right").on("click", function () {
    clearDots();

    if (slideTo < 2) {
      slideTo++;

      slide(slideTo);

      console.log(slideTo);

      $(allDots[slideTo]).addClass("dots-active");
    } else {
      slideTo = 0;

      slide(slideTo);
      //   console.log(slideTo);
      $(allDots[slideTo]).addClass("dots-active");
    }
  });

  // Click Arrow Left
  $(".arrow-left").on("click", function () {
    clearDots();

    if (slideTo >= 1) {
      slideTo--;
      slide(slideTo);
      //   console.log(slideTo);
      $(allDots[slideTo]).addClass("dots-active");
    } else {
      slideTo = 2;

      slide(slideTo);
      $(allDots[slideTo]).addClass("dots-active");
    }
  });

  // CLICK DOTS

  $(".dots-items").each((ind, el) => {
    $(el).on("click", function () {
      slideTo = $(this).data("slide__num");
      slide(slideTo);
      clearDots();
      $(allDots[slideTo]).addClass("dots-active");
    });
  });
});
