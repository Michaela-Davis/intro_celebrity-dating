$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("#age").val());
    console.log(age);
    // var gender = $(#gender).val();

    if (age >= 50) {
      alert("Renee or Pierce");
    } else if (age <= 30) {
      alert("Emma or Liam");
    } else {
      alert ("Scarlett or Colin");
    }


    event.preventDefault();
  });
});
