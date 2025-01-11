"use strict";

$(document).ready(function () {
  const wrapper = document.querySelector(".data-container");

  //

  let arr = [],
    index,
    taskObj;

  const getData = localStorage.getItem("taskUser");

  function loopEl(arrobj) {
    wrapper.innerHTML = "";

    arrobj.forEach((val, ind) => {
      createEl(val, ind);
    });
  }

  // console.log(getData);

  (function init() {
    if (getData) {
      arr = JSON.parse(getData);

      loopEl(arr);
    }
  })();

  //

  function updateLocal(obj) {
    localStorage.setItem("taskUser", JSON.stringify(obj));
  }

  //

  function createEl(obj, ind) {
    const html = `
    <li class=" d-flex justify-content-between align-items-center list-group-item data-item" data-id= ${
      obj.id
    }>
           <span class="text-capitalize data-txt ${
             obj.completed ? "completed" : ""
           }">${++ind <= 9 ? "0" + ind : ind}. ${obj.taskName}</span>
           <div class="action">
               <a href="javascript:void(0)" class="btn btn-outline-success px-3 text-capitalize" id="edit">edit</a>
               <a href="javascript:void(0)" class="btn btn-outline-danger px-3 text-capitalize" id="del">delete</a>
           </div>
       </li>
`;

    wrapper.insertAdjacentHTML("beforeend", html);

    //

    // //
    // taskObj = {
    //   id: index,
    //   taskName: $("#inputTxt").val().trim().toLowerCase(),
    //   completed: document
    //     .querySelector(".data-txt")
    //     .classList.contains("completed"),
    // };

    // arr.push(taskObj);
  }

  //

  $("#submit").on("click", function () {
    //

    if ($("#inputTxt").val() !== "") {
      if (!localStorage.getItem("taskUser")) {
        //
        taskObj = {
          id: 1,
          taskName: $("#inputTxt").val().trim().toLowerCase(),
          completed: false,
        };

        // console.log(taskObj);
        arr.push(taskObj);

        loopEl(arr);

        updateLocal(arr);

        // location.reload();

        // console.log(arr);
      } else {
        arr = JSON.parse(localStorage.getItem("taskUser"));

        if (
          !arr
            .map((val) => val.taskName)
            .includes($("#inputTxt").val().trim().toLowerCase())
        ) {
          index = arr[arr.length - 1]?.id ?? 0;

          taskObj = {
            id: ++index,
            taskName: $("#inputTxt").val().trim().toLowerCase(),
            completed: false,
          };

          arr.push(taskObj);

          loopEl(arr);

          updateLocal(arr);

          // location.reload();
        } else {
          alert("Data Exist");
        }
      }
    } else {
      //   console.log("empty");
      window.alert("Please, Type Something in the input box!");
    }

    console.log(wrapper.querySelector(".data-item"));
  });

  $(document).on("contextmenu", function (e) {
    e.preventDefault();

    if (e.target.closest(".data-item")?.classList.contains("data-item")) {
      const getObj = arr.find(
        (val) => val.id == $(e.target.closest(".data-item")).data("id")
      );

      e.target
        .closest(".data-item")
        .querySelector(".data-txt")
        .classList.add("completed");

      getObj.completed = true;

      console.log(arr);

      updateLocal(arr);
    }
  });

  $(document).on("click", function (e) {
    // console.log(this.querySelector("#del").id, e.target.id);

    if (e.target?.id == "del") {
      console.log($(e.target.closest(".data-item")).data("id"));

      const index = arr.findIndex(
        (val) => val.id == $(e.target.closest(".data-item")).data("id")
      );

      arr.splice(index, 1);

      console.log(arr);

      updateLocal(arr);

      location.reload();
    }
  });
});
