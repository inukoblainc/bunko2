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

  var counter = 0;
  var totalscore = 0;
  var round = 1;
  var player = 1;

  function takeOneTurn() {
    ctx.clearRect(0,0,900,900);
    ctx.font="24px Georgia";
    dice[0] = Math.floor((Math.random() * 6) + 1);
    dice[1] = Math.floor((Math.random() * 6) + 1);
    dice[2] = Math.floor((Math.random() * 6) + 1);
    if(dice[0] === round &&dice[1] === round && dice[2] === round){
      ctx.drawImage(bunko,0,0);
      counter = counter+21;
      totalscore = totalscore+21;
    }
    else if ( dice[0] ===dice[1] && dice[1] === dice[2]){
      ctx.drawImage(threeofakind,0,0);
      counter = counter+5;
      totalscore = totalscore+5;
    }

    else{
      if( dice[0] === 1&& round === 1){
        ctx.drawImage(diceImg[1], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;

      }
      if(dice[0] ===1 && round !== 1){
        ctx.drawImage(diceImg[1], 50,50);


      }
      if( dice[0] === 2 && round === 2){
        ctx.drawImage(diceImg[2], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[0] === 2 && round !== 2){
        ctx.drawImage(diceImg[2], 50,50);


      }
      if( dice[0] === 3 && round === 3){
        ctx.drawImage(diceImg[3], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[0] === 3 && round !== 3){
        ctx.drawImage(diceImg[3], 50,50);

      }
      if( dice[0] === 4 && round === 4){
        ctx.drawImage(diceImg[4], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[0] === 4 && round !== 4){
        ctx.drawImage(diceImg[4], 50,50);

      }
      if( dice[0] === 5 && round === 5){
        ctx.drawImage(diceImg[5], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[0] === 5 && round !== 5){
        ctx.drawImage(diceImg[5], 50,50);

      }

      if( dice[0] === 6 && round !== 6){
        ctx.drawImage(diceImg[6], 50,50);

      }
      if( dice[0] === 6 && round === 6){
        ctx.drawImage(diceImg[6], 50,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      // dice two
      if( dice[1] === 1&& round === 1){
        ctx.drawImage(diceImg[1], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if(dice[1] ===1 && round !== 1){
        ctx.drawImage(diceImg[1], 250,50);
      }
      if( dice[1] === 2 && round === 2){
        ctx.drawImage(diceImg[2], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[1] === 2 && round !== 2){
        ctx.drawImage(diceImg[2], 250,50);
      }
      if( dice[1] === 3 && round === 3){
        ctx.drawImage(diceImg[3], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[1] === 3 && round !== 3){
        ctx.drawImage(diceImg[3], 250,50);
      }
      if( dice[1] === 4 && round === 4){
        ctx.drawImage(diceImg[4], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[1] === 4 && round !== 4){
        ctx.drawImage(diceImg[4], 250,50);
      }
      if( dice[1] === 5 && round === 5){
        ctx.drawImage(diceImg[5], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[1] === 5 && round !== 5){
        ctx.drawImage(diceImg[5], 250,50);
      }

      if( dice[1] === 6 && round !== 6){
        ctx.drawImage(diceImg[6], 250,50);
      }
      if( dice[1] === 6 && round === 6){
        ctx.drawImage(diceImg[6], 250,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      // dice three
      if( dice[2] === 1&& round === 1){
        ctx.drawImage(diceImg[1], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if(dice[2] ===1 && round !== 1){
        ctx.drawImage(diceImg[1], 450,50);
      }
      if( dice[2] === 2 && round === 2){
        ctx.drawImage(diceImg[2], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[2] === 2 && round !== 2){
        ctx.drawImage(diceImg[2], 450,50);
      }
      if( dice[2] === 3 && round === 3){
        ctx.drawImage(diceImg[3], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[2] === 3 && round !== 3){
        ctx.drawImage(diceImg[3], 450,50);
      }
      if( dice[2] === 4 && round === 4){
        ctx.drawImage(diceImg[4], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[2] === 4 && round !== 4){
        ctx.drawImage(diceImg[4], 450,50);
      }
      if( dice[2] === 5 && round === 5){
        ctx.drawImage(diceImg[5], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if( dice[2] === 5 && round !== 5){
        ctx.drawImage(diceImg[5], 450,50);
      }

      if( dice[2] === 6 && round !== 6){
        ctx.drawImage(diceImg[6], 450,50);
      }
      if( dice[2] === 6 && round === 6){
        ctx.drawImage(diceImg[6], 450,50);
        counter = counter+1;
        totalscore = totalscore+1;
      }
      if ( counter > 21){
        round = round+1;
        counter = 0
      }
      if (round === 7){
        round = "End";
      }


      if ( dice[0] !== round && dice[1] !== round && dice[2] !== round && round !== "End"){
        player = player +1;
        if(player === 4){
          player = 1
        }
        ctx.fillText("You didn't roll any " + round +"'s.  Hand the dice to Player " + player,150,330);

      }
    }

    ctx.fillText("Round score:  " + counter ,150,390);
    ctx.fillText("Total score:  " + totalscore,150,450);
    ctx.fillText("Round:  " + round,10,25);
    ctx.fillText("Player: " +player +"'s turn." , 150, 510);
  }


  window.onkeypress = function(e) {
    var key = e.which;

    if (key === 32 && round !== "End") {
      takeOneTurn();
    }
  };
})();
