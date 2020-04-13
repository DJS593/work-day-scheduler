// Adding current date to the <p> tag with id="currentDay." Format will show day of week, month and day of month.

var rightNow = moment().format("dddd MMMM Do");
$("#currentDay").append(rightNow);
console.log(rightNow);



// Adding functionality to change background color based on the difference between current time and printed time on the scheduler.  For example, if the current hour is more than hour past the posted time, then the background will be gray; present = red; future = green.  Exact colors can be found in style.css.

// create variables that align with military time.  Example, 1pm = 13 (var fifthHour).

var firstHour = 9;
var secondHour = 10;
var thirdHour = 11;
var fourthHour = 12;
var fifthHour = 13;
var sixthHour = 14;
var seventhHour = 15;
var eigthHour = 16;
var ninthHour = 17;

var currentHour = moment().format("H");
// console.log(currentHour);

// Utilizing an if else statement for each time block.  

// 9am 
if(currentHour < firstHour) {
  $(".text9").addClass("future");
} else if(currentHour > firstHour) {
  $(".text9").addClass("past");
} else if(currentHour = firstHour) {
  $(".text9").addClass("present");
}

// 10am 
if(currentHour < secondHour) {
  $(".text10").addClass("future");
} else if(currentHour > secondHour) {
  $(".text10").addClass("past");
} else if(currentHour = secondHour) {
  $(".text10").addClass("present");
}

// 11am 
if(currentHour < thirdHour) {
  $(".text11").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text11").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text11").addClass("present");
}

// 12pm 
if(currentHour < thirdHour) {
  $(".text12").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text12").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text12").addClass("present");
}

// 1pm 
if(currentHour < thirdHour) {
  $(".text13").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text13").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text13").addClass("present");
}

// 2pm 
if(currentHour < thirdHour) {
  $(".text14").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text14").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text14").addClass("present");
}

// 3pm 
if(currentHour < thirdHour) {
  $(".text15").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text15").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text15").addClass("present");
}

// 4pm
if(currentHour < thirdHour) {
  $(".text16").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text16").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text16").addClass("present");
}

// 5pm 
if(currentHour < thirdHour) {
  $(".text17").addClass("future");
} else if(currentHour > thirdHour) {
  $(".text17").addClass("past");
} else if(currentHour = thirdHour) {
  $(".text17").addClass("present");
}






// setting tasks to local storage
// giving each row an array for the tasks 

var taskCount = 0
var tasks = []
// do i need var tasks?
var tasksRow9 = [];
var tasksRow10 = [];
var tasksRow11 = [];
var tasksRow12 = [];
var tasksRow13 = [];
var tasksRow14 = [];
var tasksRow15 = [];
var tasksRow16 = [];
var tasksRow17 = [];

// 9am
$("#row9").on("click", "#btn9", function(event) {
  event.preventDefault();
  var tasks9 = $("#text9").val().trim();
  tasksRow9.push(tasks9);
  localStorage.setItem("9am", JSON.stringify(tasksRow9));
});

// 10am
$("#row10").on("click", "#btn10", function(event) {
  event.preventDefault();
  var tasks10 = $("#text10").val().trim();
  tasksRow10.push(tasks10);
  localStorage.setItem("10am", JSON.stringify(tasksRow10));
});

// 11am
$("#row11").on("click", "#btn11", function(event) {
  event.preventDefault();
  var tasks11 = $("#text11").val().trim();
  tasksRow11.push(tasks11);
  localStorage.setItem("11am", JSON.stringify(tasksRow11));
});

// 12pm
$("#row12").on("click", "#btn12", function(event) {
  event.preventDefault();
  var tasks12 = $("#text12").val().trim();
  tasksRow12.push(tasks12);
  localStorage.setItem("12pm", JSON.stringify(tasksRow12));
});

// 1pm
$("#row13").on("click", "#btn13", function(event) {
  event.preventDefault();
  var tasks13 = $("#text13").val().trim();
  tasksRow13.push(tasks13);
  localStorage.setItem("1pm", JSON.stringify(tasksRow13));
});

// 2pm
$("#row14").on("click", "#btn14", function(event) {
  event.preventDefault();
  var tasks14 = $("#text14").val().trim();
  tasksRow14.push(tasks14);
  localStorage.setItem("2pm", JSON.stringify(tasksRow14));
});

// 3pm
$("#row15").on("click", "#btn15", function(event) {
  event.preventDefault();
  var tasks15 = $("#text15").val().trim();
  tasksRow15.push(tasks15);
  localStorage.setItem("3pm", JSON.stringify(tasksRow15));
});

// 4pm
$("#row16").on("click", "#btn16", function(event) {
  event.preventDefault();
  var tasks16 = $("#text16").val().trim();
  tasksRow16.push(tasks16);
  localStorage.setItem("4pm", JSON.stringify(tasksRow16));
});

// 5pm
$("#row17").on("click", "#btn17", function(event) {
  event.preventDefault();
  var tasks17 = $("#text17").val().trim();
  tasksRow17.push(tasks17);
  localStorage.setItem("5pm", JSON.stringify(tasksRow17));
});


// add getItem from local storage for each row

$("#text9").val(JSON.parse(localStorage.getItem("9am")));
$("#text10").val(JSON.parse(localStorage.getItem("10am")));
$("#text11").val(JSON.parse(localStorage.getItem("11am")));
$("#text12").val(JSON.parse(localStorage.getItem("12pm")));
$("#text13").val(JSON.parse(localStorage.getItem("1pm")));
$("#text14").val(JSON.parse(localStorage.getItem("2pm")));
$("#text15").val(JSON.parse(localStorage.getItem("3pm")));
$("#text16").val(JSON.parse(localStorage.getItem("4pm")));
$("#text17").val(JSON.parse(localStorage.getItem("5pm")));






















































