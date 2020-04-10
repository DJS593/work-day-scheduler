// adding current date to the <p> tag with id="currentDay"

var rightNow = moment().format("dddd MMMM Do");
$("#currentDay").append(rightNow);

