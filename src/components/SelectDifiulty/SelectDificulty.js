import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BtnContainer, BtnDificulty, TextBtn } from './styles';

export default class SelectDifiulty extends Component {
  constructor() {
    super()

    this.state = {
      // dificultys: ['Basico', 'intermediario', 'Avançado'],
      dificultys: [
        {name:'Basico', id:'basics'},
        {name:'intermediario', id:'intermediary'},
        {name:'Avançado', id:'advanced'},
      ],
      selected:'',
    };
    this.setDificulty = this.setDificulty.bind(this);
  }
  static contextType = AuthContext;

  async setDificulty(nowDificulty) {
    await this.context.setDificuldade(nowDificulty);
  }

 render(){
  return (
    <BtnContainer>
      {
      this.state.dificultys.map((dificuldade) => {
        return(
          <BtnDificulty 
            onPress={() => {this.setDificulty(dificuldade.id)}}
            key={dificuldade} 
            dificulty={dificuldade.id} 
            nowDificulty={this.context.difiuldade}>
            <TextBtn>{dificuldade.name}</TextBtn>
          </BtnDificulty>
        )
      })
      }
    </BtnContainer>
  );
 }
}