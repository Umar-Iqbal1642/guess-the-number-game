
// buttons

const submitBtn = document.querySelectorAll('.submit-btn')[0];
const resetBtn = document.querySelectorAll('.reset-btn')[0];
const playAgain = document.querySelectorAll('.playagian-btn')[0];
const howPlay = document.querySelectorAll('.infoBtn')[0];

// components

const inputBar = document.querySelectorAll('.input-num ')[0];
const mainHeading = document.querySelectorAll('.main-hdng')[0];
const result = document.querySelectorAll('.result')[0];
const scoreTag = document.querySelectorAll('.res-hdng')[1];
const highScoreTag = document.querySelectorAll('.res-hdng')[2];


// variables

let genNum = Math.floor((Math.random() * 5) + 1);
let count = 1;
let score = 0;
let highScore = 0;

console.log(genNum);


// functions to calculate score and high-score

function calScr(count) {
    switch (count) {
        case 1:
            score = 1000;
            return score;
            break;
        case 2:
            score = 500;
            return score;
            break;
        case 3:
            score = 100;
            return score;
            break;
        default:
            break;
    }
}


function calHighScr(score) {
    highScore = Math.max(highScore, score);
    return highScore;
}

// play-again function

function playagain() {

    // resetting DOM

    inputBar.style.display = "block";
    inputBar.value = "";
    playAgain.style.display = "none";
    result.style.lineHeight = "30px";
    result.innerText = "Enter the Number";
    result.style.padding = "5px";
    result.style.backgroundColor = "yellow";
    result.style.color = "black";
    submitBtn.style.display = "block";
    scoreTag.innerText = "Your Score: ";


    // resetting varaible

    count = 1;
}

// input matching function

function checkVal() {

    // catching input 

    const inpNum = Number(((document.querySelectorAll('.input-num')[0]).value));

    // console.log(genNum);

    // checking for valid number input

    if (inpNum > 5 || inpNum == "" || inpNum < 1) {

        alert("Enter number only between 1 to 5!");

        inputBar.value = "";

        return;

    }

    // tracking count (chances)

    if (count > 2 && genNum != inpNum) {

        // resetting variables

        score = 0;
        count = 1;

        // resetting DOM

        scoreTag.innerText = "Your Score: 0";
        result.innerText = "Game Over! You are Dumb 3/3";
        result.style.color = "white";
        result.style.padding = "20px 10px";
        result.style.backgroundColor = "#ff0303";
        playAgain.style.display = "block";
        submitBtn.style.display = "none";
        inputBar.style.display = "none";

        // gerenating new random number

        genNum = Math.floor((Math.random() * 5) + 1);

        return;

    } else if (genNum == inpNum) {             // matching input          

        // setting message

        result.innerText = "🎉 Woohoo! " + genNum + " is correct";
        result.style.padding = "20px 10px";
        result.style.backgroundColor = "#00ff8c"
        result.style.color = "darkblue";

        // calculating score and highscore

        scoreTag.innerText = "Your Score: " + calScr(count);
        highScoreTag.innerText = "High Score: " + calHighScr(score);

        // resetting input

        document.querySelectorAll('.input-num')[0].value = "";

        // generating new random number

        genNum = Math.floor((Math.random() * 5) + 1);

        // changing buttons and inputbar

        playAgain.style.display = "block";
        submitBtn.style.display = "none";
        inputBar.style.display = "none";

        // resetting count

        count = 1;

        // returning

        return;

    } else {

        // setting message

        result.innerText = "Number doesn't match! Try again " + count + "/3";
        result.style.color = "darkblue";

    }

    // increamenting count

    count++;
    console.log(count);


}

// reset function

function reset() {

    // resetting variables

    highScore = 0;
    score = 0;
    count = 1;


    // resetting DOM

    scoreTag.innerText = "Your Score: 0";
    highScoreTag.innerText = "High Score: 0";
    result.innerText = "Enter the Number";
    result.style.lineHeight = "30px";
    result.style.padding = "5px";
    result.style.backgroundColor = "yellow";
    result.style.color = "black";
    submitBtn.style.display = "block";
    playAgain.style.display = "none";
    inputBar.style.display = "block";
    inputBar.value = "";

    // generating new random number

    genNum = Math.floor((Math.random() * 5) + 1);


    return;
}

// screen resize function (to manipulate main-heading)

function updateHeading() {

    if (window.innerWidth <= 425) {
        mainHeading.innerHTML = "Guess the number <br /> between 1 to 5";
    } else {
        mainHeading.textContent = "Guess the number between 1 to 5";
    }

}

updateHeading();

// event listeners

submitBtn.addEventListener('click', checkVal);
resetBtn.addEventListener('click', reset);
playAgain.addEventListener('click', playagain);
window.addEventListener('resize', updateHeading);




