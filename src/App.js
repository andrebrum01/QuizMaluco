import React, {Component} from 'react';
import {Home,Progressbar} from './appStyled';

import Question from './Components/Question';
import WelcomeDiv from './Components/WelcomeDiv';
import ResultDiv from './Components/ResultDiv';

class App extends Component {
  constructor(props){
    super(props);

    this.quest=[
      {
        tema:"O quanto você conhece o neymar?",
        answer:"Quantos anos o craque neymar tem? (19/04/2020)",
        alternative:[
          "28 anos",
          "25 anos",
          "24 anos",
        ],
        resp:"28 anos"
      },{
        tema:"O quanto você conhece o neymar?",
        answer:"Qual foi o ano que o neymar conquistou sua primeira libertadores pelo santos?",
        alternative:[
          "2011",
          "2012",
          "2010",
        ],
        resp:"2011"
      },{
        tema:"O quanto você conhece o neymar?",
        answer:"Qual é o nome do filho do neymar?",
        alternative:[
          "João Pedro",
          "Davi Lucca",
          "Mateus Neymar Jr Jr",
          "Nego Ney"
        ],
        resp:"Davi Lucca"
      },{
        tema:"O quanto você conhece o neymar?",
        answer:"Em que ano o neymar foi para o barça?",
        alternative:[
          "2013",
          "2015",
          "Nunca foi pro Barça",
          "2012"
        ],
        resp:"2013"
      },{
        tema:"O quanto você conhece o neymar?",
        answer:"Em que ano o neymar fez sua estreia pela seleção?",
        alternative:[
          "2009",
          "2010",
          "Brasil sempre teve Neymar",
          "2008",
          "2020"
        ],
        resp:"2009"
      },{
        tema:"O quanto você conhece o neymar?",
        answer:"Quantas champions o neymar tem? (19/04/2020)",
        alternative:[
          "4",
          "1",
          "0, ele não tem",
          "2",
        ],
        resp:"1"
      }
    ];
    
    this.state={
      atual:0,
      max:this.quest.length,
      valueList:[],
      start: false,
      end:false,
      acertos:0,
    }

    this.question=[];

    this.nextQuestion = this.nextQuestion.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.endQuiz = this.endQuiz.bind(this);
    
  }


  nextQuestion(e, value){
    e.preventDefault();
    let state = this.state;
    if(state.atual+1<state.max){
      state.atual++;
      state.valueList.push(value);      
    }
    else if(state.atual+1===state.max){
      state.atual++;
      state.valueList.push(value);      
      state = this.endQuiz(state);
    }
    this.setState(state);      
  }

  startQuiz(e){
    e.preventDefault();
    this.setState(...this.state,{start:!this.state.start})
  }

  endQuiz(state){
    let acertos=0;

    for (let i=0;i<this.quest.length;i++){
      if(this.quest[i].resp === state.valueList[i]) acertos++
    }

    state.end=true;
    state.acertos=acertos;

    console.log(state.valueList);
    return state;
  }

  render(){
    let glass = 'glass';
    if (!this.state.start || this.state.end) {
      glass += ' center';
    }

    this.question = this.quest.map((item,i)=>{
      return  <Question
                tema={item.tema}
                quest={item.answer}
                args={item.alternative}
                events={this.nextQuestion}
                key={i}
              />
    });

    return (
      <Home>
        {this.state.start && 
          <Progressbar
            atual={this.state.atual}
            max={this.state.max}
          >
            <div className="progress"/>
            <div className="status">{this.state.atual} de {this.state.max} Resolvidos</div>
          </Progressbar>
        }
        <div 
          className={glass} 
        >
         {!this.state.end?this.state.start?
            this.question[this.state.atual]
            :
            <WelcomeDiv
              startQuiz={this.startQuiz}
            />
            :<ResultDiv
              acertos={this.state.acertos}
              max={this.state.max}
            />
         }
        </div>
        <div className="circle cl1"/>
        <div className="circle cl2"/>
      </Home>
    );
  }
}

export default App;
