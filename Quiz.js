class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new player();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        
        question = new Question()
        question.display();
      }
    
  
  
  
    }
  
    play(){
      background("Orange")
      text("NOTE: CORRECT PLAYER HIGHLIGHTED IN GREEN", 150, 200)
      player.getContestantInfo()
      var y = 250
      for(var plr in allContestants){
        if(allContestants[plr].distance === "B"){
        fill("green")
        
        }
        else{
fill("red")

        }
        text(allContestants[plr].name+":"+allContestants[plr].distance, 150, y)
        y = y+20
      }


    }
}