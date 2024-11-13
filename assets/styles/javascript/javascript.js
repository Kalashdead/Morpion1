let line = document.getElementById("line")
let currentPlayer = "X"
let win = '';
const gagner = document.querySelector("#GameOver")
let gagnant = false
let égalité = false
let cpu = false
let tableau = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

function grille() {

    for (let i = 0; i < tableau.length; i++) {

        for (let j = 0; j < tableau[i].length; j++) {

            let div = document.createElement("div")
            line.appendChild(div)
            div.classList.add('KevinTheGoat')
            div.addEventListener('click', () => play(div, i , j))

        }
    }

} grille()

function play(cellule, x , y) {

    if (cellule.textContent === "" && !gagnant) {
        cellule.textContent = currentPlayer;
        tableau[x][y] = currentPlayer
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkGagner()   
    }
    if(cpu){
        IA()
    }
}

function checkGagner() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            if (tableau[i][j] !="" && tableau[i][j] === tableau[i][j + 1] && tableau[i][j] === tableau[i][j + 2]) { 
                gagner.textContent="Les " + tableau[i][j] + " a gagner"
                gagnant = true
                return;
                  
            }
        }
    }

    
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 1; i++) {
            if (tableau[i][j] !="" && tableau[i][j] === tableau[i + 1][j] && tableau[i][j] === tableau[i + 2][j]) { 
                gagner.textContent="Les " + tableau[i][j] + " a gagner"
                gagnant = true
                return;
            }
        }
    }

  
    if (tableau[0][0] !="" && tableau[0][0] === tableau[1][1] && tableau[0][0] === tableau[2][2]) {
        gagner.textContent="Les " + tableau[0][0] + " a gagner"
        gagnant = true
        return;
    }
    if (tableau[0][2] !="" && tableau[0][2] === tableau[1][1] && tableau[0][2] === tableau[2][0]) {
        gagner.textContent="Les " + tableau[0][2] + " a gagner"
        gagnant = true
        return;
    }

    if (matchNul()){
        gagner.textContent= " Match Nul "
    }
}

function matchNul() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (tableau[row][col] === "") {
                return false;
            }
        }
    }
    return true;
}


function resetJeu() {
    tableau = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    let buttons = document.querySelectorAll(".KevinTheGoat");
    buttons.forEach(button => {
        button.textContent = ""; 
        gagnant = false
        gagner.textContent = " "
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() *  (max - min + 1)) + min;
  }

  function IA() {
    let nmrX = random(0,tableau.length - 1)
    let nmrY= random(0,tableau[0].length - 1)
    tableau[nmrX][nmrY] = "O"
    grille()
    
  }

  function gamemode() {
    cpu = !cpu
  }












