const roll = function(){
  //spin the dice
  document.getElementById("dice").classList.add("rotate");
  document.getElementById("winner").hidden = true;
  document.getElementById("attackersRemaining").hidden = true;
  document.getElementById("defendersRemaining").hidden = true;
  document.getElementById("summaryHeading").hidden = true;
  document.getElementById("summary").hidden = true;

  setTimeout(() => {
    document.getElementById("dice").classList.remove("rotate");
    document.getElementById("winner").hidden = false;
    document.getElementById("attackersRemaining").hidden = false;
    document.getElementById("defendersRemaining").hidden = false;
    document.getElementById("summaryHeading").hidden = false;
  }, 500);
  
  let attackers = document.getElementById("attackers").value;
  let defenders = document.getElementById("defenders").value;
  
  let attackersLost = 0;
  let defendersLost = 0;

  console.log("Attackers = " + attackers);
  console.log("Defenders = " + defenders);

  document.getElementById("summaryHeading").innerHTML = "<br>Roll Summary +</br>";
  document.getElementById("summary").innerHTML = "";

  while (attackers > 1 && defenders > 0){
    let attackersRoll = [];
    let defendersRoll = [];
    let attackersLose = 0;
    let defendersLose = 0;

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
      defendersLost++;
      defendersLose++;
    }
    else {
      attackers--;
      attackersLost++;
      attackersLose++;
    }

    if (attackersRoll.length >= 2 && defendersRoll.length >= 2) {
      if (attackersRoll[1] > defendersRoll[1]) {
        defenders--;
        defendersLost++;
        defendersLose++;
      }
      else {
        attackers--;
        attackersLost++;
        attackersLose++;
      }
    }

    //Update HTML with summary
    document.getElementById("summary").innerHTML += "<br>Attackers Roll = " + attackersRoll  + " and Defenders Roll = " + defendersRoll + "<br>";
    document.getElementById("summary").innerHTML += "Attackers lose " + attackersLose + ", " + attackers + " remaining.<br>";
    document.getElementById("summary").innerHTML += "Defenders lose " + defendersLose + ", " + defenders + " remaining.<br>";
  }

  //Update HTML with results
  if (defenders == 0) {
    document.getElementById("winner").innerHTML = "Attacker Wins!";
  }
  else {
    document.getElementById("winner").innerHTML = "Defender Wins!";
  }

  document.getElementById("attackersRemaining").innerHTML = "Attacker Lost " + attackersLost + " has " + attackers + " Remaining";

  document.getElementById("defendersRemaining").innerHTML = "Defender Lost " + defendersLost + " has " + defenders + " Remaining";

}

const reset = function(){
  document.getElementById("winner").hidden = true;
  document.getElementById("attackersRemaining").hidden = true;
  document.getElementById("defendersRemaining").hidden = true;
  document.getElementById("summary").hidden = true;
  document.getElementById("summaryHeading").hidden = true;
}

const showSummary = function(){
  document.getElementById("summaryHeading").innerHTML = "<br>Roll Summary</br>";
  document.getElementById("summary").hidden = false;
}