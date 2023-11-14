//browser runs the HTML and css first
$(document).ready(function () {
  var currentDay = $("#currentDay");

  // use dayjs to  display the date
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  currentDay.text(currentDate);

  function everyHour() {
    //find the current hour
    var currentHour = dayjs().hour();
    var timeBlocks = $(".time-block");
    //loop over each hour
    timeBlocks.each(function () {
      //retrieve the value of the 'id' attribute of the timeblock element using jquery attr
      //split the value of the 'id' attribute into an array of substrings
      var eachHour = parseInt(timeBlocks.attr("id").split("-")[1]); //retrieve the second element after splitting
      //compare eachHour and currentHour and assign the right class
      if (eachHour < currentHour) {
        timeBlocks.find(".description").addClass("past"); //maybe $(this)
      } else if (eachHour === currentHour) {
        timeBlocks.find(".description").addClass("present");
      } else {
        timeBlocks.find(".description").addClass("future");
      }
    });
  }
  everyHour();
});
