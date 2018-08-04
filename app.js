const team = {
  _players : [{firstName: "Pablo",
              lastName: "Sanchez",
              age: 11},
             {firstName: "Louis",
             lastName: "Garcia",
             age: 13},
             {firstName: "Henry",
             lastName: "Johnson",
             age: 12}],
  _games : [{opponent: "Broncos",
             teamPoints: 42, 
             opponentPoints: 27},
            {opponent: "Tigers", 
             teamPoints: 31, 
             opponentPoints: 50},
            {opponent: "Bruins", 
             teamPoints: 23, 
             opponentPoints: 27}],
  
  get games() {
    return this._games;
  },
  addPlayer (firstName,lastName,age) {
    //create a new object with addPlayer para
    let player = {firstName: firstName,
                 lastName: lastName,
                  age: age};
    //adds player object to games' array
    this._players.push(player);
  },
  addGame (opponent,teamPoints,opponentPoints) {
    //creates a new object with the addGame para
    let game = {opponent: opponent,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints};
    
    //adds game object to teams' array
    this._games.push(game);
  },
        
};

team.addPlayer("Steph","Curry",28);
team.addPlayer("Lisa","Leslie",44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Voltz",79,46);
team.addGame("Hornets",65,70);
team.addGame("Bulldogs",32,45);
console.log(team._players);
console.log(team._games);
