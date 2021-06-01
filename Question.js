class Question {

  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Letter Answer");
    this.title = createElement('h1');
    this.button = createButton('Submit')
    this.reset = createButton('Reset');

    this.question = createElement('h2')
    this.option1 = createElement('h3')
    this.option2 = createElement('h3')
    this.option3 = createElement('h3')
    this.option4 = createElement('h3')

  }
  hide(){
    this.title.hide()
    this.button.hide()
    this.input.hide()
    this.input2.hide()
  }

  display(){
    this.title.html("My Quiz")
    this.title.position(350,0)

    this.question.html("What country was the first to go into space?")
    this.question.position(150,80)  
    this.option1.html("A: United States of America")
    this.option1.position(150,100)
    this.option2.html("B: Soviet union")
    this.option2.position(150,120)
    this.option3.html("C: India")
    this.option3.position(150,140)
    this.option4.html("D: England" )
    this.option4.position(150,160)

    this.input.position(150,230)
    this.input2.position(150,300)
    this.button.position(250,400)
    this.reset.position(900, 660);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');

 
    this.button.mousePressed(()=>{
      contestant.name = this.input.value();
      contestant.distance = this.input2.value();  
      this.input.hide()
      this.input2.hide()
      contestantCount+=1
      console.log(contestantCount)
    contestant.index = contestantCount
    contestant.update()
    contestant.updateCount(contestantCount)
  })

    
  this.reset.mousePressed(() => {
    quiz.update(0)
    contestant.updateCount(0)
    database.ref('/').update({contestants:null})
});

  }

}
