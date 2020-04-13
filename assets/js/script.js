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






// Need to add tasks 



// adding an event listener / delegating the click to the div with a class of .time-block for now, but considering moving to div class = "container."  I could also just isolate each click.

//$(".time-block").on("click", "button",  function () {
//   console.log("button");
//   });

// $(".time-block").on("click", "textarea", function() {
  
//   var text = $(this)
//     .text()
//     .trim();
//   console.log(text);

//   var textInput = $("<textarea>")
//     .addClass("text")
//     .val(text);
//   console.log(textInput);
// });


// // consider isolating each button for saving purposes

// $(".saveBtn").on("click", function () {
//   console.log(this);
// });

// var text = $(".text").textContent;
// console.log(text);




// PRACTIC AREA


// function clear_all() {
//   $('#key').val('');
//   $('#value').val('');
// }

//Store Data

tasks = []

saveTasks = 

$(".text-one").on("click", "textarea", function() { 
  var text = $(this).text().trim();
  
  var textInput = $("<textarea>")
    .addClass("text")
    .val(text);

  $(this).replaceWith(textInput);

  textInput.trigger("focus");

  saveTasks
});









// $("#btn1").click(function() {

//   //Var Key and Value
//   var the_key = "test";
//   var the_value = $('#text1').val();

//   //Check if Key or Value is empty
//   if ($.trim(the_value) == '') {
//     $('.notice').text('Please enter a VALUE');
//   }

//   //If not empty then store data
//   else {
//     localStorage.setItem(the_key, JSON.stringify(the_value));
//     // clear_all();
//     // $('.notice').html(
//     //   "Data saved. <br /> You can now retrieve it with: $.jStorage.get('" + the_key + "') <br />" +
//     //   "where <strong>" + the_key + "</strong> is the <u>KEY</u> you defined, and <strong>" + the_value + "</strong> is the <u>VALUE</u> you defined." +
//     //   "<br /> <br /><strong>Example: $.jStorage.get('" + the_key + "')" +
//     //   " » Returns: " + localStorage.getItem(the_key) + "</strong><br /> <br />You can check the value in the Developer Tools of your browser on: Resources -> Local Storage -> https://s.codepen.io -> jStorage"
//     // );
//   }
// });

// //Clear Data
// $("#clear").click(function() {
//   $.jStorage.flush();
//   clear_all();
//   $('.notice').text('Data cleared');
// });














// var tasks = [];

// var task1 = document.querySelector('.text');

//var task1 = $(".t1").val();
//console.log(task1);

// var taskInput = $(".text");
// tasks.push(taskInput)
//   .text()
//   .trim();

// console.log(tasks);

//localStorage.setItem('tasks', JSON.stringify(tasks));


//vals = JSON.parse(localStorage.getItem('tasks'));




{/* <div class="content-output"></div>
<textarea class="content-input" placeholder="Your text here"></textarea>
<button class="save-button">Save</button> */}

// var input_textarea = document.querySelector('.text');
// var output_div = document.querySelector('.textDiv');
// var save_button = document.querySelector('.saveBtn');

// save_button.addEventListener('click', updateOutput);
// console.log("click");

// function updateOutput() {
// 	localStorage.setItem('content', input_textarea.value);
// }



// output_div.textContent = localStorage.getItem('content');
// input_textarea.value = localStorage.getItem('content');
// console.log('content');
// function updateOutput() {
// 	localStorage.setItem('content', input_textarea.value);
	
// 	output_div.textContent = input_textarea.value;
// }





























// Use saveTasks to save tasks to local storate.  Need to define tasks as the text in the <textarea>.

// var tasks = $(".text").text;
// console.log(tasks);

// var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };





// var currentHour = moment().format("h:mm");
// console.log(currentHour);


// logic to indicate if an time-block is in the past, present or future
// past will be gray b-g, present is red and future is green


// I want to pull in the time on the left of the schedule (e.g. 9AM) and compare to current time to determine background shading
// m = moment('9AM', 'dddd');
// console.log(m);

//var time = ;
//console.log(time);

// I will need to use moment().isAfter(time) FYI - time is a defined variable for a set time.  I need to figure out how to take the time

// var startTime = moment("9:00 am", "HH:mm a");
// // var currentTime = moment("12:31 pm", "HH:mm a");
// var currentTime = moment().format("HH:mm a");
// var diffTime = moment(currentTime, "HH:mm a");
// console.log(diffTime);

// // calculate total duration
// var duration = moment.duration(diffTime.diff(startTime));
// console.log(duration);
// if (duration >= 0) {
//   var present = "true"
// } else {
//   var present = "not true";
// }
// console.log(present);


// duration in hours
//var hours = parseInt(duration.asHours());

// duration in minutes

//console.log(hours);
//var minutes = parseInt(duration.asMinutes())%60;
//alert (hours + ' hour and '+ minutes+' minutes.');




