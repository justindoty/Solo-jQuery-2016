
var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;

$(document).ready(function () {

  $("button").on("click", function () {

    if ($(this).attr("class") == "1") {
        redCount++;
        $("#red").empty();
        $("#red").append("Total red: " + redCount);
        $(".container").append('<p class="red"></p>');
        $(".red").addClass("color-cube");
    } if ($(this).attr("class") == "2") {
        yellowCount++;
        $("#yellow").empty();
        $("#yellow").append("Total yellow: " + yellowCount);
        $(".container").append('<p class="yellow"></p>');
        $(".yellow").addClass("color-cube");
    }if ($(this).attr("class") == "3") {
        greenCount++;
        $("#green").empty();
        $("#green").append("Total green: " + greenCount);
        $(".container").append('<p class="green"></p>');
        $(".green").addClass("color-cube");
    }if ($(this).attr("class") == "4") {
        blueCount++;
        $("#blue").empty();
        $("#blue").append("Total blue: " + blueCount);
        $(".container").append('<p class="blue"></p>');
        $(".blue").addClass("color-cube");
      }
  });





    //   switch(this){
    //     case 1:
    //       buttonValue1 = parseInt($(this).attr("class"));
    //       totalValue += parseInt($(this).attr("class"));
    //       numClicks++ ;
    //       $(".total").append("<h2>" + buttonValue1 + "</h2>")
    //       break;
    //     case 2:
    //       buttonValue2 = parseInt($(this).attr("class"));
    //       totalValue += parseInt($(this).attr("class"));
    //       numClicks++ ;
    //       $(".total").empty();
    //       $(".total").append("<h2>" + buttonValue1 + " + " + buttonValue2 + " = " + totalValue + "</h2>")
    //       break;
    //     case 3:
    //       numClicks = 1;
    //       totalValue = 0;
    //       buttonValue1 = parseInt($(this).attr("class"));
    //       totalValue += parseInt($(this).attr("class"));
    //       $(".total").empty();
    //       $(".total").append("<h2>" + buttonValue1 + "</h2>")
    //       break;
    //   }
    //     console.log(totalValue);
    // });









});
