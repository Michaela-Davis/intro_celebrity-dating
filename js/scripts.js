$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Adding event to form submit
  $("form").submit(function(event) {
    var age = parseInt($("#age").val());
    console.log(age);
    var gender = $('input.gender:checked').val();
    var activityInput = $("#activity").val();

    $("span.activity").append(activityInput);

    if (age >= 50 && gender === "male") {
      $("#cardPierce").show();
      $("form").hide();
    } else if (age >= 50) {
      $("#cardRene").show();
      $("form").hide();
    } else if (age <= 30 && gender === "male") {
      $("#cardLiam").show();
      $("form").hide();
    } else if (age <= 30 && gender === "female") {
      $("#cardEmma").show();
      $("form").hide();
    } else if (gender === "male") {
      $("#cardColin").show();
      $("form").hide();
    } else {
      $("#cardScarlett").show();
      $("form").hide();
    }


    event.preventDefault();
  });
});
