$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Adding event to form submit
  $("form").submit(function(event) {
    var age = parseInt($("#age").val());
    console.log(age);
    var gender = $('input.gender:checked').val();

    if (age >= 50 && gender === "male") {
      alert("Pierce");
      $("#card1").show();
    } else if (age >= 50) {
      alert("Renee");
    } else {
      alert ("Scarlett or Colin");
    }


    event.preventDefault();
  });
});
