$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("#age").val());
    console.log(age);
    var gender = $('input.gender:checked').val();

    if (age >= 50 && gender === "male") {
      alert("Pierce");
    } else if (age >= 50) {
      alert("Renee");
    } else {
      alert ("Scarlett or Colin");
    }


    event.preventDefault();
  });
});
