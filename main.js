function checkButton() {
    var date = new Date(document.getElementById("dateInput").value);
    var resultElement = document.getElementById("result");
  
    var month = date.getMonth() + 1; // getMonth() returns 0-11
  
    if (month >= 3 && month <= 5) {
      resultElement.textContent = "Primavera 🌷";
    } else if (month >= 6 && month <= 8) {
      resultElement.textContent = "Verao 😎";
    } else if (month >= 9 && month <= 11) {
      resultElement.textContent = "Outono 🍂";
    } else {
      resultElement.textContent = "Inverno 🥶";
    }
  }