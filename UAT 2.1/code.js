 // creating a timer reset
 /*Tutor Dylan Crockett helped me with this small detail, I had all of it but "document.getElementById("countDownTimer")" on the first part of the if statement. */
 function timerReset() {
    if (document.getElementById("countDownTimer").innerHTML == "Blast Off!!") {
      document.getElementById("countDownTimer").innerHTML = "Starting countdown here..";
    }

  }



//I know there is a much easier way than below

  // creating a countdown function and name it countdown
  function countdown() {//set the count to 10
    var count = 10;

    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;
    // to create a timer we use 'setTimeout' function
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 1000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 2000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 3000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 4000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 5000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 6000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 7000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 8000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 9000);

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
      count = count - 1;
    }, 10000);
}




// creating a function to 'play craps'
function playCraps()
  {

  //first I have to set my three variables die1, die2, sum. Give them a random number between 0 and 6 and have it round up.  
  var die1 =Math.ceil( Math.random()*6);
  var die2 = Math.ceil(Math.random()*6);
  var sum = die1 + die2;

  //Reference where the printout will be
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  document.getElementById("sumRes").innerHTML = sum;

  //Adding conditionals for each game state to make the game behave properly
  if(sum== 7 || sum==11)
  {
    document.getElementById("crapsResults").innerHTML = "Craps you Lose!!";
  }
  else if (die1 == die2 && die1%2== 0)
  {
  document.getElementById("crapsResults").innerHTML = "Doubles, you win!!";
  }
  else
  {
    document.getElementById("crapsResults").innerHTML = "Push, please try again.";
  }
  }
  //I could not comment out my css sheet
