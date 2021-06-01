var canva;
var gameState = 0;
var contestantCount = 0, database, quiz, question
var contestant, allContestants


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if (contestantCount === 2) {
    quiz.update(1);
  }

  if(gameState ===1){
    clear()
    quiz.play()

  }
}
