const roll = function(){
  //spin the dice
  document.getElementById("dice").classList.add("rotate");
  document.getElementById("winner").hidden = true;
  document.getElementById("attackersRemaining").hidden = true;
  document.getElementById("defendersRemaining").hidden = true;

  setTimeout(() => {
    document.getElementById("dice").classList.remove("rotate");
    document.getElementById("winner").hidden = false;
    document.getElementById("attackersRemaining").hidden = false;
    document.getElementById("defendersRemaining").hidden = false;
  }, 500);
  
  let attackers = document.getElementById("attackers").value;
  let defenders = document.getElementById("defenders").value;
  let attackersLose = 0;
  let defendersLose = 0;

  console.log("Attackers = " + attackers);
  console.log("Defenders = " + defenders);

  while (attackers > 1 && defenders > 0){
    let attackersRoll = [];
    let defendersRoll = [];

    //Determine how many attacking dice to roll
    if (attackers >= 4){
      //roll 3 dice
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
      //sort the roll from highest to lowest die
      attackersRoll.sort(function(a, b){return b - a});
    }
    else if (attackers >= 3) {
      //roll 2 dice
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
      //sort the roll from highest to lowest die
      attackersRoll.sort(function(a, b){return b - a});
    }
    else if (attackers >= 2) {
      //roll 1 die
      attackersRoll.push(Math.floor(Math.random() * 6) + 1);
    }
    
    //Determine how many defending dice to roll
    if (defenders >= 2) {
      //roll 2 dice
      defendersRoll.push(Math.floor(Math.random() * 6) + 1);
      defendersRoll.push(Math.floor(Math.random() * 6) + 1);
      //sort the roll from highest to lowest die
      defendersRoll.sort(function(a, b){return b - a});
    }
    else if (defenders >= 1) {
      //roll 1 die
      defendersRoll.push(Math.floor(Math.random() * 6) + 1);
    }

    //Determine winners
    if (attackersRoll[0] > defendersRoll[0]) {
      defenders--;
      defendersLose++;
    }
    else {
      attackers--;
      attackersLose++;
    }

    if (attackersRoll.length >= 2 && defendersRoll.length >= 2) {
      if (attackersRoll[1] > defendersRoll[1]) {
        defenders--;
        defendersLose++;
      }
      else {
        attackers--;
        attackersLose++;
      }
    }

    console.log("Attackers Roll = " + attackersRoll);
    console.log("Defenders Roll = " + defendersRoll);
    console.log("Attackers lose " + attackersLose + ", " + attackers + " remaining.");
    console.log("Defenders lose " + defendersLose + ", " + defenders + " remaining.");
  }

  //Update HTML with results
  if (defenders == 0) {
    document.getElementById("winner").innerHTML = "Attacker Wins!";
  }
  else {
    document.getElementById("winner").innerHTML = "Defender Wins!";
  }

  document.getElementById("attackersRemaining").innerHTML = "Attacker Loses " + attackersLose + ", " + attackers + " Remaining";

  document.getElementById("defendersRemaining").innerHTML = "Defender Loses " + defendersLose + ", " + defenders + " Remaining";

}