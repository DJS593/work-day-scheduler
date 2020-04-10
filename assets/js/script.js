// adding current date to the <p> tag with id="currentDay"

var rightNow = moment().format("MMMM Do, YYYY");
$("#currentDay").append(rightNow);

