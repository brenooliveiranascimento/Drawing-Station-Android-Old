import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../Contexts';
import { BtnContainer, BtnDificulty, TextBtn } from './styles';

export default class SelectDifiulty extends Component {
  static contextType = AuthContext;
 render(){
   const dificultys = Array(this.context.exerciceData);
  return (
    <BtnContainer>
      {
        dificultys.map((dificulty) => (
          <BtnDificulty>
            <TextBtn>
              a
            </TextBtn>
          </BtnDificulty>
        ))
      }
    </BtnContainer>
  );
 }
}