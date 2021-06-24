import React, {Component} from 'react';
import {CardRound} from './styled';


export class ProgressRound extends Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.acertos/this.props.max*100,
      radius:200,
      max: this.props.max,
      acertos:this.props.acertos
    }

  }

  componentDidMount() {
    document.querySelector('.animateRound').animate([
        {
            strokeDashoffset : Math.round(Math.PI * ((this.state.radius/2)-8) *2)
        },
        {
            strokeDashoffset : Math.round(Math.PI * ((this.state.radius/2)-8) *2)*(100-this.state.value)/100
        }
    ],{
        duration: 1000, 
        fill: 'forwards',
        easing:'ease-in-out'
      } );
      
  }

  render(){
    return (
      <CardRound
        percent={this.state.value}
        className="ProgressBar"
        radius={this.state.radius}
        circumference={Math.round(Math.PI * ((this.state.radius/2)-8) *2)}
      >
        <svg className="ProgressBar-contentCircle"  >
            <g transform="translate(100, -100)">
                <circle 
                    transform="rotate(-90, 100, 100)" 
                    className="ProgressBar-circle animateRound" 
                    cx="0"
                    cy="0" 
                    r={(this.state.radius/2)-8+"px"} 
                />
            </g>
        </svg>
        <div className="ProgressBar-percentage ">
            <span>{Math.round(this.state.value)}%</span>
            <div>
                {this.props.acertos} de {this.props.max}
            </div>
        </div>
      </CardRound>
    );

  }
}

