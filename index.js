// Function to roll the dice and update the images
function rollDice() {
    let randomNumber1 = Math.floor((Math.random() * 6)) + 1;
    let imgPath1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgPath1);
  
    let randomNumber2 = Math.floor((Math.random() * 6)) + 1;
    let imgPath2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imgPath2);
  
    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").textContent = "🤝 Draw";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "🏅 Player 1 wins!";
    } else {
      document.querySelector("h1").textContent = "🏅 Player 2 wins!";
    }
  }
  
  // Attach event listener to roll button
  document.getElementById("rollButton").addEventListener("click", rollDice);
  