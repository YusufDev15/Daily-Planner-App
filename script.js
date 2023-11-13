var currentDay = $("#currentDay");

// handle displaying the date
function displayDate() {
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  currentDay.text(currentDate);
}

displayDate();
