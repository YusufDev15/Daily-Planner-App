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
    function timeBlock() {
        //retrieve the value of the 'id' attribute of the timeblock element using jquery attr 
        //split the value of the 'id' attribute into an array of substrings
      var eachHour = timeBlock.attr("id").split("-")[1];
    };
  }
});
