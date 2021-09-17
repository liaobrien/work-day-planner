var currentDay = moment().format("dddd MMMM Do");
$("#currentDay").text(currentDay);


// call current hour of the day
var currentHour = moment().format("H");
console.log(currentHour);

// coverted the string value of currentHour into a number that can be compared to
var getCurrentHourInt = parseInt(currentHour);
console.log(getCurrentHourInt);


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



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// need to compare current hour to the hour somehow designated in textarea?
// if currenthour > timeblockhour, then textarea addclass past
// how do i make the textareas each have their own hour? ids? dataset?

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// see event delegation for onclick for a specific class...

// WHEN I refresh the page
// THEN the saved events persist
