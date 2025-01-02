"use strict";

$(document).ready(function () {
  let obj,
    sort = false,
    search = false,
    newArr;

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

    arr = sort ? [...arrObj].sort((a, b) => a.name.localeCompare(b.name)) : obj;

    // console.log(arr);

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

    // if ($("#search-input").val() !== "") {
    //   search = true;
    //   newArr = obj.filter((val) => val.name.toLowerCase().includes(filterName));

    //   console.log(newArr);

    //   displayData(newArr);
    // } else {
    //   search = false;
    //   sort = false;
    //   displayData(obj);
    // }
  }

  /* SHOW / HIDE POPUP BOX */

  function hidePopup() {
    $(".popup").removeClass("active");
  }

  $(document).on("click", function (e) {
    console.log(e.target.closest(".popup-search__data"));
    if (
      e.target.classList.contains("navbar-form__search") ||
      e.target.closest(".popup-search__data")
    ) {
      hidePopup();
      $(".popup").addClass("active");

      $("#search-input").focus();

      // displayData(obj);

      console.log("bubbling");
    } else {
      //
      hidePopup();
    }

    // // console.log(obj);

    // if (e.target.classList.contains("fa-times")) {
    //   const res = search ? newarr : obj;

    //   const index = res.findIndex(
    //     (val) => val.name == $(e.target).parent().prev().text()
    //   );

    //   console.log(index);

    //   res.splice(index, 1); // index and length and Applied Obj

    //   displayData(res);

    //   //   console.log(obj);

    //   //   displayData();
    // }

    // if (e.target.id == "search-input") {
    //   dataFilter();
    // }

    // if (
    //   e.target.closest(".popup-search__sorting") ||
    //   (e.target.classList.contains("fa-sort-alpha-up") && !sort)
    // ) {
    //   //   displayData(obj);

    //   sort ? (sort = false) : (sort = true);

    //   console.log(sort);

    //   const res = search ? newarr : obj;

    //   displayData(res);
    // }
  });

  /* FILTER */

  $(document).on("keyup", function (e) {
    // console.log(e.key);

    dataFilter();
  });
});
