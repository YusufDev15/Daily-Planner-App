//browser runs the HTML and css first
$(document).ready(function () {
  var currentDay = $("#currentDay");
  var timeBlocks = $(".time-block");
  // use dayjs to  display the date
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  currentDay.text(currentDate);

  function everyHour() {
    //find the current hour
    var currentHour = dayjs().hour();

    //iterate over each element with the class "time-block"
    timeBlocks.each(function () {
      //retrieve the value of the 'id' attribute of the timeblock element using jquery attr
      //split the value of the 'id' attribute into an array of substrings
      var eachHour = parseInt($(this).attr("id").split("-")[1]); //retrieve the second element after splitting
      //get from local storage, textEntry
      var textEntry = localStorage.getItem(eachHour);
      //set with the class description
      $(this).find(".description").val(textEntry);
      //compare eachHour and currentHour and assign the right class
      if (eachHour < currentHour) {
        $(this).find(".description").addClass("past");
      } else if (eachHour === currentHour) {
        $(this).find(".description").addClass("present");
      } else {
        $(this).find(".description").addClass("future");
      }
    });
  }
  everyHour();
  //eventListner on the savebtn class when clicked will save the key and value
  $(".saveBtn").on("click", function () {
    //Key
    var key = $(this).parent().attr("id").split("-")[1];
    //Value
    var value = $(this).parent().find(".description").val();
    //Save Key and Value to Local Storage
    localStorage.setItem(key, value);
  });
});
