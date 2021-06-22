import React, {Component} from 'react';
import {Home,Progressbar} from './appStyled';
import Question from './Components/Question';

class App extends Component {
  constructor(props){
    super(props);

    this.quest=[
      {
        tema:"Sobre mim!",
        answer:"Qual meu segundo nome?",
        alternative:["André","Brum","Cortez","Ferreira"],
        key:1
      },{
        tema:"Sobre mim!",
        answer:"Qual meu asd nome?",
        alternative:["André","Brum","Cortez","Ferreira"],
        key:2
      },{
        tema:"Sobre mim!",
        answer:"Qual meu sdf nome?",
        alternative:["André","Brum","Cortez","Ferreira"],
        key:3
      },{
        tema:"Sobre mim!",
        answer:"Qual meu ertert nome?",
        alternative:["André","Brum","Cortez","Ferreira"],
        key:4
      },{
        tema:"Sobre mim!",
        answer:"Qual meu hsdsfe nome?",
        alternative:["André","Brum","Cortez","Ferreira"],
        key:5
      },
    ];
    
    this.state={
      atual:0,
      max:this.quest.length,
      valueList:[]
    }

    this.question;

    this.nextQuestion = this.nextQuestion.bind(this);

  }

  async nextQuestion(e, value){
    e.preventDefault();
    let state = this.state;
    if(state.atual<state.max){
      state.atual++;
      state.valueList.push(value);

      const glassDiv = e.target.parentNode.parentNode;
      await glassDiv.animate([
        {
          opacity: '1',
          transform: 'scale(1)'
        },
        {
          opacity:'0',
          transform: 'scale(0)'
        },
        {
          opacity: '1',
          transform: 'scale(1)'
        },
      ],
      {
        duration: 1500, 
        fill: 'forwards',
        easing:'ease-in-out'
      });
      this.setState(state);
    }
    console.log(this.state);
  }

  render(){

    this.question = this.quest.map(item=>{
      return  <Question
                tema={item.tema}
                quest={item.answer}
                args={item.alternative}
                events={this.nextQuestion}
                key={item.key}
              />
    });

    return (
      <Home>
        <Progressbar
          atual={this.state.atual+1}
          max={this.state.max}
        >
          <div className="progress"/>
          <div className="status">{this.state.atual+1} de {this.state.max} Resolvidos</div>
        </Progressbar>
        <div className="glass">
         {this.question[this.state.atual]}
        </div>
        <div className="circle cl1"/>
        <div className="circle cl2"/>
      </Home>
    );
  }
}

export default App;
