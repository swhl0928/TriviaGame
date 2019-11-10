$(document).ready(function () {

    var timer = 30;
    var count = 10;

    $("form").hide();
    $("#start").on("click", function () {
        $("#start").hide();
        $("form").show();
        starttimer();
    });
    function starttimer() {
        var timer = setInterval(function () {
            count--;
            $("#timer").html("<h3> Time Remaining: " + count + "secs </h3>");
            if (count === 0) {
                stop();
                clearInterval(timer)
                $("#timer").hide();
                check();

            }

        }, 1000);


        $("#submit").on("click", function (event) {
            event.preventDefault();
            $("#timer").hide();
            check();
            $("form").hide();


        });


        function check() {

            var answerone = $("input[type=radio][name= year]:checked").val();
            var answertwo = $("input[type=radio][name= place]:checked").val();
            console.log(answerone);
            console.log(answertwo);
            var correct = 0;
            var incorrect = 0;
            var unanswered = 0;

            if (answerone === "1975") {
                correct++;
            }

            else if (answerone == "1970"||"1973") {
                incorrect++;

            }
            else {
                unanswered++;
            }


            if (answertwo === "Paris") {
                correct++;
            }
            else if (answertwo == "Berlin" || "Madrid") {
                incorrect++;

            }
            else {
                unanswered++;
            }




            document.getElementById("result").style.visibility = "visible";
            document.getElementById("allDone").innerHTML = "All Done!"
            document.getElementById("numberCorrect").innerHTML = "Correct Answers: " + correct;
            document.getElementById("numberIncorrect").innerHTML = "InCorrect Answers: " + incorrect;
            document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;

            $("form").hide();
        }
    }});