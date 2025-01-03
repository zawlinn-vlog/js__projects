"use strict";

$(document).ready(function () {
  let obj,
    newArr,
    sort = false,
    searching = false,
    count = 1,
    his,
    res;

  /* FETCHING DATA */

  (function fetchData() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(JSON.parse(xhr.responseText));

        obj = JSON.parse(xhr.responseText);
      }
    };

    xhr.open("GET", "./assets/js/data.json");

    xhr.send();
  })();

  /* DISPLAY DATA */

  function createEl(arrObj) {
    // console.log(arrObj);
    document.querySelector(".popup-data").innerHTML = "";
    let html, arr;

    arr = sort
      ? [...arrObj].sort((a, b) => a.name.localeCompare(b.name))
      : arrObj;

    arr.forEach((val, ind) => {
      html = `

          <li
                  class="popup-data__list text-light d-flex align-items-center justify-content-between rounded" data-id="${
                    ind + 1
                  }"
                >
                  <span class="popup-data__name text-capitalize">${
                    val.name
                  }</span>
                  <span class="close">
                    <i class="fas fa-times text-light"></i>
                  </span>
                </li>

          `;

      document
        .querySelector(".popup-data")
        .insertAdjacentHTML("beforeend", html);
    });
  }

  /* ACTIVE POPUP */

  function activePopup(e) {
    $(".navbar-left").addClass("pos-fit");

    $(".popup").addClass("active");
  }

  /* EMPTY Element */
  function emptyEl() {
    if (localStorage.getItem("clickHistory")) {
      his = JSON.parse(localStorage.getItem("clickHistory"));
      // console.log(his);
      createEl(his.reverse());
      return -1;
    }

    his = [];
    sort = false;
    createEl(his);
  }

  /*  REMOVE POPUP */

  function removePopup(e) {
    $(".navbar-left").removeClass("pos-fit");

    $(".popup").removeClass("active");

    $("#navbar-search").val("");
  }

  /* CLICK EVENTs */

  $(document).on("click", function (e) {
    // console.log(e.target);
    if (e.target.id == "navbar-search" || e.target.closest(".popup")) {
      activePopup(e);

      if ($("#navbar-search").val() == "") {
        /* SHOW HISTORY */

        if (localStorage.getItem("clickHistory")) {
          his = JSON.parse(localStorage.getItem("clickHistory"));

          createEl(his.reverse());

          $(".sorting").removeAttr("disabled");
          $(".fa-sort-alpha-up").css({
            color: "#efefef",
          });
        }
      }

      /* SORTING ITEMs */

      if (e.target.closest(".sorting")) {
        console.log("sorting");
        sort = sort ? false : true;
        // console.log(searching);
        res = searching ? newArr : his;

        // console.log(res);

        createEl(res);
      }

      /* SELECT ITEMs */

      if (e.target.closest(".popup-data__list")) {
        const clickData = e.target
          .closest(".popup-data__list")
          .querySelector(".popup-data__name").textContent;

        // console.log(new Date().toISOString());

        let curObj = {
          name: clickData,
          count,
          dateTime: new Date().toISOString(),
        };

        if (!localStorage.getItem("clickHistory")) {
          his = [];

          his.push(curObj);

          localStorage.setItem("clickHistory", JSON.stringify(his));

          searching = false;

          removePopup();

          return -1;
        }

        his = JSON.parse(localStorage.getItem("clickHistory"));

        if (
          his.find((val) => val.name.toLowerCase() == clickData.toLowerCase())
        ) {
          console.log("data exist");
          const getIdx = his.findIndex((val) =>
            val.name.toLowerCase().includes(clickData.toLowerCase())
          );

          [curObj] = his.splice(getIdx, 1);

          console.log(count);

          curObj.count += 1;

          curObj.dateTime = new Date().toISOString();

          his.push(curObj);

          localStorage.setItem("clickHistory", JSON.stringify(his));

          console.log(curObj, his);

          searching = false;

          removePopup();

          return -1;
        }

        his.push(curObj);

        localStorage.setItem("clickHistory", JSON.stringify(his));

        searching = false;

        removePopup();

        return -1;
      }
      /* DELETE ITEMs */

      // if (e.target.classList.contains("fa-times")) {
      //   console.log("close");
      //   return -1;
      // }

      return -1;
    }

    removePopup(e);
    searching = false;
  });

  /* KEYUP EVENTs */

  $(document).on("keyup", function (e) {
    /* ESCAPE */
    if (e.key == "Escape") {
      removePopup();
      return -1;
    }

    /* OTHER KEYs */

    if ($("#navbar-search").val() != "") {
      const getInput = $("#navbar-search").val().toLowerCase();

      newArr = [...obj].filter((val) =>
        val.name.toLowerCase().includes(getInput)
      );

      createEl(newArr);

      // console.log(newArr);

      $(".sorting").removeAttr("disabled");
      $(".fa-sort-alpha-up").css({
        color: "#efefef",
      });

      searching = true;

      return -1;
    }

    // console.log("empty");

    searching = false;
    emptyEl();
  });
});
