// Adding current date to the <p> tag with id="currentDay." Format will show day of week, month and day of month.

var rightNow = moment().format("dddd MMMM Do");
$("#currentDay").append(rightNow);
// console.log(rightNow);



// Need to add tasks 



// adding an event listener / delegating the click to the div with a class of .time-block for now, but considering moving to div class = "container."  I could also just isolate each click.

// $(".time-block").on("click", "button", function () {
//   console.log(this);
// });

// consider isolating each button for saving purposes

$(".saveBtn").on("click", function () {
  console.log(this);
});









var currentHour = moment().format("h:mm");
console.log(currentHour);


// logic to indicate if an time-block is in the past, present or future
// past will be gray b-g, present is red and future is green


// I want to pull in the time on the left of the schedule (e.g. 9AM) and compare to current time to determine background shading
m = moment('9AM', 'dddd');
console.log(m);

//var time = ;
//console.log(time);

// I will need to use moment().isAfter(time) FYI - time is a defined variable for a set time.  I need to figure out how to take the time

var startTime = moment("9:00 am", "HH:mm a");
// var currentTime = moment("12:31 pm", "HH:mm a");
var currentTime = moment().format("HH:mm a");
var diffTime = moment(currentTime, "HH:mm a");
console.log(diffTime);

// calculate total duration
var duration = moment.duration(diffTime.diff(startTime));
console.log(duration);
if (duration >= 0) {
  var present = "true"
} else {
  var present = "not true";
}
console.log(present);


// duration in hours
//var hours = parseInt(duration.asHours());

// duration in minutes
//var minutes = parseInt(duration.asMinutes())%60;

//console.log(hours);
//alert (hours + ' hour and '+ minutes+' minutes.');

var auditTask = function(taskEl) {
  console.log(taskEl);
};