$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Adding event to form submit
  $("form").submit(function(event) {
    var age = parseInt($("#age").val());
    console.log(age);
    var gender = $('input.gender:checked').val();

    if (age >= 50 && gender === "male") {
      $("#card1").show();
      $("form").hide();
    } else if (age >= 50) {
      alert("Renee");
    } else {
      alert ("Scarlett or Colin");
    }


    event.preventDefault();
  });
});
