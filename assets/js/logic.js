var questions = [{
	question: "The sky is blue.",
	answers: ["true", "false"],
	correctAnswer: "true"
},{
	question: "Cats are better than dogs.",
	answers: ["true", "false"],
	correctAnswer: "false"
},{
	question: "People sit on chairs.",
	answers: ["true", "false"],
	correctAnswer: "true"
},{
	question: "Warheads (the candy) are sour.",
	answers: ["true", "false"],
	correctAnswer: "true"
},{
	question: "Unicorns are real.",
	answers: ["true", "false"],
	correctAnswer: "false"
},{
	question: "Whataburger is the best fast food burger.",
	answers: ["true", "false"],
	correctAnswer: "true"
},{
	question: "Dr.Pepper is the best soda.",
	answers: ["true", "false"],
	correctAnswer: "true"
},{
	question: "Dr.Pepper bombs have Dr.Pepper in them.",
	answers: ["true", "false"],
	correctAnswer: "false"
},];

var timer;
var qNum = 0;
var game = {
	correct: 0,
  incorrect: 0,
  counter: 150,

  countdown: function() {
   	game.counter--;
    $("#counterNum").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
   	timer = setInterval(game.countdown, 1000);
    $("#timer").prepend("<h2>Time Remaining: <span id='counterNum'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#question").append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#question").append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    $("#question").append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },

  result: function() {
    clearInterval(timer);
    $("#question h2").remove();
    $("#question").html("<h2>All Done!</h2>");
    $("#question").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#question").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#question").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});