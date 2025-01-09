"use strict";

$(document).ready(function () {
  let index = 0;

  let arr = [],
    taskObj;

  //

  function updateLocal(obj) {
    localStorage.setItem("taskUser", JSON.stringify(obj));
  }

  //

  function createEl() {
    const html = `
    <li class=" d-flex justify-content-between align-items-center list-group-item data-item">
           <span class=" data-txt ">${index < 9 ? "0" + ++index : ++index}. ${$(
      "#inputTxt"
    ).val()}</span>
           <div class="action">
               <a href="javascript:void(0)" class="btn btn-outline-success px-3 text-capitalize" id="done">done</a>
               <a href="javascript:void(0)" class="btn btn-outline-danger px-3 text-capitalize" id="del">delete</a>
           </div>
       </li>
`;

    document
      .querySelector(".data-container")
      .insertAdjacentHTML("beforeend", html);

    //

    //
    taskObj = {
      id: index,
      taskName: $("#inputTxt").val().trim().toLowerCase(),
      completed: document
        .querySelector(".data-txt")
        .classList.contains("completed"),
    };

    arr.push(taskObj);
  }

  //

  $("#submit").on("click", function () {
    //

    if ($("#inputTxt").val() !== "") {
      if (!localStorage.getItem("taskUser")) {
        createEl();

        console.log(arr);

        updateLocal(arr);
      } else {
        arr = JSON.parse(localStorage.getItem("taskUser"));

        createEl();
        updateLocal(arr);
      }
    } else {
      //   console.log("empty");
      window.alert("Please, Type Something in the input box!");
    }
  });
});
