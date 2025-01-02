"use strict";

$(document).ready(function () {
  let obj,
    sort = false;

  function fetchData(filterData = "") {
    let html;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        obj = JSON.parse(xhr.responseText);
      }
    };

    xhr.open("GET", "./assets/js/data.json");

    xhr.send();
  }

  fetchData();

  /* Display Data */

  function displayData(arrObj) {
    let html, arr;

    arr = arrObj.map((val) => val.name);

    if (sort) {
      arr.sort();
    }

    console.log(arr);

    document.querySelector(".popup-data").innerHTML = "";

    arr.forEach((val) => {
      html = `

          <li
                  class="popup-data__list text-light d-flex align-items-center justify-content-between rounded"
                >
                  <span class="popup-data__name text-capitalize">${val}</span>
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

  /* SHOW / HIDE POPUP BOX */

  function hidePopup() {
    $(".popup").removeClass("active");
  }

  $(document).on("click", function (e) {
    // console.log(
    //   $(e.target),
    //   $(e.target).parents(".popup-data"),
    //   e.target.classList.contains("navbar-form__search") ||
    //     Boolean(e.target.closest(".popup-data"))
    // );

    if (
      e.target.classList.contains("navbar-form__search") ||
      Boolean(e.target.closest(".popup-search__data"))
    ) {
      hidePopup();
      $(".popup").addClass("active");

      displayData(obj);
    } else {
      console.log(e.target);
      hidePopup();
    }

    // console.log(obj);

    if (e.target.classList.contains("fa-times")) {
      const index = obj.findIndex(
        (val) => val.name == $(e.target).parent().prev().text()
      );

      console.log(index);

      obj.splice(index, 1); // index and length

      displayData(obj);

      //   console.log(obj);

      //   displayData();
    }

    if (
      e.target.closest(".popup-search__sorting") ||
      (e.target.classList.contains("fa-sort-alpha-up") && !sort)
    ) {
      console.log("click");

      //   displayData(obj);

      sort = true;

      displayData(obj);
    }
  });
});
