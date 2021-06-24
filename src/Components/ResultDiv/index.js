import React, {Component} from 'react';
import {Result} from './styled';
import {ProgressRound} from '../ProgressBar';


class ResultDiv extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }

  }

  componentDidMount() {
    const glassDiv = document.querySelector('.glass');
      glassDiv.animate([
        {
          opacity: '0',
        },
        {
          opacity:'1',
        }
      ],
      {
        duration: 1000, 
        fill: 'forwards',
        easing:'ease-in-out'
      });
  }

  render(){
    return (
      <Result>
              
        <h1>
          Resultado
        </h1>

        <ProgressRound
          acertos={this.props.acertos}
          max={this.props.max}
        />

        <button onClick={this.props.startQuiz}> JOGAR DE NOVO </button>
      </Result>
    );

  }
}

export default ResultDiv;
