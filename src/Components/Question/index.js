import React, {Component} from 'react';
import {Container,Title,Quest,Altenative} from './styled';


class Question extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }

    this.onChange = this.onChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  validation(e){
    if(this.state.value){
      let value = this.state.value;
      let state = this.state;
      state.value = '';
      this.setState(state);
      return this.props.events(e,value);
    }
    else{
      alert("Escolha a sua alternativa");
    }

  }

  onChange(e){
    let state = this.state;
    state.value = e.currentTarget.value;
    this.setState(state);
  }

  render(){
    return (
      <Container>
        <Title>
            {this.props.tema}
        </Title>

        <Quest>
            {this.props.quest}
        </Quest>

        <Altenative>
            {this.props.args.map((item,i) =>{
                return <label className="question" key={i} >
                            <input 
                              type="radio" 
                              key={i} 
                              id={item} 
                              value={item} 
                              name="alternativa"
                              onChange={this.onChange}
                              checked={this.state.value === item}
                            />
                            {item}
                        </label>
                
            })}
        </Altenative>

        <button onClick={this.validation}>Responder</button>
      </Container>
    );
  }
}

export default Question;
