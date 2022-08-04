// alert("verificando q JS esté leyendo");


// Creo fxn para saber qué opción eligió el usuario
function playerChoose (selec) {
    playerSelection = selec.target.value;
    console.log("Player chose " + playerSelection)
}


// Creo fxn para calcular el valor aleatorio que escogerá el computador
function computerChoose (min, maxi) {
    var randomPC;
    var min = 1;
    var maxi = 3
    randomPC = Math.floor(Math.random() * (maxi - min + 1)) + min;

    if (randomPC==1){
        randomPC = "Rock";
    } else if ( randomPC==2) {
        randomPC = "Scissor";
    } else {
        randomPC = "Paper";
    };

    console.log("The computer chose " + randomPC);
    return randomPC;
}


// Creo fxn para decidir quién ganó la partida
function play() {
    var user = playerSelection
    var computerTry = computerChoose ();

    computerSelect.innerHTML = "The computer chose " + computerTry

    if (user==computerTry){
        result.innerHTML = "This is a tie! <br> keep trying";
    } else if ((user=="Rock" && computerTry=="Scissor") || (user=="Scissor" && computerTry=="Paper") ||
    (user=="Paper" && computerTry=="Rock")) {
        result.innerHTML = "You win! <br>" + user + " beats " + computerTry;
    } else {
        result.innerHTML = "Sorry but you lose :( <br>" + computerTry + " beats " + user;
    }
}



// Asocio elementos de HTML con JS
var playerBtn = document.getElementById("options-container");

var btn = document.getElementById("button"); 

var computerSelect = document.getElementById("computerSelect")

var result = document.getElementById("result");


// Añado eventos al hacer click en botones y específico qué fxn deseo ejecutar en cada caso
playerBtn.addEventListener("click", playerChoose);

btn.addEventListener("click", play);
