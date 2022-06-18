/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { BtnContainer, BtnDificulty, TextBtn } from './styles';

export default class SelectDifiulty extends Component {
  constructor() {
    super()

    this.state = {
      dificultys: [{
        name:'Basico',
        id:'basicos'
      }, {
        name:'intermediario',
        id:'intermediario'
      }, {
        name:'Avançado',
        id:'avançado'
      }],
      selected:'',
    };
    this.setDificulty = this.setDificulty.bind(this);
  }
  static contextType = AuthContext;

  async setDificulty(id) {
    if (this.props.homeState === id) {
      this.props.updateDificulty('');
      this.props.exit();
      alert('saindo')
      return
    }
    this.props.updateDificulty(id);
  //  const {updateDificulty, updateEntry, homeState} = this.props
  }

 render(){
  return (
    <BtnContainer>
      {
      this.state.dificultys.map(({name, id}) => {
        return(
          <BtnDificulty 
            onPress={() => {this.setDificulty(id)}}
            key={name} 
            dificulty={id} 
            nowDificulty={this.props.homeState}>
            <TextBtn>{name}</TextBtn>
          </BtnDificulty>
        )
      })
      }
    </BtnContainer>
  );
 }
}