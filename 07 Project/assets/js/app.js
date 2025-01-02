"use strict";

$(document).ready(function () {
  let obj,
    sort = false,
    search = false,
    newArr,
    res;

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

    arr = sort
      ? [...arrObj].sort((a, b) => a.name.localeCompare(b.name))
      : arrObj;

    console.log(arr);

    document.querySelector(".popup-data").innerHTML = "";

    arr.forEach((val) => {
      html = `

          <li
                  class="popup-data__list text-light d-flex align-items-center justify-content-between rounded"
                >
                  <span class="popup-data__name text-capitalize">${val.name}</span>
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

  //

  /* */

  function dataFilter() {
    const filterName = $("#search-input").val().toLowerCase();
    if ($("#search-input").val() !== "") {
      search = true;

      newArr = obj.filter((val) => val.name.toLowerCase().includes(filterName));

      displayData(newArr);

      return -1;
    }

    search = false;
  }

  /* SHOW / HIDE POPUP BOX */

  function hidePopup() {
    $(".popup").removeClass("active");
  }

  $(document).on("click", function (e) {
    if (e.target.id == "navbar-search" || e.target.id == "search-input") {
      hidePopup();
      $(".popup").addClass("active");

      document.querySelector("#search-input").focus();

      console.log("bubbling");
    } else if (e.target.classList.contains("fa-sort-alpha-up")) {
      sort = sort ? false : true;

      res = search ? newArr : [];

      console.log(res);

      displayData(res);
    } else if (e.target.classList.contains("fa-times")) {
      const searchText = $(e.target).parent().prev().text();
      const searchInd = newArr.findIndex(
        (val) => val.name.toLowerCase() == searchText.toLowerCase()
      );

      console.log(searchInd);

      newArr.splice(searchInd, 1);

      displayData(newArr);

      // $(".popup").addClass("active");
    }
  });

  /* FILTER */

  $(document).on("keyup", function (e) {
    dataFilter();
  });
});
