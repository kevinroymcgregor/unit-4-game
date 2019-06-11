let crystal1 = 1;
let crystal2 = 2;
let crystal3 = 3;
let crystal4 = 4;
let number = 18;
let score = 0;
let wins = 0;
let losses = 0;

let randomizer = function(x){
    return Math.floor(Math.random() * x) + 1;
}

let start = function(){
    score = 0;
    crystal1 = randomizer(12);
    crystal2 = randomizer(12);
    crystal3 = randomizer(12);
    crystal4 = randomizer(12);
    number = randomizer(100) + 18;
    $('#number-holder').text(number);
    $('#scoreHolder').text(0);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
}

let win = function(){
    alert("You win!");
    wins++;
    $('#winHolder').text(wins);
    // console.log(wins + ' ' + losses);
    start();
}

let loss = function(){
    alert("You lose!");
    losses++;
    $('#lossHolder').text(losses);
    // console.log(wins + ' ' + losses);
    start();
}

// guess = function(c){
//     if (c === 'crystal1'){
//         score += crystal1;
//         $('#scoreHolder').text(score);
//     }
//     else if (c === 'crystal2'){
//         score += crystal2;
//         $('#scoreHolder').text(score);
//     }
//     else if (c === 'crystal3'){
//         score += crystal3;
//         $('#scoreHolder').text(score);
//     }
//     else if (c === 'crystal4'){
//         score += crystal4;
//         $('#scoreHolder').text(score);
//     }
// }



guessC1 = function () {
    score += crystal1;
    $('#scoreHolder').text(score);
    if (score === number){
        win();
    } else if (score >= number){
        loss();
    }
}
guessC2 = function () {
    score += crystal2;
    $('#scoreHolder').text(score);
    if (score === number){
        win();
    } else if (score >= number){
        loss();
    }
}
guessC3 = function () {
    score += crystal3;
    $('#scoreHolder').text(score);
    if (score === number){
        win();
    } else if (score >= number){
        loss();
    }
}
guessC4 = function () {
    score += crystal4;
    $('#scoreHolder').text(score);
    if (score === number){
        win();
    } else if (score >= number){
        loss();
    }
}