import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BtnContainer, BtnDificulty, TextBtn } from './styles';

export default class SelectDifiulty extends Component {
  constructor() {
    super()

    this.state = {
      dificultys: ['Basico', 'intermediario', 'Avançado'],
      selected:'',
    };
  }
  static contextType = AuthContext;

  setDificulty(nowDificulty) {
    this.setState(() => ({
      selected: nowDificulty,
    }))
    console.log(this.state.selected);
  }

 render(){
  return (
    <BtnContainer>
      {
      this.state.dificultys.map((dificuldade) => {
        return(
          <BtnDificulty onPress={() => {}} key={dificuldade} dificulty={dificuldade} nowDificulty={this.state.selected}>
            <TextBtn>{dificuldade}</TextBtn>
          </BtnDificulty>
        )
      })
      }
    </BtnContainer>
  );
 }
}