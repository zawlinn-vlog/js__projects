"use strict";

$(document).ready(function () {
  let slideTo = 0;

  const allDots = document.querySelectorAll(".dots-items");

  function slide(count) {
    $(".carousel-item").each((ind, el) => {
      $(el).css({
        left: `${(ind - count) * 100}%`,
      });
    });
  }

  slide(slideTo);

  function clearDots() {
    $(".dots-items").each((el) => {
      el.removeClass("dots-active");
    });
  }

  // Click Arrow Right

  $(".arrow-right").on("click", function () {
    if (slideTo < 2) {
      slideTo++;

      slide(slideTo);

      console.log(slideTo);

      clearDots();

      allDots[slideTo].addClass("dots-active");
    } else {
      slideTo = 0;

      slide(slideTo);
      console.log(slideTo);
    }
  });

  // Click Arrow Left
  $(".arrow-left").on("click", function () {
    if (slideTo >= 1) {
      slideTo--;
      slide(slideTo);
      console.log(slideTo);
    } else {
      slideTo = 2;

      slide(slideTo);
    }
  });
});
