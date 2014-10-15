(function() {
  var canvas = document.getElementById("bunko");
  var ctx = canvas.getContext("2d");

  var diceImg = [null]; // no image for 0
  for (var i = 1; i <= 6; i += 1) {
    var img = new Image();
    img.src = "img/" + i + ".png";
    diceImg.push(img);
  }

  var bunko = new Image();
  bunko.src = "img/bunko.png";

  var threeofakind = new Image();
  threeofakind.src = "img/threeofakind.png";

  var dice = new Array(3);
  var playerscore = new Array(3);
  for (var i = 0; i <= 2; i += 1) {
    playerscore[i] = 0;
	}
  var counter = 0;
  var totalscore = 0;
  var round = 1;
  var player = 1;

  function takeOneTurn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px Georgia";

    // roll all the dice
    var i;
    for (i = 0; i < dice.length; i += 1) {
      dice[i] = Math.floor((Math.random() * 6) + 1);
    }

    // check for bunko
    var gotBunko = true;
    for (i = 0; i < dice.length; i += 1) {
      if (dice[i] !== round) {
        gotBunko = false;
        break;
      }
    }

    // check for three of a kind
    var gotThreeOfAKind = true;
    for (i = 1; i < dice.length; i += 1) {
      if (dice[i] !== dice[i-1]) {
        gotThreeOfAKind = false;
        break;
      }
    }

    if (gotBunko) {
      ctx.drawImage(bunko,0,0);
      counter = counter+21;
      totalscore = totalscore+21;
	  playerscore[player-1]= playerscore[player-1]+21;
	  
    } else if (gotThreeOfAKind) {
      ctx.drawImage(threeofakind,0,0);
      counter = counter+5;
      totalscore = totalscore+5;
	  playerscore[player-1]= playerscore[player-1]+5;
	  
    } else {
      var anyDiceEqualRound = false;
      for (i = 0; i < dice.length; i += 1) {
        ctx.drawImage(diceImg[dice[i]], 50 + i * 200, 50);
        if (dice[i] === round) {
          counter += 1;
          totalscore += 1;
		  playerscore[player-1]= playerscore[player-1]+1;
          anyDiceEqualRound = true;
        }
      }

      if (counter > 20) {
        round += 1;
        counter = 0;
      }

      if (round === 7) {
        round = "End";
      }

      if (!anyDiceEqualRound) {
        player += 1;
        if (player === 4) {
          player = 1;
        }
        ctx.fillText("You didn't roll any " + round +"'s.  Hand the dice to Player " + player,150,330);
      }
    }

    ctx.fillText("Round score:  " + counter ,150,390);
    ctx.fillText("Total score:  " + totalscore,150,450);
    ctx.fillText("Round:  " + round,10,25);
    ctx.fillText("Player: " +player +"'s turn." , 150, 510);
	ctx.font = "20px Georgia";
	ctx.fillText("Player One's score: " + playerscore[0],0,570);
	ctx.fillText("Player Two's score: " + playerscore[1],220,570);
	ctx.fillText("Player Three's score: " + playerscore[2],440,570);
  }

  window.onkeypress = function(e) {
    var key = e.which;

    if (key === 32 && round !== "End") {
      takeOneTurn();
    }
  };
})();
