// adding current date to the <p> tag with id="currentDay"

var rightNow = moment().format("dddd MMMM Do");
$("#currentDay").append(rightNow);

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

