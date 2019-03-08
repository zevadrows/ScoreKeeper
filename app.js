var p1btt = document.querySelector(".p1Button");
var p2btt = document.querySelector(".p2Button");
var p1Display = document.querySelector(".p1Score");
var p2Display = document.querySelector(".p2Score");
var ttScore = document.querySelector(".totalScore");
var reset = document.querySelector(".resetButton");

var totalScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;



p1btt.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++
        if (p1Score == totalScore){
            p1Display.style.color = "green";
            gameOver = true;
            
        }
        p1Display.textContent = p1Score;
    }
});



p2btt.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++
        if (p2Score == totalScore){
            p2Display.style.color = "green";
            gameOver = true;
            
        }
        p2Display.textContent = p2Score;
    }
});


reset.addEventListener("click", function(){
    p1Score = 0;
    p1Display.textContent = 0;
    p1Display.style.color = "black";
    p2Score = 0;
    p2Display.textContent = 0;
    p2Display.style.color = "black";
    gameOver = false;
});
