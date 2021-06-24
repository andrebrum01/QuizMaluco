import React, {Component} from 'react';
import {Welcome} from './styled';


class WelcomeDiv extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }

  }

  render(){
    return (
      <Welcome>
              <span>
                 Seja Bem-Vindo
              </span> 
              <span>
                 ao
              </span> 
              <h1>
                <div>
                  <span>
                    Q
                  </span>
                  <span>
                    U
                  </span>
                  <span>
                    I
                  </span>
                  <span>
                    Z
                  </span>
                </div>

                <div>
                  <span>
                    M
                  </span>
                  <span>
                    A
                  </span>
                  <span>
                    L
                  </span>
                  <span>
                    U
                  </span>
                  <span>
                    C
                  </span>
                  <span>
                    O
                  </span>
                </div>
              </h1>


              <button onClick={this.props.startQuiz}> JOGAR </button>
            </Welcome>
    );

  }
}

export default WelcomeDiv;
