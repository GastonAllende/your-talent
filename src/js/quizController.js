app.controller("QuizController", [
  "$scope",
  "$interval",
  "$timeout",
  "quizQuestionsFactory",
  function ($scope, $interval, $timeout, quizQuestionsFactory) {


    const totalScores = {
      Kommunikatör: 10,
      Organisatör: 10,
      Teamspelare: 10,
      Problemlösare: 10,
      Initiativtagare: 10
    };

    let quizTimmer;
    const numberOfQuestions = 10;
    const counting = 10;

    // The progress bar in 100 percent long so we divide the nuber of questions
    // with 100. Each time the timer is completed we encrese the progress bar with the
    // result of the division
    let progStart = 100 / numberOfQuestions;
    // Random and get the questions we want
    let theQuentions = randomQuestions(quizQuestionsFactory, numberOfQuestions);

    function randomQuestions(sourceArray, neededQuestions) {
      let result = [];
      for (var i = 0; i < neededQuestions; i++) {
        let index = Math.floor(Math.random() * sourceArray.length); // Random
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
      }
      return result;
    }

    // After a question is selected or the timmer ends we reset and add a new question
    function nextQuestion() {
      $scope.question = $scope.question + 1;
      $scope.hideBtn = false;
      $scope.displayedQuestion = theQuentions[$scope.question];

      $scope.answerSelected = -1;
      $scope.countdown = counting; // Reset counter
      $scope.progressBar += progStart; // increase the progress bar
    }

    function startTimmer() {
      quizTimmer = $interval(function () {
        $scope.countdown--;
        // We hit the final question and its done counting
        if (
          $scope.question === numberOfQuestions - 1 &&
          $scope.countdown <= 0
        ) {
          quizCompleted();
          // Counting is done but no answer where selected then we show the nexr question
        } else if ($scope.countdown < 0) {
          nextQuestion();
        }
      }, 1000);
    }

    function stopTimmer() {
      $interval.cancel(quizTimmer);
    }

    function quizCompleted() {
      stopTimmer();
      const url =
        "#/diagram/" +
        totalScores.Kommunikatör +
        totalScores.Organisatör +
        totalScores.Teamspelare +
        totalScores.Problemlösare +
        totalScores.Initiativtagare;
      $scope.showLoader = true;

      // we give this a couple of seconds so we can se the loader on the screen
      $timeout(function () {
        window.location.href = url;
      }, 2000);
    }

    // starter values
    function init() {
      $scope.question = 0;
      $scope.displayedQuestion = theQuentions[$scope.question];
      $scope.numberOfQuestions = numberOfQuestions;

      $scope.countdown = counting;
      $scope.answerSelected = -1;
      $scope.hideBtn = false;
      $scope.showLoader = false;
      $scope.progressBar = progStart;

      startTimmer();
    }

    // When a question is selected
    $scope.selectAnswer = function (aIndex, score) {
      // give the answer that was selected so i can put the check mark on that <div>
      $scope.answerSelected = aIndex;
      // hide the buttons after an question is answered
      $scope.hideBtn = true;

      switch (score.subject) {
        case "Kommunikatör":
          totalScores.Kommunikatör += score.score;
          break;
        case "Organisatör":
          totalScores.Organisatör += score.score;
          break;
        case "Teamspelare":
          totalScores.Teamspelare += score.score;
          break;
        case "Problemlösare":
          totalScores.Problemlösare += score.score;
          break;
        case "Initiativtagare":
          totalScores.Initiativtagare += score.score;
          break;
      }

      // We hit the final question
      if ($scope.question === numberOfQuestions - 1) {
        quizCompleted();
      }

      // We are not done with the questions :)
      if ($scope.question < numberOfQuestions - 1) {
        stopTimmer();
        // Set timeout so we ca hide the button and show the check icon for 1 second
        $timeout(function () {
          nextQuestion(); // reset and fetch another question
          startTimmer();
        }, 1000);
      }
    };

    init();
  }
]);
