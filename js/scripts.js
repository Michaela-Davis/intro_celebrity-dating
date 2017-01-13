$(document).ready(function() {
  $("form").submit(function(event) {
    var numberInput = $("#number").val();
    console.log(numberInput);
    if (parseInt(numberInput) > 10) {
      alert("Your number is greater than 10");
    } else if (parseInt(numberInput) === 10) {
      alert("Congratulations, your number is 10")
    } else {
      alert ("Your number is less than 10");
    }
    event.preventDefault();
  });
});
