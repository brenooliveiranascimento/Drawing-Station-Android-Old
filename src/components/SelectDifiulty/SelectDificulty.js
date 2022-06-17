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
    this.setDificulty = this.setDificulty.bind(this);
  }
  static contextType = AuthContext;

  async setDificulty(nowDificulty) {
    if (this.context.difiuldade === nowDificulty) {
      this.context.setDificuldade('');
      return
    }
    await this.context.setDificuldade(nowDificulty);
  }

 render(){
  return (
    <BtnContainer>
      {
      this.state.dificultys.map((dificuldade) => {
        return(
          <BtnDificulty 
            onPress={() => {this.setDificulty(dificuldade)}}
            key={dificuldade} 
            dificulty={dificuldade} 
            nowDificulty={this.context.difiuldade}>
            <TextBtn>{dificuldade}</TextBtn>
          </BtnDificulty>
        )
      })
      }
    </BtnContainer>
  );
 }
}