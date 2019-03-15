var p1btt = document.querySelector(".p1Button");
var p2btt = document.querySelector(".p2Button");
var p1Display = document.querySelector(".p1Score");
var p2Display = document.querySelector(".p2Score");
var ttScore = document.querySelector(".totalScore");
var reset = document.querySelector(".resetButton");
var numberInput = document.querySelector("input");

//buttons
var ttScoreButtons = document.getElementsByClassName("ttScoreBtn");

var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var button5 = document.querySelector("#btn5");
var button6 = document.querySelector("#btn6");
var button7 = document.querySelector("#btn7");
var button8 = document.querySelector("#btn8");
var button9 = document.querySelector("#btn9");
var button10 = document.querySelector("#btn10");
//end Buttons

var totalScore = 5;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;


button1.addEventListener("click", function(){ scoreClick(1)});
button2.addEventListener("click", function(){ scoreClick(2)});
button3.addEventListener("click", function(){ scoreClick(3)});
button4.addEventListener("click", function(){ scoreClick(4)});
button5.addEventListener("click", function(){ scoreClick(5)});
button6.addEventListener("click", function(){ scoreClick(6)});
button7.addEventListener("click", function(){ scoreClick(7)});
button8.addEventListener("click", function(){ scoreClick(8)});
button9.addEventListener("click", function(){ scoreClick(9)});
button10.addEventListener("click", function(){ scoreClick(10)});

function scoreClick(nBtn){
    totalScore = nBtn;
    ttScore.textContent = nBtn;
}

numberInput.addEventListener("change", function(){
    totalScore = numberInput.value;
    ttScore.textContent = numberInput.value;
})

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
