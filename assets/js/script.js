// get current date to show at top of page
var currentDay = moment().format("dddd MMMM Do");
$("#currentDay").text("Today is " + currentDay);

// call current hour of the day
var currentHour = moment().format("H");
console.log(currentHour);

// coverted the string value of currentHour into a number that can be compared to
var getCurrentHourInt = parseInt(currentHour);
console.log(getCurrentHourInt);

// a for-loop that colors all the timeblocks by id depending on hour of day
for (let i = 9; i <= 17; i++) {
      if (i < getCurrentHourInt) {
            $("#" + i).addClass("past");
      }
      else if (i === getCurrentHourInt) {
            $("#" + i).addClass("present");
      }
      else if (i > getCurrentHourInt) {
            $("#" + i).addClass("future");
      }
}

// result of clicking 'save' button on each line
function saveTasks(event) {
      event.preventDefault();

      var saveBtn = $(event.target);
      var task = saveBtn.siblings("textarea").val();
      console.log(task);
      var timeId = saveBtn.siblings("textarea").attr("id");
      console.log(timeId);

      localStorage.setItem(timeId, task);
}

// retrieves saved entries from local storage
function getSavedTasks() {
      for (let i = 9; i <= 17; i++) {
            localStorage.getItem(i);
            $("#" + i).val(localStorage.getItem(i));
      }
}

getSavedTasks();

// calls the div holding the entire planner
var container = $(".container");

container.on("click", ".saveBtn", saveTasks)
