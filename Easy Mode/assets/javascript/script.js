(function() {

  var guessButton = $("#guess");

//stops the page from refreshing when enter is hit in the text box
  $("#guess-field").submit(function() {
      return false;
  });


//runs on page load
  $(function(){
    let questionAnswer;
    let pointVal;
//function to get question and update html
    function getQuestion() {
      $.get("http://jservice.io/api/random", function (data){
        questionAnswer = data[0].answer;
        pointVal = data[0].value;
        $("#category").html("The category is: " + data[0].category.title)
        $("#pointVal").html("The point value: " + data[0].value)
        $("#question").html("The question is: " +data[0].question + "?")
        console.log(data[0].answer);
      })
    }

//run the function
    getQuestion();

//on click check if the answer is correct, update score, and supply a new question
    guessButton.click(function() {
      //compair with non case sensitive
      if ($("#answer").val().toLowerCase() === questionAnswer.toLowerCase()) {
        //update score
        $("#points").html(parseInt($("#points").html()) + pointVal)
        //alerts user of correct answer
        alert("Correct! You earned: " + pointVal + " points")
        //runs function to fetch another question from API
        getQuestion();
        //clears the answer text box
        $("#answer").val("")
      }
      else if {
        
      }
      else {
        //alerts user of wrong answer
        alert("Incorrect, try again.")
      }
    })
  })
})();
