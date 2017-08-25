(function() {

  var guessButton = $("#guess");


  $("#guess-field").submit(function() {
      return false;
  });



  $(function(){

    function getQuestion() {
      $.get("http://jservice.io/api/random", function (data){
        //loops through 5 quesitons once url is changed
        // $.each(data, function(index, clue){
        //   console.log(clue.question);
        // })

        questionAnswer = data[0].answer;
        pointVal = data[0].value;
        $("#category").html("The category is: " + data[0].category.title)
        $("#pointVal").html("The point value: " + data[0].value)
        $("#question").html("The question is: " +data[0].question + "?")
        console.log(data[0].answer);
      })
    }

    getQuestion();

    guessButton.click(function() {

      if ($("#answer").val() == questionAnswer) {
        console.log("correct")
        $("#points").html(parseInt($("#points").html()) + pointVal)
        alert("Correct! You earned: " + pointVal + " points")
        getQuestion();
        $("#answer").val("")
      }
      else {
        alert("Incorrect, try again.")
      }
    })
  })
})();
