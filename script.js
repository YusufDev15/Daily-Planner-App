var currentDay = $("#currentDay");

// handle displaying the date
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY");
  currentDay.text(currentDate);



