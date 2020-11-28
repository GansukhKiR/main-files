// togloomnii bvh gazart ashiglagdah global huwisagchdiig end zarlay

// togloom duussan esehiig hadgalah tolowiin huwisagch
var isNewGame;
//toglogchiin eeljiig hadgalah huwisagch player
var activePlayer;

// toglogchdiin tsugluulsan onoog hadgalah huwsagch
var scores;

//toglogchiin eeljindeee tsugluulj bga onoog hadgalah huwsagch
var roundScore;

// shoonii zurgiig  vzvvleh elementiig DOM-oss haij olood ned hadgaliy
var diceDom = document.querySelector(".dice");

// togloomiig shineer ehlvvleh function
function initGame() {
  // togloom ehellee gedeg tolowt oruulna
  isNewGame = true;
  //toglogchiin eeljiig hadgalah huwisagch player
  activePlayer = 0;

  // toglogchdiin tsugluulsan onoog hadgalah huwsagch
  scores = [0, 0];
  //toglogchiin eeljindeee tsugluulj bga onoog hadgalah huwsagch
  roundScore = 0;

  // document.querySelector("#score-0").textContent = dice;
  // document.querySelector("#score-1").textContent = dice;

  //proggram ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
initGame();
//shoonii ali talaaraa buusniig hadgalah huwsagch heregtei, 1-6 gesen utgiig ene huwsagchid sanamsargvugeeer vvsgej ogno.
var diceNumber = Math.floor(Math.random() * 6) + 1;
// roll-dice towchluur

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1-6 dotorh sanamsargv  neg toog gargaj irne
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    //   buusan tooshii shoog hargalzah shoonii zurgnau web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //   buusan too n 1 ees ylgaatai bol idewhtei toglogchiiin eeljiin onoog nemegdvvlne
    if (diceNumber !== 1) {
      // 1-ees ylgaatai too buulaa. buusan toog toglogchid nemj ogno
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNewPlayer();

      // if (activePlayer === 0) {
      //   activePlayer = 1;
      // } else {
      //   activePlayer = 0;
      // }
    }
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // toglogchiig hold darah vyd vndsen onooruu roundscore iig nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // delgets deer onoog oorchlono
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // ug toglogch hojson esehiig shalgah
    if (scores[activePlayer] >= 100) {
      //  togloomiig duussan tolowt oruulna
      isNewGame = false;
      // ylagch gsen textiig nerniih n orond gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
      switchToNewPlayer();
    }
  }
});
// toglogchiin eelj solih function
function switchToNewPlayer() {
  // 1 buusan tul toglogchin eeljiig ene hesegt solj ugnu
  // ene toglogchiiin eeljin deer tsugluulsan onoog 0 bolgono

  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // toglogchiin eeljiig nogoo toglogchruu shiljvvlne
  // herew idewhitei toglolch n 0 baiwal idewhitei toglogchiig 1 bolgo
  //vgvi bol idewhitei toglogchiig 0 bolgo
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  diceDom.style.display = "none ";

  // ulaan tsegiig shiljvvleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// new game towchiig darahiin bol togloom ehlvvleh event listener vvsgeh
document.querySelector(".btn-new").addEventListener("click", initGame);
