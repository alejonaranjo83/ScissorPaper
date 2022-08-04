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


function play() {
    
    if (wins < 3 && losses <3) {

        while (wins < 3 && losses < 3) {
            var user = playerSelection
            var computerTry = computerChoose ();
    
            computerSelect.innerHTML = "The computer chose " + computerTry
    
            if (user==computerTry){
                result.innerHTML = "This is a tie! <br> keep trying";
            } else if ((user=="Rock" && computerTry=="Scissor") || (user=="Scissor" && computerTry=="Paper") ||
            (user=="Paper" && computerTry=="Rock")) {
                wins = wins + 1;
                result.innerHTML = "You win! <br>" + user + " beats " + computerTry;
            } else {
                losses = losses + 1;
                result.innerHTML = "Sorry but you lose :( <br>" + computerTry + " beats " + user;
            }
            counter.innerHTML = ("You´ve reached " + wins + " wins and " + losses + " losses.");
            break;
        }
    }

    else {
        if (wins > losses) {
            startover.innerHTML = "<strong>Excellent!!!</strong> you are the winner. Play again to prove you´re the best";
            wins = 0;
            losses = 0;
        }
        else {
            startover.innerHTML = "This game goes for the computer. Be brave and try it again.";
            wins = 0;
            losses = 0;
        }   
    }
}




// Asocio elementos de HTML con JS
var playerBtn = document.getElementById("options-container");

var btn = document.getElementById("button"); 

var computerSelect = document.getElementById("computerSelect")

var result = document.getElementById("result");

var counter = document.getElementById("counter");

var startover = document.getElementById("startover");


var wins = 0;
var losses = 0;


// Añado eventos al hacer click en botones y específico qué fxn deseo ejecutar en cada caso
playerBtn.addEventListener("click", playerChoose);

btn.addEventListener("click", play);
