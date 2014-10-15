(function() {
  var images = [null]; // no image for 0
  for (var i = 1; i <= 6; i += 1) {
    var img = new Image();
    img.src = "img/" + i + ".png";
    images.push(img);
  }
  var bunko = new Image();
  bunko.src = "img/bunko.png";
  var threeofakind = new Image();
  threeofakind.src = "img/threeofakind.png";
  var diceone;
  var dicetwo;
  var dicethree;
  var counter = 0;
  var totalscore = 0;
  var round = 1;
  function draw(){
    var canvas = document.getElementById("bunko");
    var ctx = canvas.getContext("2d");
    var player = 1;


    function ctxMove(){
      ctx.clearRect(0,0,900,900);
      ctx.font="24px Georgia";
      diceone = Math.floor((Math.random() * 6) + 1);
      dicetwo = Math.floor((Math.random() * 6) + 1);
      dicethree = Math.floor((Math.random() * 6) + 1);
      if(diceone === round &&dicetwo === round && dicethree === round){
        ctx.drawImage(bunko,0,0);
        counter = counter+21;
        totalscore = totalscore+21;
      }
      else if ( diceone ===dicetwo && dicetwo === dicethree){
        ctx.drawImage(threeofakind,0,0);
        counter = counter+5;
        totalscore = totalscore+5;
      }

      else{
        if( diceone === 1&& round === 1){
          ctx.drawImage(images[1], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;

        }
        if(diceone ===1 && round !== 1){
          ctx.drawImage(images[1], 50,50);


        }
        if( diceone === 2 && round === 2){
          ctx.drawImage(images[2], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( diceone === 2 && round !== 2){
          ctx.drawImage(images[2], 50,50);


        }
        if( diceone === 3 && round === 3){
          ctx.drawImage(images[3], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( diceone === 3 && round !== 3){
          ctx.drawImage(images[3], 50,50);

        }
        if( diceone === 4 && round === 4){
          ctx.drawImage(images[4], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( diceone === 4 && round !== 4){
          ctx.drawImage(images[4], 50,50);

        }
        if( diceone === 5 && round === 5){
          ctx.drawImage(images[5], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( diceone === 5 && round !== 5){
          ctx.drawImage(images[5], 50,50);

        }

        if( diceone === 6 && round !== 6){
          ctx.drawImage(images[6], 50,50);

        }
        if( diceone === 6 && round === 6){
          ctx.drawImage(images[6], 50,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        // dice two
        if( dicetwo === 1&& round === 1){
          ctx.drawImage(images[1], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if(dicetwo ===1 && round !== 1){
          ctx.drawImage(images[1], 250,50);
        }
        if( dicetwo === 2 && round === 2){
          ctx.drawImage(images[2], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicetwo === 2 && round !== 2){
          ctx.drawImage(images[2], 250,50);
        }
        if( dicetwo === 3 && round === 3){
          ctx.drawImage(images[3], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicetwo === 3 && round !== 3){
          ctx.drawImage(images[3], 250,50);
        }
        if( dicetwo === 4 && round === 4){
          ctx.drawImage(images[4], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicetwo === 4 && round !== 4){
          ctx.drawImage(images[4], 250,50);
        }
        if( dicetwo === 5 && round === 5){
          ctx.drawImage(images[5], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicetwo === 5 && round !== 5){
          ctx.drawImage(images[5], 250,50);
        }

        if( dicetwo === 6 && round !== 6){
          ctx.drawImage(images[6], 250,50);
        }
        if( dicetwo === 6 && round === 6){
          ctx.drawImage(images[6], 250,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        // dice three
        if( dicethree === 1&& round === 1){
          ctx.drawImage(images[1], 450,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if(dicethree ===1 && round !== 1){
          ctx.drawImage(images[1], 450,50);
        }
        if( dicethree === 2 && round === 2){
          ctx.drawImage(images[2], 450,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicethree === 2 && round !== 2){
          ctx.drawImage(images[2], 450,50);
        }
        if( dicethree === 3 && round === 3){
          ctx.drawImage(images[3], 450,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicethree === 3 && round !== 3){
          ctx.drawImage(images[3], 450,50);
        }
        if( dicethree === 4 && round === 4){
          ctx.drawImage(images[4], 450,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicethree === 4 && round !== 4){
          ctx.drawImage(images[4], 450,50);
        }
        if( dicethree === 5 && round === 5){
          ctx.drawImage(images[5], 450,50);
          counter = counter+1;
          totalscore = totalscore+1;
        }
        if( dicethree === 5 && round !== 5){
          ctx.drawImage(images[5], 450,50);
        }

        if( dicethree === 6 && round !== 6){
          ctx.drawImage(images[6], 450,50);
        }
        if( dicethree === 6 && round === 6){
          ctx.drawImage(images[6], 450,50);
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


        if ( diceone !== round && dicetwo !== round && dicethree !== round && round !== "End"){
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
      var key = e.which


        if (key === 32 && round !=="End") {
          ctxMove();
        }

    }


  }

  draw();
})();
