//browser runs the HTML and css first
$(document).ready(function () {
  var currentDay = $("#currentDay");
  var timeBlock = $(".time-block");

  // use dayjs to  display the date
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  currentDay.text(currentDate);

  function everyHour() {
    //find the current hour
    var currentHour = dayjs().hour();
    //loop over each hour
    timeBlock.each(function () {
      var eachHour = timeBlock.attr("id").split(" ")[1];
    });
  }
});
