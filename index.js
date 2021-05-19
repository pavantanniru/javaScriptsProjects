

var player1='player1';
var player2='player2';


function editNames() {

  player1 = prompt("Enter 1st user name:");

  player2 =  prompt("Enter 2st user name:");

  document.getElementsByClassName("player1")[0].innerHTML=player1;

  document.getElementsByClassName("player2")[0].innerHTML=player2;

}

var randomNo1;

var randomNo2;


function rollTheDice() {

     randomNo1 = Math.floor(Math.random() * 6) + 1;

     randomNo2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("img1").setAttribute("src","static/images/dice-"+ randomNo1+".jpg");

    document.getElementById("img2").setAttribute("src","static/images/dice-"+ randomNo2+".jpg");

    if (randomNo1>randomNo2) {

      document.querySelector(".winner").innerHTML = "player 🚩 one wins";

      document.querySelector(".winner").style.color = "red";

    }

    else if (randomNo2>randomNo1) {

      document.querySelector(".winner").innerHTML = "player two wins 🚩";

      document.querySelector(".winner").style.color = "green";


    }

    else{
      document.querySelector(".winner").innerHTML = "Draw 🚩 match!";

      document.querySelector(".winner").style.color = "blue";
    }
}
